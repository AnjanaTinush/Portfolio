import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components'; // Import all necessary components

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> {/* Render Navbar component */}
          <Hero /> {/* Render Hero component */}
        </div>
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
