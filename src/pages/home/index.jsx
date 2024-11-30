import { useEffect, useState } from "react";
import "./main.scss";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "f498cd6e0bf1e35ce9129455697a2242",
        },
      })
      .then((res) => {
        setProducts(res.data.results); 
      })
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Film nomi</th>
            <th>Chiqarilgan sana</th>
            <th>Reyting</th>
            <th>Tavsif</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.release_date}</td>
              <td>{item.vote_average}</td>
              <td>{item.overview.substring(0, 50)}...</td>
              <td>
              <img
                  src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  alt={item.title}
                  style={{ width: "100px", height: "150px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
