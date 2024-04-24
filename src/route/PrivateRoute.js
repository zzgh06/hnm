import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({authenticate}) => {
  const auth = useSelector(state => state.auth.authenticate)
  return auth === true ? <ProductDetail /> : <Navigate to="/login"/>
}

export default PrivateRoute