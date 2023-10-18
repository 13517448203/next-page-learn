import React from 'react'
import { useRouter } from 'next/router'

function index() {
  const router = useRouter()

  const handelClick = () => {
    router.push({
      pathname: '/router/dynamic/[people]/[id]',
      query: { people: router.query.people, id: '1' },
    })
  }

  return (
    <div>
      <h1>People --- {router.query.people}</h1>
      <button onClick={handelClick}>Load</button>
    </div>
  )
}

export default index
