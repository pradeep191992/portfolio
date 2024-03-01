import { useContext } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import TransitionContext from './transitionContext';


const TransitionComponent = ({ children }) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  return (

    <SwitchTransition>
      <Transition
        key={location.pathname}
        timeout={500}
        onEnter={(node) => {
          toggleCompleted(false);

          gsap.set(node, { autoAlpha: 0, scale: 1, xPercent: -100 });
          gsap.timeline({
            paused: true,
            onComplete: () => toggleCompleted(true),
          }).to(node, { autoAlpha: 1, xPercent: 0, duration: 1 })
            .to(node, { scale: 1, duration: 1 })
            .play();

        }}
        onExit={(node) => {
          gsap.timeline({ paused: true })
            .to(node, { scale: 1, xPercent: 100, duration: 1 })
            .to(node, { xPercent: 100, autoAlpha: 0, duration: 1 })
            .play();
        }}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
