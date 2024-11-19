import React from "react";
import Navbar from "../Navbar/Navbar";
import BottomSection from "../BottomCard/bottomcard";
import SearchBar from "../Searchbar/searchbar";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <BottomSection />
    </div>
  );
};

export default HomePage;
