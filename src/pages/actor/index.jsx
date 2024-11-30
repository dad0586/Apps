import { useEffect, useState } from "react";
import axios from "axios";

const Actor = () => {
  const [credits, setCredits] = useState([]); // Aktyorlar ma'lumotlarini saqlash uchun

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/10138/credits", {
        params: {
          api_key: "86940d36084c3669a50736d6baf4f3ce",
        },
      })
      .then((res) => {
        setCredits(res.data.cast); // Javobdan 'cast' ma'lumotlarini olamiz
      })
      .catch((error) => {
        console.error("Ma'lumot olishda xato yuz berdi:", error);
      });
  }, []);

  return (
    <div>
      <h1>Film Aktyorlari</h1>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Ism</th>
            <th>Rol</th>
            <th>Rasm</th>
          </tr>
        </thead>
        <tbody>
          {credits?.map((actor, index) => (
            <tr key={actor.cast_id}>
              <td>{index + 1}</td>
              <td>{actor.name}</td>
              <td>{actor.character}</td>
              <td>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    style={{ width: "100px", height: "150px" }}
                  />
                ) : (
                  <span>Rasm yo'q</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actor;
