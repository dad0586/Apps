import { useEffect, useState } from "react"
import "./main.scss"
import axios from "axios"
const Home = () => {
  const [data, setData] = useState([])
  console.log(data);


  useEffect(() => {
    axios.get('http://localhost:5010/products')
      .then((res) => {
        setData(res?.data)

      })
  }, [])


  return (
    <>
      <div>
        <div>
          <table className="table">
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>
            {data?.map((item, i) => (
              <tr key={i}>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  )
}

export default Home