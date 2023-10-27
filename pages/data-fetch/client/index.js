import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
      <h1>Data fetch</h1>
      <ul>
        <li>
          <Link href="/data-fetch/client/base" className="link">获取本地数据</Link>
        </li>
        <li>
          <Link href="/data-fetch/client/sales" className="link">uesEffect fetch 获取 Firebase 数据库数据</Link>
        </li>
        <li>
          <Link href="/data-fetch/client/sales-swr" className="link">SWR 获取 Firebase 数据库数据</Link>
        </li>
      </ul>
    </div>
  )
}

export default index
