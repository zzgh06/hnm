/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'

const ProductDetail = () => {
  const product = useSelector(state => state.product.selectedItem)
  const { id } = useParams()
  const dispatch = useDispatch();
  const getProductDetail = async ()=>{
    dispatch(productAction.getProductDetail(id))
  }

  useEffect(()=>{
    getProductDetail()
  }, [])

  return (
    <div>
      <Container>
        <Row>
          <Col className='product-detail-img'>
            <img style={{width : '100%', height : '80%'}} src={product?.img} alt=''/>
          </Col>
          <Col>
            <div className='product-detail-desc'>
              <div style={{fontSize : '23px'}}>{product?.title}</div>
              <div style={{fontSize : '20px'}}>\ {product?.price}</div>
              <div>{product?.choice === true ? "Conscious choice" : ""}</div>
              <select style={{marginBottom : '15px'}}>
                <option disabled hidden selected>사이즈 선택</option>
                {product?.size.map((size) => <option key={size} value={size}>{size}</option>)}
              </select>
              <Button style={{width : '100%'}} variant="dark" size="lg">추 가</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail