import React, { useEffect, useState } from "react";
import mainBarData from "../data/mainBarData";
import Logobar from "./logobar";

import MainBar from "./mainBar";

const CompleteBar = () => {
  const [lat, Setlat] = useState<Number>();
  useEffect(() => {
    window.onscroll = function () {
      var y = window.scrollY;
      console.log(y);
      Setlat(y);
    };
  }, []);

  let as = "";
  if (lat > 75) {
    as = "sticky-top rounded-bottom ";
  } else {
    as = "";
  }
  return (
    <div id="alpha" className={as}>
      <div className="shadow p-3 mb-5  rounded">
        <nav className="container-fluid">
          <Logobar></Logobar>
          <MainBar
            Data={mainBarData}
            navcolor={"nav-link bg-white "}
            liidselect
          ></MainBar>
        </nav>
      </div>
    </div>
  );
};

export default CompleteBar;
