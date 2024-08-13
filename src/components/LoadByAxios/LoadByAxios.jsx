import { useState } from "react";
import { BarChart, Bar } from "recharts";

import axios from "axios";

const LoadByAxios = () => {
  const [phones, setPhones] = useState([]);
  axios
    .get("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then((data) => {
      const phoneData = data.data.data;
      const phonesWithFakeData = phoneData.map((phone) => {
        const obj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        // console.log(obj);
        return obj;
      });
      //   console.log(phonesWithFakeData);
      setPhones(phonesWithFakeData);
      // console.log(phones.length);
    });
  return (
    <div>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default LoadByAxios;
