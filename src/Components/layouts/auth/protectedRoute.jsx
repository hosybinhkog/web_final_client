import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.users)
  if (loading) return <p>loading</p>
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
