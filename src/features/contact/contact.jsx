import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Contact() {

  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <section className="pt-20 pb-24 px-4 lg:px-8">
        <div className="py-10">
          <h1 className="h1 test text-[110px] md:text-[180px] xl:text-[220px] leading-none uppercase flex items-center justify-center flex-wrap gap-2 overflow-hidden"><span className="title">Get in</span> <span className="text-[#737373] title">Touch</span></h1>
        </div>
        <div className=" w-full lg:w-[640px] m-auto">
          <form action="" className="flex flex-col gap-4">
            <div className="flex items-center gap-4 flex-col lg:flex-row">
              <input className="w-full h-12 p-3 bg-[#ebebeb] text-gray-600 focus:outline-none rounded-lg" type="text" name="name" id="name" placeholder="Name" />
              <input className="w-full h-12 p-3 bg-[#ebebeb] text-gray-600 focus:outline-none rounded-lg" type="text" name="email" id="email" placeholder="Email" />
            </div>
            <div className="flex items-center gap-4">
              <textarea className="resize-none w-full h-40 p-4 bg-[#ebebeb] text-gray-600 focus:outline-none rounded-lg" name="notes" id="notes" placeholder="Message"></textarea>
            </div>
            <div className="flex items-center gap-4">
              <button className=" bg-[#737373] w-full h-12 p-3 rounded-lg text-base font-[600]" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Contact;