import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
//import Highlight from "./components/Highlight";
//import Chatbot from "./components/Chatbot";
import ProjectsPage from "./components/ProjectsPage";
import ScorpionChess from "./projects/ScorpionChess";
import NecromanticSaga from "./projects/NecromanticSaga";
import ShakespeareAI from "./projects/ShakespeareAI";
import "./App.css";
import "./styles/global.css";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="hero-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                <Introduction />
                {/*<Highlight />*/}
                <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                      d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
              </>
            }
          />
          <Route 
            path="/projects" 
            element={
              <>
                <ProjectsPage/>
                {/*<Chatbot /> This feature is under developement*/}
                <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
              </>
            } />
            <Route path="/projects/scorpion-chess" element={
              <>
              <ScorpionChess />
               <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                </>
              } />
            <Route path="/projects/rpg-game" element={
              <>
              <NecromanticSaga />
              <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                </>
              } />
              <Route path="/projects/shakespeare-ai" element={
              <>
              <ShakespeareAI />
              <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                </>
              } />
              <Route path="/aboutMe" element={
              <>
              <AboutMe />
              <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                </>
              } />
              <Route path="/contactMe" element={
              <>
              <ContactMe />
              <div className="wave-separator">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                      fill="#1a1a1d"
                      d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,160C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                    <path
                      fill="#d68400"
                        d="M0,160L40,165.3C80,171,160,181,240,197.3C320,213,400,235,480,240C560,245,640,235,720,202.7C800,171,880,117,960,101.3C1040,85,1120,107,1200,128C1280,149,1360,171,1400,181.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                    ></path>
                  </svg>
                </div>
                </>
              } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
