import React from 'react'
import fs from 'fs/promises'
import path from 'path'
import Link from 'next/link'

function index(props) {
  const { products } = props
  return (
    <div>
      <h1>SSG</h1>
      <ul>
        {
          products.map(item => (
            <li key={item.id}>
              <Link
                href={`/data-fetch/pre-render/static/${item.id}`}
                className="link"
              >
                {item.title}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  console.log('Re-Generating...');
  const filePath = path.join(process.cwd(), 'data', 'backend.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  if (!data.products) {
    return {
      redirect: {
        destination: '/404',
      }
    }
  }

  if (data.products.length === 0) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10
  }
}

export default index
