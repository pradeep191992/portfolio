import { Link } from "react-router-dom";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function LetsConnect() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    const boxes = gsap.utils.toArray('.lanimate-1');
    boxes.forEach((box) => {
      tl.from(box, {
        // opacity: 0,
        y: 100,
        stagger: .5,
        scrollTrigger: {
          trigger: box,
          start: 'top 100%',
          end: 'top 80%',
          scrub: 0.5,
          // markers: true,
        },
      });
    });
    tl.from(".title", {
      // opacity: 0,
      y: 200,
      stagger: .2,
      delay: 2,
      scrollTrigger: {
        trigger: '.title',
        start: 'top 100%',
        end: 'top 80%',
        scrub: 0.5,
        // markers: true,
      },
    });
  }, { scope: container });

  return (
    <>
      <section ref={container} className="pt-24 pb-20">
        <div className="flex flex-col gap-2.5 justify-center items-center">
          <p className="lanimate-1 pb-2.5 text-base text-[#bfbfbf]">GOT A PROJECT IN MIND?</p>
          <h1 className="lanimate-2 text-[100px] md:text-[180px] xl:text-[200px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">Let's</span> <span className="text-[#737373] title">connect</span></h1>
          <div className="lanimate-1 flex gap-3 items-center pt-5">
            [
            <Link className="relative" to={'/contact'}>
              <p className="uppercase"> Get in Touch </p>
            </Link>
            ]
          </div>
        </div>
      </section>
    </>
  );
}
export default LetsConnect;