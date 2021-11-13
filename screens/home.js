import React from "react";
import Categories from "../components/categories";
import HeaderTabs from "../components/headerTabs";
import Search from "../components/searchBar";

export default function Home() {
  return (
    <>
      <HeaderTabs />
      <Search />
      <Categories />
    </>
  );
}
