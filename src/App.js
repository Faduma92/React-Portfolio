import './App.css';
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Contact from './Components/ContactMe/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
       
    </div>
  );
}

export default App;
