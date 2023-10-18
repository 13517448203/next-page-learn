import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
      <h1>Data fetch</h1>
      <ul>
        <li>
          <Link href="/data-fetch/pre-render/default">默认预渲染</Link>
        </li>
        <li>
          <Link href="/data-fetch/pre-render/static">静态生成</Link>
        </li>
      </ul>
    </div>
  )
}

export default index
