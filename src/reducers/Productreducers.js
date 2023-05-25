// 1
import {
    ALL_PRODUCTS_SUCESS, CLEAR_ERRORS, ALL_PRODUCTS_FAIL, ALL_PRODUCTS_REQUEST,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL

} from "../constants/Productconst"

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {

        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_PRODUCTS_SUCESS:
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAA",action.payload.data)
            return {
                loading: false,
                products: action.payload.data.products,
                productsCount: action.payload.data.productsCount,
                resultPerPage: action.payload.data.resultPerPage,
                filteredProductsCount: action.payload.data.filteredProductsCount,
                // products: action.payload.data.products,
                // productsCount: action.payload.data.productsCount,
                // resultPerPage: action.payload.data.resultPerPage,
                // filteredProductsCount: action.payload.data.filteredProductsCount
            };

        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};



export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                productdetail: [],
            }
        case PRODUCT_DETAILS_SUCESS:
            console.log("action.payload,",action.payload)
            return {
                loading: false,
                product: action.payload,
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;

    }

}
