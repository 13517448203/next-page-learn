import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
      <h1>Data fetch</h1>
      <ul>
        <li>
          <Link href="/data-fetch/pre-render" className="link">默认预渲染</Link>
        </li>
        <li>
          <Link href="/data-fetch/static" className="link">静态生成</Link>
        </li>
        <li>
          <Link href="/data-fetch/server" className="link">服务端渲染</Link>
        </li>
        <li>
          <Link href="/data-fetch/client" className="link">客户端获取数据</Link>
        </li>
      </ul>
    </div>
  )
}

export default index
