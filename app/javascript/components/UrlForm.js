import React, { useState } from "react";
import API from "../utils/API";

import Errors from "./shared/Errors";

function UrlForm() {
  const [url, setUrl] = useState({ full_url: " " });
  const [msg, setMsg] = useState(" ");
  const [errors, setErrors] = useState([]);

  const handleChange = (event) => {
    setUrl((url) => ({ ...url, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.full_url) {
      API.postNewTask("/urls", "POST", url)
        .then((response) => {
          console.log(response, "hi");
          window.location.href = "/";
        })
        .catch((error) => {
          error.json().then(({ errors }) => {
            setErrors([...errors]);
          });
        });
    } else {
      setMsg("URL should not be empty");
    }
  };

  return (
    <div className="wrapper rwrapper">
      <div className="portal">
        {errors && <Errors errors={errors} />}
        <form onSubmit={handleSubmit} className="flex r-d-block">
          <input
            type="text"
            className="portal-input r-d-block width-full"
            name="full_url"
            placeholder="Enter the URL"
            onChange={handleChange}
            value={url.full_url}
          />
          <button
            type="submit"
            className={"portal-input-btn r-d-block width-full"}
          >
            Short
          </button>
        </form>
      </div>
    </div>
  );
}

export default UrlForm;
