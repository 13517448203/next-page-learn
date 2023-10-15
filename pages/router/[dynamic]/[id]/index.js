import React from 'react'
import { useRouter } from 'next/router'

function index() {
  const router = useRouter()
  return (
    <div>
      dynamic route --- {router.query.id}
    </div>
  )
}

export default index
