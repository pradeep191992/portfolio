import Card from "../../shared/card/card";
import LetsConnect from "../../shared/connect/lets-connect";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Work() {

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

  return (
    <>
      <section className="pt-20 pb-24">
        <p className="flex items-center justify-center gap-2 text-[#bfbfbf] text-[16px]">
          <span>( 2020</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-c4ff2043-b3af-42b6-9f61-df54d990b010, rgb(191, 191, 191))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>PRESENT )</span>
        </p>
        <div className="py-10">
          <h1 className="h1 text-[110px] md:text-[180px] xl:text-[220px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">Selected</span> <span className="text-[#737373] title">Projects</span></h1>
        </div>
        <div className="w-full px-4 lg:px-8 grid lg:grid-cols-2 gap-8">

          {projectCardData.map(project => (
            <Card key={project.id} cardData={project}></Card>
          ))}
        </div>
      </section>
      <LetsConnect></LetsConnect>
    </>
  );
}
export default Work;