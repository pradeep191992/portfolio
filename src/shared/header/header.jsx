// import { useRef } from "react";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Header() {

  const container = useRef();

  useGSAP(() => {
    gsap.from(".uppercase", { opacity: 0, y: -20, stagger: .2 });
  }, { scope: container });

  return (
    <>
      <header className="py-8 px-4 md:px-8">
        <nav className="flex items-center justify-between" ref={container}>
          <div>
            <Link className="relative w-min h-min" to={'/'}>
              <p className="uppercase text-lg">Pradeep</p>
            </Link>
          </div>
          <ul className="flex items-center gap-4 whitespace-nowrap overflow-hidden">
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
        </nav>
      </header>
    </>
  );
}
export default Header;