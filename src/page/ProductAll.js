/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/reducers/productSlice'

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList)
  const [query, setQuery] = useSearchParams();
  let dispatch = useDispatch()
  const getProducts = () => {
    let searchQuery = query.get('q') || ""; // || 를 통헤 쿼리가 있을 때, 없을 때 구분
    dispatch(fetchProducts(searchQuery))
  };


  useEffect(()=>{
    getProducts()
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item, index) => (
            <Col lg={3}>
              <ProductCard item={item} key={index}/>
            </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll