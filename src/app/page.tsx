import React from 'react'; // Importing React library
import Hero from './components/Hero'; // Importing Hero component
import Feature from './components/Feature'; // Importing Feature component
import Services from './components/Services'; // Importing Services component
import Menu from './components/Menu'; // Importing Menu component
import Survey from './components/Survey'; // Importing Survey component

// Functional component Home which serves as the main component for the homepage
const Home = () => {
  return (
    <div>
      {/* Rendering Hero component */}
      <Hero/>
      {/* Rendering Feature component */}
      <Feature/>
      {/* Rendering Services component */}
      <Services/>
      {/* Rendering Menu component */}
      <Menu/>
      {/* Rendering Survey component */}
      <Survey/>
    </div>
  );
}

// Exporting Home component as default export
export default Home;
