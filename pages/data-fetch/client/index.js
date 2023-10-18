import React, { useState, useEffect } from 'react'

function index() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/backend.json')
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      })
  }, [])

  return (
    <div>
      <h1>Data fetch</h1>
      <ul>
        {
          data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default index
