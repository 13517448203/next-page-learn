import React from 'react'
import styles from 'styles/Home.module.css'
import Link from 'next/link'

function index() {
  const people = [
    { id: 'max', name: 'Max'},
    { id: 'linda', name: 'Linda'},
  ]
  return (
    <div>
      <h1>Dynamic router</h1>

      <ul>
        {
          people.map(person => (
            <li key={person.id}>
              <Link
                href={`/router/dynamic/${person.id}`}
                className={styles.link}
              >
                {person.name}
              </Link>
              {/* <Link
                href={{
                  pathname: '/router/dynamic/[id]',
                  query: { id: person.id}
                }}
                className={styles.link}
              >
                {person.name}
              </Link> */}
            </li>
          ))
        } 
        </ul>
    </div>
  )
}

export default index
