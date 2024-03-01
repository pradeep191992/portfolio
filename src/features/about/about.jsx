import FlipCard from "../../shared/card/flipCard";
import LetsConnect from "../../shared/connect/lets-connect";
import Awards from "./award";
import Experience from "./experience";
import Services from "./services";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {
  const details = [
    {
      'id': 1,
      'name': 'PROJECTS DONE',
      'count': '60',
      'plus': '+'
    },
    {
      'id': 2,
      'name': 'RECOGNITIONS',
      'count': '40',
      'plus': ''
    },
    {
      'id': 3,
      'name': 'YEARS OF EXPERIENCE',
      'count': '12',
      'plus': '+'
    },
    {
      'id': 4,
      'name': 'UNHAPPY CLIENTS',
      'count': '00',
      'plus': ''
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h2", {
      scale: 0,
      stagger: .5,
      delay: .5,
      duration: 3,
      scrollTrigger: {
        trigger: 'h2',
        start: 'top 90% ',
        end: 'top 30%',
        scrub: 1,
        // markers: true,
      }
    });

    const boxes = gsap.utils.toArray('h3');
    boxes.forEach((box) => {
      gsap.from(box, {
        scale: 0,
        stagger: .5,
        delay: .5,
        scrollTrigger: {
          trigger: box,
          start: 'top 100%',
          end: 'top 70%',
          scrub: 0.5,
        },
      });
    });
  }, { scope: container });

  return (
    <div ref={container}>
      <section className="pt-20 px-4 lg:px-8">
        <div className="">
          <h1 className="h1 text-[110px] md:text-[180px] xl:text-[220px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">About</span> <span className="text-[#737373] title">me</span></h1>
          <div className="relative bottom-10 lg:bottom-16 flex items-center justify-center">
            <FlipCard></FlipCard>
          </div>
        </div>
        <div className="m-auto w-full lg:w-[60%]">
          <p className="text-base lg:text-lg text-[#bfbfbf]">
            I'm Pradeep, a seasoned web designer with a rich background of over 10 years in the industry, proudly situated in the vibrant city of Faridabad, HR, INDIA. My unwavering passion lies in aiding businesses to thrive in the digital realm, and I find immense joy in contributing to the creative journey.
          </p>
          <p className="text-base lg:text-lg text-[#bfbfbf] mt-2">
            Specializing in premium web design and development services, I am dedicated to elevating your online presence. I thrive on transforming ideas into visually stunning and functional digital experiences. Let's collaborate to craft a digital presence that not only meets but exceeds your aspirations. I'm here to bring your vision to life! 🌐💼
          </p>
        </div>

      </section>
      <section className="pt-20 px-4 lg:px-8">
        <div className="grid grid-cols-2 xl:grid-cols-4 auto-rows-[200px] grid-rows-[repeat(1,200px)]">
          {details.map(detail => (
            <ProjectsDetails key={detail.id} detail={detail}></ProjectsDetails>
          ))}
        </div>
      </section>
      <Services></Services>
      <Experience></Experience>
      <Awards></Awards>
      <LetsConnect></LetsConnect>
    </div>
  );
}
export default About;

const ProjectsDetails = ({ detail }) => (
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-[72px] xl:text-[80px] font-[600] flex gap-2 leading-none">{detail.count}<span className="text-[#737373]">{detail.plus}</span></h2>
    <p className="text-sm xl:text-base text-[#bfbfbf]">{detail.name}</p>
  </div>
);