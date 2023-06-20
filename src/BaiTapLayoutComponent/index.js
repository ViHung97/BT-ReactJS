import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Item from "./Item";
import Footer from "./Footer";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Item />
        <Footer />
      </div>
    );
  }
}
