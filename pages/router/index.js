import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div>
      <h1>router</h1>

      <ul>
          <li>
            <Link href="/router/dynamic" className="link">动态路由</Link>
          </li>
          <li>
            <Link href="/router/blog/1" className="link">包罗万象的路由</Link>
          </li>
          <li>
            <Link href="/router/project" className="link">实践</Link>
          </li>
        </ul>
    </div>
  )
}

export default index
