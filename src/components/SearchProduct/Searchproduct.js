import React, { Fragment, useState } from 'react'
import { Form, FormControl, Container, Row, Button, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import './searchproduct.css'
const Searchproduct = () => {
    const navigate = useNavigate()
    const [keyword, setkeyword] = useState("")
    const searchproductHandler = (e) => {
        setkeyword(e.target.value)
    }

    const submitsearchhandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }
    }
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <Form className="d-flex search_main" onSubmit={submitsearchhandler}>
                            <input
                                type="search"
                                placeholder="Search Products"
                                className="me-2 form-control searchpro"
                                aria-label="Search"
                                onChange={searchproductHandler}
                            />
                            <Button type='submit' className='search_btn' variant="outline-success">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default Searchproduct;