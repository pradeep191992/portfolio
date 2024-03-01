import { Link } from "react-router-dom";
import Card from "../../shared/card/card";
import LetsConnect from "../../shared/connect/lets-connect";
import FlipCard from "../../shared/card/flipCard";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Home() {
  const projectCardData = [
    {
      'id': 1,
      'imgPath': '/assets/image-1.webp',
      'viewProjectText': 'View project',
      'projectName': 'OUTDOOR',
      'projectBrandingText': 'Branding',
      'projectYear': '2023',
      'url': 'outdoor',
    },
    {
      'id': 2,
      'imgPath': '/assets/image-2.webp',
      'viewProjectText': 'View project',
      'projectName': 'VISION',
      'projectBrandingText': 'Website',
      'projectYear': '2022',
      'url': 'vision',
    },
    {
      'id': 3,
      'imgPath': '/assets/image-3.webp',
      'viewProjectText': 'View project',
      'projectName': 'XTUDIO',
      'projectBrandingText': 'Branding',
      'projectYear': '2021',
      'url': 'xtudio',
    },
    {
      'id': 4,
      'imgPath': '/assets/image-4.webp',
      'viewProjectText': 'View project',
      'projectName': 'PRIME',
      'projectBrandingText': 'Website',
      'projectYear': '2020',
      'url': 'prime',
    }
  ];


  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".animate-3", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: '.animate-3',
        start: 'top 95% ',
        end: 'top 80%',
        scrub: 0.2,
        // markers: true,
      }
    });
    tl.from(".animate-2", {
      opacity: 0,
      scaleX: 0,
      scrollTrigger: {
        trigger: '.animate-2',
        start: '150',
        end: 'top 50%',
        scrub: 0.2,
        // markers: true,
      }
    });
    tl.from(".animate-1", {
      opacity: 0,
      scale: .25,
      scrollTrigger: {
        trigger: '.animate-1',
        start: 'top 100%',
        end: 'top 50%',
        scrub: 1,
        // markers: true,
      }
    });
    tl.from(".animate-4", {
      opacity: 0,
      x: -500,
      scrollTrigger: {
        trigger: '.animate-4',
        start: 'top 100%',
        end: 'top 70%',
        scrub: 0.2,
        // markers: true,
      }
    });
    const boxes = gsap.utils.toArray('.card');
    boxes.forEach((box) => {
      gsap.from(box, {
        // x: 500,
        // rotation: 360,
        scale: .5,
        stagger: .5,
        delay: .5,
        scrollTrigger: {
          trigger: box,
          start: 'top 100%',
          end: 'top 70%',
          scrub: 0.5,
          // markers: true,
        },
      });
    });
  }, { scope: container });



  return (
    <div ref={container}>
      <section className="pt-20 pb-36 px-4 lg:px-8">
        <div className="pt-10">
          <h1 className="h1 text-[110px] md:text-[180px] xl:text-[220px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">Frontend</span> <span className="text-[#737373] title">Developer</span></h1>
          <div className="animate-1 relative bottom-10 lg:bottom-16 flex items-center justify-center">
            <FlipCard></FlipCard>
          </div>
        </div>
        <div className="animate-2 m-auto w-full lg:w-[60%] pt-10 pb-16">
          <p className="text-base lg:text-lg text-[#bfbfbf]">Hello</p>
          <p className="text-base lg:text-lg text-[#bfbfbf] mt-5">
            I'm Pradeep—an adept Frontend Developer translating ideas into captivating digital experiences. I'm fueled by a passion for visually-driven storytelling, connecting imagination with reality through engaging and memorable designs. Let's build something awesome together! 💻✨
          </p>
        </div>
        <div className="flex justify-between items-center xsm:flex-col gap-8 pt-10 lg:pt-20">
          <p className="animate-3 flex items-center justify-center gap-2 text-[#bfbfbf] text-[16px]">
            <span>( 2020</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-c4ff2043-b3af-42b6-9f61-df54d990b010, rgb(191, 191, 191))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>PRESENT )</span>
          </p>
          <ul className="flex animate-3 items-center gap-4 whitespace-nowrap overflow-hidden">
            <Link className="relative">
              <p className="uppercase">BEHANCE</p>
            </Link>
            <Link className="relative">
              <p className="uppercase">NKEDIN</p>
            </Link>
            <Link className="relative main">
              <p className="uppercase">DRIBBBL</p>
            </Link>
          </ul>
        </div>

      </section>
      <section className="px-4 lg:px-8 pb-24 xl:pb-32">
        <h3 className="animate-4 text-[28px] lg:text-[34px] font-[600] uppercase text-left pb-5">SELECTED <span className="text-[#737373]">PROJECTS</span></h3>
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {projectCardData.map(project => (
            <Card key={project.id} cardData={project}></Card>
          ))}
        </div>
      </section>
      <LetsConnect></LetsConnect>
    </div>
  );
}
export default Home;
