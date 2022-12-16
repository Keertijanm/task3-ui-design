import React from "react";
import { NavLink } from "react-router-dom";
import homes from "../src/images/homes.png";
import Common from "./Common";
function Home() {
  return (
    <>
      <Common
        imgsrc={homes}
        name="Learn all IT courses From "
        visit="/about"
        btname="Ernoll now"
      />
      <h1> Meet our Founder</h1>
    </>
  );
}

export default Home;
