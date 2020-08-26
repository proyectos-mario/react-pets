import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Search2 from "./components/Search2";
import DataInput from "./components/DataInput";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <Search2 />
      <DataInput />
      <Footer />
    </>
  );
};

export default App;
