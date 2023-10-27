import React, { useEffect, useState } from 'react'

function PreFetch(props) {
  const [data, setData] = useState(props.data)

  useEffect(() => {
    setTimeout(()=> {
      fetch('https://next-page-learn-default-rtdb.firebaseio.com/sales.json')
        .then(res => res.json())
        .then(data => {
          let dataArray = [];

          for (let key in data) {
            dataArray.push({ id: key, username: data[key].username, age: data[key].age });
          }

          setData(dataArray)
        })
    }, 5000)
  }, [])

  if(!data) {
    return <div>No Data</div>
  }

  return (
    <div>
      <ul>
        {
          data.map(sale => (
            <li key={sale.id}>
              {sale.username} - {sale.age}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default PreFetch

export async function getStaticProps() {
  return fetch('https://next-page-learn-default-rtdb.firebaseio.com/sales.json')
    .then(res => res.json())
    .then(data => {
      let dataArray = [];

      for (let key in data) {
        dataArray.push({ id: key, username: data[key].username, age: data[key].age });
      }

      return { props: { data: dataArray }}
    })
}
