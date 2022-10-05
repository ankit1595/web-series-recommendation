import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const webSeriesDb = {
  comedy: [
    { name: "Young Sheldon", rating: "5/10" },
    { name: "The Big Bang Theory", rating: "6/10" },
    { name: "The Office", rating: "10/10" },
  ],

  "sci-fi": [
    {
      name: "Star Trek: Lower Decks",
      rating: "8/10",
    },
    {
      name: "The Boys",
      rating: "10/10",
    },
    {
      name: "Ben 10",
      rating: "8/10",
    },
  ],
  drama: [
    {
      name: "undone",
      rating: "7/10",
    },
    {
      name: "Suits",
      rating: "7/10",
    },
    {
      name: "Reacher",
      rating: "4/10",
    },
  ],
};

function App() {
  const [selectedGenre, setSelectedGenre] = useState("drama");
  function genreClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎥 bingeWatch </h1>
      <p style={{ fontSize: "16px" }}>
        Checkout my favorite web series. Select a genre to get started
      </p>

      <div>
        {Object.keys(webSeriesDb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              background: "black",
              padding: "8px  16px",
              margin: "16px 6px",
              color: "whitesmoke",
              cursor: "pointer",
              fontSize: "16px"
            }}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {webSeriesDb[selectedGenre].map((series) => (
            <li
              key={series.name}
              style={{
                listStyle: "none",
                padding: "10px",
                border: "1px solid black",
                width: "450px",
                margin: "auto",
                marginTop: "10px",
              }}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style={{ fontSize: "larger" }}> {series.name} </div>
                <div> {series.rating} </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
