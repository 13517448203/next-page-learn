import React, { useEffect, useState } from 'react'

function LastSalesPage() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://next-page-learn-default-rtdb.firebaseio.com/sales.json')
      .then(res => res.json())
      .then(data => {
        let dataArray = [];

        for (let key in data) {
          dataArray.push({ id: key, username: data[key].username, age: data[key].age });
        }

        setData(dataArray)
        setLoading(false)
      })
  }, [])

  if(loading) {
    return <div>Loading...</div>
  }

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

export default LastSalesPage
