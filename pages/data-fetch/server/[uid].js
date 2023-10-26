import Link from 'next/link'
import React from 'react'

function index(props) {
  return (
    <div>
      <h1>{props.id}</h1>
    </div>
  )
}

export default index

export async function getServerSideProps(context) {
  const { params } = context
  const id = params.uid

  return {
    props: {
      id: 'User-ID-' + id
    }
  }
}
