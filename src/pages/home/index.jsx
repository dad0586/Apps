import { useEffect, useState } from "react"
import "./main.scss"
import axios from "axios"
const Home = () => {
  const [products, setProducts] = useState([])
  console.log(products);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => {
        setProducts(res?.products)

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
            {products?.map((item, i) => (
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