import React from "react";
import Logo from "../assests/icons/Layer_x0020_1.svg";
import Desktop from "../assests/images/Frame 48096508.png";
import App from "../assests/images/Frame 48096246 (1).png";
import Frame from "../assests/images/Slide2.png";
import EaziPay from "../assests/images/onbrdng 2.png";
import payEazi from "../assests/images/1.png";
import Frame25 from "../assests/images/Frame 25.png";
import Frame26 from "../assests/images/Frame 48096458.png";
import Frame27 from "../assests/images/Frame 255.png";
import Frame28 from "../assests/images/Frame 48096495.png";
import twitter from '../assests/icons/Twitter.svg';
import instagram from '../assests/icons/Instagram.svg';
import facebook from '../assests/icons/Group 36033.svg';
import linkedin from '../assests/icons/Group 36032.svg';
import SEND from '../assests/icons/send.svg';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <div className="landing-page">
        <div>
          <nav className=" md:w-[75%] w-[95%] mx-auto pt-7 flex justify-between">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <ul className="text-[16px] md:flex justify-evenly  gap-7">
                <li>Individual</li>
                <li>Business</li>
                <li>Pricing</li>
                <li>Set your payroll</li>
              </ul>
            </div>
            <div className=" md:gap-7 gap-3 "> 
              <Link to='/dashboard' >
              <button className="bg-[#fff] shadow-md mr-1  text-[#11453B] text-[14px] border border-solid border-[#11453b] w-[80px] text-center h-9 rounded-lg">
                Log In
              </button>
              </Link>
              <button className="bg-[#11453B] shadow-md text-white text-[14px] w-[80px] text-center h-9 rounded-lg">
                Register
              </button>
            </div>
          </nav>

          <div className="w-[85%] ml-[12%] md:flex justify-between mt-[40px] md:mt-[90px]">
            {/* Left */}
            <div>
              <h2 className="md:text-[64px] text-[40px] font-bold">
                Run your <span className="text-[#292A29]">payroll</span>
                <br /> <span className="text-[#B4A572]">easily</span> in{" "}
                <span className="text-[#EA4E4B]">seconds</span>
              </h2>
              <p className="text-[20px]">
                We’ve built an all-inclusive simple solution for
                <br /> individual and businesses to manage staff, pay
                <br /> salaries, bills, and relevant taxes all at once.
              </p>
              <div className="md:w-[45%] w-[55%]  mt-4 text-center rounded-full h-14 pt-4 text-[16px] text-white bg-[#11453b]">
                <button>Start Using Free, Forever</button>
              </div>
              <div className="mt-10">
                <p className="font font-bold">Download the Eazipay App</p>
              </div>
              <div className="mt-5">
                <img src={App} alt="desktop" className="" />
              </div>
            </div>
            {/* Right */}
            <div className="md:w-[671.828px]">
              <img src={Desktop} alt="desktop" className="md:mr-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-phase2 justify-center text-center justify-items-center">
        <h2 className="pt-[130px] md:text-[64px] text-[40px] font-bold text-[#11453b]">
          For Individuals and Businesses
        </h2>
        <p className="text-[20px]">
          Join 200+ businesses using Eazipay's easy solution.
        </p>
        <div className="w-[80%] mx-auto mt-7">
          <img src={Frame} alt="Frame" className="mr-10" />
        </div>
        <p className="text-[20px]">
          We are happy to answer your queries. Please, reach us at
          <br />
          <span className="text-[#EA4E4B]">hello@myeazipay.com</span> and expect
          our response shortly after.
        </p>
      </div>
      <div className="text-center justify-center justify-items-center landing-phase3">
        <h2 className="md:pt-[80px] md:text-[64px] text-[40px] font-bold text-[#11453b]">
          How Eazipay Works
        </h2>
        <p className="text-[20px]">Get started in 3 simple steps.</p>
        <div className="w-[75%] mx-auto mt-14 flex justify-between">
          <div className="bg__circle">
            <img src={EaziPay} alt="eazipay" />
          </div>
          <img src={payEazi} alt="eazipay" />
        </div>
      </div>

      <div className="landing-phase4  justify-center justify-items-center">
        <img src={Frame25} alt="Frame25" className="ml-[90px]" />
        <div className="w-[85%] ml-[12%] md:flex md:mt-[90px]">
          {/* Left */}
          <div>
            <h2 className="text-[64px] font-bold">
              Free forever
              <br />
              <span className="text-[#292A29]">for your </span>
              <span className="text-[#EA4E4B]">salary payment</span>
            </h2>
            <div className="mt-10">
              <p className="font font-bold"> Subscribe to the Eazilife today</p>
            </div>
            <div className="mt-5">
              <img src={App} alt="desktop" className="" />
            </div>
          </div>
          {/* Right */}
          <div className="md:w-[671.828px] pr-14 pt-7">
            <img src={Frame26} alt="desktop" className="md:mr-10" />
          </div>
        </div>
      </div>

      <div className="high">
        <div className="md:flex justify-between">
          <div>
            <img src={Frame27} alt="frame" className="md:mt-10" />
            <h2 className="md:ml-[200px] ml-[50px] md:text-[64px] text-[40px] font-bold mt-10">Get an Exclusive <br/> Demo of Eazipay</h2>
            <p className="md:ml-[200px] text-[24px] text-center md:text-left text-[#515251]">Our greatest priority is to put you and<br/> your business first. Let’s show you how<br/> we can help.</p>
          </div>
          <div className="w-">
           <div className="w-[45%] ml-auto text-[#292A29]">
            <img src={Frame28} alt="frame" className="" />
            </div>
            <div className="rounded-lg shadow-2xl bg-white ml-5  h-[620px] justify-center justify-items-center text-center w-[90%] md:mr-[100px] font-bold">
                <h3 className="text-[28px]">First things first</h3>
                <p className="text-[18px]">We want to serve you better. Tell us a bit<br/> about yourself or company</p>
                <div className=" flex justify-between w-[90%] h-12 gap-3 mx-auto rounded-lg border border-solid border-[#e7e8e7]">
                 <p className="bg-[#11453B] w-[50%] ml-3 pt-2 text-white h-10 mt-1 rounded-lg">Individual</p>
                 <p className="bg-[#F2F1F1] w-[50%] pt-2 mr-3 text-[#515251] h-10 mt-1 rounded-lg">Company</p>
                </div>
                <form>
                <div className=" flex mt-7  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                 <input type="text" className="pl-5 text-[14px] w-full font-normal" placeholder="First Name" />
                </div>
                <div className=" flex mt-7  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                 <input type="text" className="pl-5 text-[14px] w-full font-normal" placeholder="Last Name" />
                </div>
                <div className=" flex mt-7  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                 <input type="text" className="pl-5 text-[14px] w-full font-normal" placeholder="Email" />
                </div>
                <div className=" flex mt-7  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                 <input type="text" className="pl-5 text-[14px] w-full font-normal" placeholder="Job Title" />
                </div>
                <div className=" flex mt-7  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                 <input type="text" className="pl-5 text-[14px] w-full font-normal" placeholder="Company Size" />
                </div>
                <div className=" flex mt-7 bg-[#11453B] text-center shadow-md  justify-between w-[90%] h-12 gap-3 mx-auto rounded-2xl border border-solid border-[#e7e8e7]">
                <button className="w-full text-white"> Request Demo</button>
                </div>
                </form>
            </div>
         
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="border border-solid border-y-2 border-[#e7e8e7]">
             <div className="md:flex md:justify-evenly md:w-[85%] mx-auto mt-[160px] md:mt-7 grid grid-cols-2 w-[95%] ">
              <div>
              <img src={Logo} alt="logo" />
              <p className="text-[14px] pt-10">Copyright © 2023 Eazipay. <br/>All rights reserved</p>
              <div className="flex justify-between mt-8">
              <img src={instagram} alt="logo" />
              <img src={twitter} alt="logo" />
              <img src={linkedin} alt="logo" />
              <img src={facebook} alt="logo" />
              </div>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-[#292A29]">Product</h3>
                <ul  className="text-[16px] font-normal mt-6 text-[#7c7c7c]">
                  <li>Indidual</li>
                  <li>Businesses</li>
                  <li>Request Demo</li>
                  <li>Pricing</li>
                </ul>
              </div>
              <div>
              <h3 className="text-[20px] font-bold text-[#292A29]">Legal</h3>
                <ul  className="text-[16px] font-normal mt-6 text-[#7c7c7c]">
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
              <div>
              <h3 className="text-[20px] font-bold text-[#292A29]">Resources</h3>
                <ul  className="text-[16px] font-normal mt-6 text-[#7c7c7c]">
                  <li>FAQs</li>
                  <li>Blog</li>
                  <li>Career</li>
                  <li>Customer Stories</li>
                </ul>
              </div>
              <div>
              <h3 className="text-[20px] font-bold text-[#292A29]">Contact us</h3>
                <ul  className="text-[16px] font-normal mt-6 text-[#7c7c7c]">
                  <li>eazipay@gmail.com</li>
                  <li>+234 816 878 9518</li>
                </ul>
                <div className="bg-[#F2F1F1] w-[250px] flex rounded-full h-[40px] pt-2 mt-6">
                     <input type="email" placeholder="Your email address"  className="bg-[#F2F1F1] pl-2" />
                     <img src={SEND} alt="logo" className="w-[20px] h-[20px]" />
                </div>
              </div>
             </div>
      </div>
    </div>
  );
}

export default LandingPage;
