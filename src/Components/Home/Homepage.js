import React from "react";
import "../../App.css";
import NavigationBar from "./NavigationBar";
import TldsMenu from "./TldsMenu";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SearchDomain from "./SearchDomain";

function Homepage(props) {
  return (
    <div className="bannerImage ">
      <div className="container">
        <div className="row flex-row-reverse">
          <TldsMenu />
          <SearchDomain />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
