import React from "react";
import UrlBar from "./UrlBar";
import UrlForm from "./UrlForm";
import UrlList from "./UrlList";

function Main(props) {
  return (
    <div className="main">
      <UrlForm />
      <div className="wrapper rwrapper">
        <section className="urls-cont">
          <UrlBar />
          <UrlList urls={props.urls} />
        </section>
      </div>
    </div>
  );
}

export default Main;
