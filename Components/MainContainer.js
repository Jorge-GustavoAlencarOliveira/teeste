import React from "react";
import Header from "./Header";


const MainContainer = ({children}) => {
  
  return (
    <>
      <Header />
      <main>
        {children}
      </main>    
    </>
  )
}
export default MainContainer
