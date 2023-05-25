import axios from 'axios'
import React, { useState } from 'react';
import {
    ALL_PRODUCTS_SUCESS, ALL_PRODUCTS_FAIL, ALL_PRODUCTS_REQUEST, CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL



} from '../constants/Productconst'
export const getProduct = (keyword = '', currentPage = 1, price = [0, 25000], category,ratings=0) => async (dispatch) => {

    try {
        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`

        if (category) {

            link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;
            console.log("===link", link)
        }
        dispatch({
            type: ALL_PRODUCTS_REQUEST
        });
        console.log("===link", link)
        const data = await axios.get(link);
        // console.log("data in get product is", data)
        dispatch({
            type: ALL_PRODUCTS_SUCESS,
            payload: data
        })

    }
    catch (error) {
        console.log("Error in get product ", error);
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }


}

// Used to clear errrors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}


export const getProductDetails = (id) => async (dispatch) => {
    console.log("knbvcvbn Id",id)
    try {

        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        });
        const { data } = await axios.get(`/api/v1/product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCESS,
            payload: data.product
        })

    }
    catch (error) {
        console.log("Error in get product ", error);
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error
        })
    }

}


