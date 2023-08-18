import React from "react";
import { Bell, Logo } from "../assests/images/images";
import Bgs from "../assests/images/Frame 48096046.png";
import { AddE, Airtime, Data, Edit, Electricity, GetLoan, Salary, Slip, Transfer } from "../assests/icons/icons";
import Footer from "../component/Footer";

const Wallet = () => {
  return (
    <div>
    <div className="mobile w-[86%] mx-auto">
      <div className="flex  my-14 justify-between">
        <div className="flex gap-3">
          <Logo />
          <p className="text-[25px] font-medium pt-3  text-[#515251]">
            Hello Wasiu
          </p>
        </div>
        <div className="pt-3">
          <Bell />
        </div>
      </div>
      <div>
        {/* <img src={Bgs} alt="alt" /> */}
      </div>
      <p className="text-[16px] mt-4 text-[#515251] font-normal">QUICK STATS</p>
      <div className="flex justify-between gap-5 mt-3">
        <div className="bg-[#F2F1F1] shadow py-3 px-3 w-[50%] rounded-lg h-[80px]">
          <p className="text-[#515251] text-[14px]">Total Payroll</p>
          <p className="text-[#515251] text-[14px] font-medium pt-2">2,293,044,345.05</p>
        </div>
        <div className="bg-[#F2F1F1] shadow py-3 px-3 w-[50%] rounded-lg h-[80px]">
          <p className="text-[#515251] text-[14px]">Total Employee</p>
          <p className="text-[#515251] text-[14px] font-medium pt-2">10,000</p>
        </div>
      </div>
      <p className="text-[16px] mt-4 text-[#515251] font-normal">QUICK ACTIONS</p>
      <div className="border border-solid border-[#E7E8E7] h-[290px] rounded-xl mt-4">
          <div className="w-[90%] mx-auto grid grid-cols-3 pt-7 gap-6">
             <div><Salary/> </div>
             <div><AddE /> </div>
             <div><Slip /> </div>
             <div><Edit /></div>
             <div><GetLoan /></div>
             <div><Transfer /></div>
             <div><Airtime /></div>
             <div><Data /></div>
             <div><Electricity /></div>
          </div>
      </div>
    
    </div>
      {/* Footer */}
    <Footer />
    </div>
  );
};

export default Wallet;
