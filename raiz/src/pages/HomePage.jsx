import React from "react";
import Footer from "../components/Footer";
import MainHome from "../components/MainHome";
import Title from "../components/Title";

const HomePage = () => {
  const saludar = () => {
    console.log("Hola mundo");
  };

  return (
    <>
    
{/*       <Title titulo="principal" saludo="Hola mundo!" />
 */}   {/*    <main>
        <article>
          <button type="button" className="btn btn-primary" onClick={saludar}>
            Primary
          </button>
        </article>
      </main> */}
       <MainHome /> 
 
     </>
  );
};

export default HomePage;
