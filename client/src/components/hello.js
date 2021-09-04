import React, { useState, useEffect } from "react";
// import { getData } from "../functions/hello";

const Hello = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    // getData().then((data) => {
    //   setState(data);
    //   console.log(state);
    // });
    fetch("/api/hello")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setState(jsonRes.hello);
        // console.log(jsonRes);
      });
  }, []);

  return (
    <div>{state.length > 0 && state.map((e, i) => <li key={i}> {e} </li>)}</div>
  );
};

export default Hello;
