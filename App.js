import React, { useState } from "react";
import "./styles.css";
import leo from "../src/Image/leo.jpg";
import jailer from "../src/Image/jailer.jpg";
import vikram from "../src/Image/vikram.jpg";
import gameover from "../src/Image/gameover.jpg";
import uturn from "../src/Image/uturn.jpg";
import demon from "../src/Image/demon.jpg";
import T24 from "../src/Image/T24.jpg";
import INN from "../src/Image/INN.jpg";
import ayalaan from "../src/Image/ayalaan.jpg";
import partner from "../src/Image/partner.jpg";
import sanmugi from "../src/Image/sanmugi.jpg";
import raja from "../src/Image/raja.jpg";

const movieDictionary = {
  "Action": [
    {
      id: 1,
      title: "Leo (2023)",
      rating: "⭐ 8.4",
      availbleOn: "Netflix",
      genre: "Action",
      duration: "152min",
      imgUrl: leo,
      movieUrl: "https://www.netflix.com/in/title/81639319?s=a&trkid=13747225&trg=cp&vlang=en&clip=81910652"
    },
    {
      id: 2,
      title: "Jailer (2023)",
      rating: "⭐ 8.8",
      availbleOn: "Netflix",
      genre: "Action",
      duration: "152min",
      imgUrl: jailer,
      movieUrl: "https://www.amazon.com/Mountain-II-Caglar-Ertugrul/dp/B074T599M8"
    },
    {
      id: 3,
      title: "Vikram (2022)",
      rating: "⭐ 9.0",
      availbleOn: "Hotstar",
      genre: "Action",
      duration: "152min",
      imgUrl: vikram,
      movieUrl: "https://www.hotstar.com/in/movies/vikram/1260106598"
    }
  ],
  "Thriller": [
    {
      id: 4,
      title: "Game Over (2019)",
      rating: "⭐ 8.8",
      availbleOn: "Amazon Prime",
      genre: "Thriller",
      duration: "148min",
      imgUrl: gameover,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.4eb1c578-2d81-f757-917d-e4c16fbbfebe?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 5,
      title: "U-Turn (2019)",
      rating: "⭐ 8.2",
      availbleOn: "YouTube",
      genre: "Thriller",
      duration: "118min",
      imgUrl: uturn,
      movieUrl: "https://youtu.be/VwaV5SuCnNU?si=K0lL5fBOIqfACw8a"
    },
    {
      id: 6,
      title: "Demonte Colony (2017)",
      rating: "⭐ 8.5",
      availbleOn: "SunNXT",
      genre: "Thriller",
      duration: "130min",
      imgUrl: demon,
      movieUrl: "https://www.sunnxt.com/telugu-movie-demonte-colony-telugu-2015/detail/7745"
    }
  ],
  "Sci-Fi": [
    {
      id: 7,
      title: "24 (2016)",
      rating: "⭐ 8.7",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "136min",
      imgUrl: T24,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.7eb1fb0b-a20f-7738-4bfb-c194cbd01942?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 8,
      title: "Indru Netru Naalai (2015)",
      rating: "⭐ 8.6",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "169min",
      imgUrl: INN,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.34b17cec-bc76-719d-001b-38f5c7cabde9?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 9,
      title: "Ayalaan (2024)",
      rating: "⭐ 8.1",
      availbleOn: "Amazon Prime",
      genre: "Sci-Fi",
      duration: "120min",
      imgUrl: ayalaan,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.12b1c5a7-e664-7465-afbc-74d5411c4a9b?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    }
  ],
  "Comedy": [
    {
      id: 10,
      title: "Partner (2023)",
      rating: "⭐ 8.2",
      availbleOn: "Hotstar",
      genre: "Comedy",
      duration: "143min",
      imgUrl: partner,
      movieUrl: "https://www.hotstar.com/in/movies/chhichhore/1260012713"
    },
    {
      id: 11,
      title: "Avvai Shanmugi (1996)",
      rating: "⭐ 7.6",
      availbleOn: "Amazon Prime",
      genre: "Comedy",
      duration: "161min",
      imgUrl: sanmugi,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.2ab75432-96a8-3f8a-e623-ead336d992f8?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    },
    {
      id: 12,
      title: "All in All Azhagu Raja (2013)",
      rating: "⭐ 7.6",
      availbleOn: "Amazon Prime",
      genre: "Comedy",
      duration: "104min",
      imgUrl: raja,
      movieUrl: "https://www.primevideo.com/detail/amzn1.dv.gti.d4b8aa91-208d-b878-6fe9-6d9028d7fca2?ref=dvm_tt_wbr_pvs_piv&tag=imdbtag_tt_wbr_pvs_piv_in-21"
    }
  ]
};

const genreList = ["Action", "Thriller", "Sci-Fi", "Comedy"];

export default function App() {
  const [movieData, setGenre] = useState([]);
  const [msg, setMsg] = useState("Our Suggestions can be seen here! Pick a genre");

  function genreClickHandler(genreChosen) {
    const chosenMovies = movieDictionary[genreChosen];
    setGenre(chosenMovies);
    setMsg("Here are our recommendations!");
  }

  return (
    <div className="App">
      <h1 className="title">THIRAI</h1>
      <p className="tag">Choose a Genre</p>
      <div className="genres">
        <ul>
          {genreList.map((genre) => (
            <li
              key={genre}
              className="genreItem"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <p>{msg}</p>
      </div>
      <div className="movieList">
        <ul>
          {movieData.map((movie) => (
            <li key={movie.id.toString()}>
              <div className="movieCard">
                <div className="movieImg col-md-6">
                  <img src={movie.imgUrl} alt="MovieImage" />
                </div>
                <div className="movieDesc">
                  <h4>{movie.title}</h4>
                  <small className="tag">
                    {movie.rating} | {movie.genre} | {movie.duration}
                  </small>
                  <p className="tag">
                    <small>Available on : {movie.availbleOn}</small>
                  </p>
                  <p>
                    <a href={movie.movieUrl} target="_blank" rel="noopener noreferrer">
                      Watch Now
                    </a>
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
