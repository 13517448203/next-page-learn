import React from 'react'
import { useRouter } from 'next/router'

function index() {
  const router = useRouter()
  return (
    <div>
      dynamic route --- {router.query.dynamic}
    </div>
  )
}

export default index
