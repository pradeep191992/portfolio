import { Link } from "react-router-dom";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function ProjectDetails() {

  const clientDetails = [
    {
      'id': 1,
      'name': 'Client',
      'value': 'Vision',
    },
    {
      'id': 2,
      'name': 'Year',
      'value': '2022',
    },
    {
      'id': 3,
      'name': 'Service',
      'value': 'Website',
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <section className="pt-20 pb-24 px-4 lg:px-8 gap-10 flex flex-col">
        <div className="py-10">
          <h1 className="h1 text-[110px] md:text-[180px] xl:text-[220px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden">
            <span>Vision</span>
          </h1>
          <p className="text-base xl:text-lg text-[#bfbfbf]">Concept, Design, and Development</p>
        </div>

        <div className="flex flex-col w-full md:w-1/2 m-auto gap-5">
          {clientDetails.map(service => (
            <div key={service.id} className="flex items-center justify-between text-base xl:text-lg w-full text-[#bfbfbf] pb-5 border-b border-solid border-[rgb(38,38,38)]">
              <h2 className="flex gap-2 leading-none">{service.name}</h2>
              <p className="flex text-white">{service.value}</p>
            </div>
          ))}
        </div>

        <p className="text-base xl:text-lg text-[#bfbfbf] col w-full md:w-1/2 m-auto py-10">Vision is a digital agency that specializes in providing innovative solutions to help businesses create a powerful online presence.</p>

        <div className="flex flex-col gap-10">
          <img src="/assets/image-1.webp" alt="" />
          <p className="max-w-[1080px] m-auto text-base xl:text-lg text-[#bfbfbf]">Vision Studio took on the task of transforming established brands, each with their own unique identity and history, into new and contemporary entities. This journey was filled with obstacles that tested my creativity, adaptability and experience. From maintaining brand equity to resonating with modern audiences, navigating these challenges required a deep understanding of both brand heritage and evolving market trends.</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <img src="/assets/image-5.webp" alt="" />
            <img src="/assets/image-6.webp" alt="" />
          </div>
          <p className="max-w-[1080px] m-auto text-base xl:text-lg text-[#bfbfbf]">I strive to ensure that the client is satisfied with my service and results. I work closely with you to understand your goals, target audience and budget. I then developed a comprehensive plan to achieve these goals and objectives. I measured the success of the campaigns through analysis and informed the client of the detailed results.</p>
        </div>
      </section>

      <section className="pt-24 pb-20 px-4 lg:px-8">
        <div className="flex flex-col gap-2.5 justify-center items-center">
          <p className="pb-2.5">GOT A PROJECT IN MIND?</p>
          <div className="">
            <h1 className="text-[100px] md:text-[180px] xl:text-[200px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">Got a</span> <span className="text-[#737373] title">Project?</span></h1>
            <p className="text-base text-[#bfbfbf]">CONTACT ME TODAY AND LET'S BRING YOUR VISION TO LIFE!</p>
          </div>
          <div className="flex gap-3 items-center pt-5">
            [
            <Link className="relative" to={'/contact'}>
              <p className="uppercase"> Let's Talk </p>
            </Link>
            ]
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectDetails;