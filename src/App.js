import Navbar from './components/navbar/Navbar';
import Aboutme from './components/aboutme/Aboutme'
import Projects from './components/projects/Projects';
import Contactme from './components/contactme/Contactme'
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Carousel from './components/carousel/Carousel';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    // <div>
    //   <Navbar />
    //   <Home />
    //   <Aboutme />
    //   <Projects />
    //   <Contactme />
    // </div>
  

  <Router>
  <div className="App">
    <Routes>
      <Route path="*" element={<Portfolio />} />
      <Route path="/about" element={<Carousel />} />
    </Routes>
  </div>
</Router>
  );

}

// import img from './images/temp.png'

// const images = ['temp.png', 'image2.png', 'image3.png'];

// function renderImages() {
//   return images.map(image => (
//     <img key={image} src="/my_portfolio/images/temp.png" alt={image} />
//   ));
// }

// function App() {
//   return (
//     <div>
//       {renderImages()}
//     </div>
//   );
// }


export default App;
