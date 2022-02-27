import Navbar from './components/navbar/Navbar';
import Aboutme from './components/aboutme/Aboutme'
import Projects from './components/projects/Projects';
import Contactme from './components/contactme/Contactme'
import Home from './components/home/Home';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects />
      <Contactme />

    </div>

    

  );
}

export default App;
