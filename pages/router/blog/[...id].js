import React from 'react'
import { useRouter } from 'next/router'

function BlogPage() {
  const router = useRouter()
  const { id } = router.query
  console.log(id)

  return (
    <div>
      blog page --- {router.query.id}
    </div>
  )
}

export default BlogPage
