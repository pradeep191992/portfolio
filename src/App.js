import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import Contact from './features/contact/contact';
import Work from './features/work/work';
import About from './features/about/about';
import Home from './features/home/home';
import ProjectDetails from './features/projectDetails/projectDetails';
import TransitionComponent from './shared/transitions/transitions';

import { TransitionProvider } from './shared/transitions/transitionContext';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {

  const container = useRef();

  useGSAP(() => {
    gsap.from(".h1 span", { opacity: 0, y: 200, stagger: .2 });
  }, { scope: container });

  return (
    <div className="App bg-[rgb(13,13,13)] text-white">
      <Header></Header>
      <main ref={container}>
        <TransitionProvider>
          <Routes>
            <Route path='/' element={
              <TransitionComponent>
                <Home></Home>
              </TransitionComponent>
            }></Route>
            <Route path='/about' element={
              <TransitionComponent>
                <About></About>
              </TransitionComponent>
            }></Route>
            <Route path='/work' element={
              <TransitionComponent>
                <Work></Work>
              </TransitionComponent>
            }></Route>
            <Route path='/work/:id' element={
              <TransitionComponent>
                <ProjectDetails></ProjectDetails>
              </TransitionComponent>
            }></Route>
            <Route path='/contact' element={
              <TransitionComponent>
                <Contact></Contact>
              </TransitionComponent>
            }></Route>
            <Route path='/**' elements={<div>Not Found</div>}></Route>
          </Routes>
        </TransitionProvider>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
