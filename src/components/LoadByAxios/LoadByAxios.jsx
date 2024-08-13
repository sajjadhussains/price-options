import { useState } from "react";

import axios from "axios";

const LoadByAxios = () => {
  //   const [data, setData] = useState([]);
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => console.log(data.data.data));
  return <div></div>;
};

export default LoadByAxios;
