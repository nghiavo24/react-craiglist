import React from 'react';
import listOfItems from './data.json'
import Header from './Header'
import Results from './Results'
import ResultsList from './ResultsList';

const App = () => {
  let cards = listOfItems.map((item) => {
    return <ResultsList name={item.title} price={item.cost} picture={item.image}/>
  })
  return (
    <>
    <Header />
    <Results />
    <>{cards}</>
    </>
  )
}

export default App;
