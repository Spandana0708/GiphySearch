import React, { useEffect, useState } from "react";

import axios from "axios";

const Giphy = (props) => {
  const { onSearch } = props;
  const [allData, setAllData] = useState([]);
  const [text, setText] = useState("");

  const handleSearch = (event) => {
    setText(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      onSearch(text);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          q: text,
          //rating: "g",
          api_key: "cY8jljge6gvIUh4fV2s18iRsSBEG06KL",
        },
      });
      console.log(results);
      setAllData(results.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <label>Search:</label>
      <input
        type="text"
        value={text}
        onChange={(event) => handleSearch(event)}
        onKeyDown={handleKey}
      />

      <div style={{ padding: 10 }}>
        {allData.map((value, index) => {
          return (
            <div key={value.id}>
              <img src={value.images.fixed_height.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Giphy;
