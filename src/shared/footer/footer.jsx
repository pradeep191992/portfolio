import { Link } from "react-router-dom";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Footer() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    gsap.from(".fanimate", {
      opacity: 0,
      y: 50,
      stagger: .1,
      duration: 2,
      scrollTrigger: {
        trigger: '.fanimate',
        start: 'top 100%',
        end: 'top 90%',
        scrub: 0.5,
        // markers: true,
      },
    });
  }, { scope: container });

  return (
    <>
      <footer ref={container} className="px-4 lg:px-8 pt-24 pb-14 flex items-center justify-between flex-col lg:flex-row gap-20 xl:gap-10">
        <ul className="flex fanimate items-center gap-4 whitespace-nowrap overflow-hidden">
          <Link className="relative" to={'/'}>
            <p className="uppercase">Home</p>
          </Link>
          <Link className="relative" to={'/about'}>
            <p className="uppercase">About</p>
          </Link>
          <Link className="relative" to={'/work'}>
            <p className="uppercase">Work</p>
          </Link>
          <Link className="relative" to={'/contact'}>
            <p className="uppercase">Contact</p>
          </Link>
        </ul>
        <div className="flex fanimate flex-col gap-3">
          <p>
            KLAUS TEMPLATE FOR FRAMER
          </p>
          <p>
            DESIGNED BY LANDINFY
          </p>
        </div>
        <ul className="flex fanimate items-center gap-4 whitespace-nowrap overflow-hidden">
          <Link className="relative">
            <p className="uppercase">BEHANCE</p>
          </Link>
          <Link className="relative">
            <p className="uppercase">NKEDIN</p>
          </Link>
          <Link className="relative">
            <p className="uppercase">DRIBBBL</p>
          </Link>
        </ul>
      </footer>
    </>
  );
}
export default Footer;