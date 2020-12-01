import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function Home(props) {
  const [urls, setUrls] = useState(props.urls);
  return (
    <div>
      <Main urls={urls} />
    </div>
  );
}

export default Home;
