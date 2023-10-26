import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

function SalesSWR() {
  const [sales, setSales] = useState()

  const { data, error } = useSWR('https://next-page-learn-default-rtdb.firebaseio.com/sales.json')

  useEffect(() => {
    if (data) {
      let dataArray = [];

      for (let key in data) {
        dataArray.push({ id: key, username: data[key].username, age: data[key].age });
      }

      setSales(sales)
    }
  }, [data])

  if (error) {
    return <div>Failed to load.</div>
  }

  if (!data || !sales) {
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

export default SalesSWR
