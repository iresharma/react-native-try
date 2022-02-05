import React from "react";
import Categories from "../components/categories";
import HeaderTabs from "../components/headerTabs";
import Search from "../components/searchBar";
import RestItem from '../components/restItem';
import Heading from "../components/heading";
import { ScrollView } from 'react-native'

export default function Home() {
  return (
    <>
      <HeaderTabs />
      <Search />
      <ScrollView showVerticalScrollIndicator={false} >
        <Categories />
        <Heading title={'Restaurants'} />
        <RestItem />
      </ScrollView>
    </>
  );
}
