import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div className='product-card' onClick={()=>{showDetail()}}>
      <div className='product-img'>
        <img src={item?.img} alt=''/>
      </div>
      <div className='product-desc'>
        <div style={{color : 'green', fontWeight : '600'}}>{item?.choice === true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div>{item?.new === true ? "신제품" : ""}</div>
      </div>
    </div>
  )
}

export default ProductCard