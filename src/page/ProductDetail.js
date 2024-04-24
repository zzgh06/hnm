/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async ()=>{
    let url = `https://my-json-server.typicode.com/zzgh06/hnm/products/${id}`
    let response = await fetch(url);
    // console.log(response)
    let data = await response.json()
    setProduct(data)
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
                {
                  product?.size.map((size) => <option key={size} value={size}>{size}</option>)
                }
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