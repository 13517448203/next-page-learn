import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

function SalesSWR() {
  const [sales, setSales] = useState()

  const { data, error } = useSWR(
    'https://next-page-learn-default-rtdb.firebaseio.com/sales.json',
    { revalidateOnMount: true, shouldRetryOnError: false, refreshInterval: 5000 }
  )

  useEffect(() => {
    console.log(data, error);
    if (data) {
      let dataArray = [];

      for (const key in data) {
        dataArray.push({ id: key, username: data[key].username, age: data[key].age });
      }

      setSales(dataArray)
    }
  }, [data])

  if (error) {
    return <div>Failed to load.</div>
  }

  if (!data) {
    return <div>Loading</div>
  }

  if (!sales) {
    return <div>No Data</div>
  }

  return (
    <div>
      <ul>
        {
          sales.map(sale => (
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
