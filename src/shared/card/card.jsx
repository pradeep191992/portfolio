import { Link } from "react-router-dom";

function Card({ cardData }) {

  return (
    <>
      <div className="card flex gap-2 flex-col relative">
        <Link to={'/work/' + cardData.url}>
          <figure className="relative aspect-[8/6] flex justify-center pb-20 cursor-pointer group overflow-hidden">
            <img className="absolute left-0 top-0 w-full h-full z-0 group-hover:scale-105 transition-all duration-500" src={cardData.imgPath} alt="" />
            <figcaption className=" h-11 relative z-10 mt-auto backdrop-blur-[10px] bg-[rgba(115,115,115,0.3)] rounded-full whitespace-nowrap flex items-center gap-1 px-5 opacity-0 group-hover:opacity-100 mb-6 group-hover:mb-0 transition-all duration-500">
              <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className=" flex leading-6">{cardData.viewProjectText}</span>
            </figcaption>
          </figure>
        </Link>
        <div className="flex items-center justify-between">
          <h4 className="text-[18px]">{cardData.projectName}</h4>
          <p className="text-[16px] text-[#bfbfbf]"><span>{cardData.projectBrandingText}</span> — <span>{cardData.projectYear}</span></p>
        </div>
      </div>
    </>
  );
}
export default Card;