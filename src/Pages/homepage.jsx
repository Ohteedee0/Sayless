import React from "react";
import Welcome from "./welcome";
import Navbar from "../Components/Navbar/Navbar";
import Popular from "../Pages/popular";
import Exclusive from "../Pages/exclusive";
import Footer from "../Pages/footer";
import Newcollection from "../Pages/newcollection";

export default function () {
  return (
    <div>
      <Welcome />
      <Popular />
      <Exclusive />
      <Newcollection />
      <Footer />
    </div>
  );
}
