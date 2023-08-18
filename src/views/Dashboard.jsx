import React from "react";
import Frame4 from "../assests/images/Frame (1).png";
import Dash from "../assests/images/Frame (2).png";
import Icon1 from "../assests/icons/Frame 27401.svg";
import Icon2 from "../assests/icons/Frame 27402.svg";
import Icon3 from "../assests/icons/Frame 48095757.svg";
import Icon4 from "../assests/icons/Frame 48095759.svg";
import LineChart from "../component/utilities/LineChart";
import Frame3 from "../assests//icons/Frame 125.svg";
import { data } from "../component/utilities/Data";
import { data2 } from "../component/utilities/Data";
import { Equalizer } from "../assests/icons/icons";

const Dashboard = () => {
  console.log("data", data[0]?.firstName);
  return (
    <div className=" w-[81%] ml-auto py-10 px-16">
      <h1 className=" text-[#292A29] text-[36px] font-bold">
        Welcome Abasiama
      </h1>
      <p>Pay and manage your employee in minutes</p>
      <div className="flex justify-betwwen">
        <div className="pr-[30px]">
          <img src={Frame4} alt="frame" className="mt-7" />
          <div className="flex text-center gap-6 mb-4 mt-7 ">
            <div className="rounded-2xl shadow-2xl w-[170px] h-[125px]">
              <img src={Icon1} alt="icon" className="px-14 py-6" />
              <h3 className="text-[14px] font-semibold ">Add Employee</h3>
            </div>
            <div className="rounded-2xl shadow-2xl w-[170px] h-[125px]">
              <img src={Icon2} alt="icon" className="px-14 py-6" />
              <h3 className="text-[14px] font-semibold ">Pay Salaries</h3>
            </div>
            <div className="rounded-2xl shadow-2xl w-[170px] h-[125px]">
              <img src={Icon4} alt="icon" className="px-14 py-6" />
              <h3 className="text-[14px] font-semibold ">Pay Compliances</h3>
            </div>
            <div className="rounded-2xl shadow-2xl w-[170px] h-[125px]">
              <img src={Icon3} alt="icon" className="px-14 py-6" />
              <h3 className="text-[14px] font-semibold">Quick Loan</h3>
            </div>
          </div>
        </div>
        <div>
          <img src={Dash} alt="frame" />
        </div>
      </div>
      <div className="shadow-2xl h-[600px] mt-8">
        <div className="flex justify-between w-[88%] py-10 mx-auto">
          <div>
            <p className="text-[#515251] font-medium">Inflow</p>
            <h1 className="text-[28px] text-[#219653] font-bold">N1,567,552</h1>
          </div>
          <div>
            <p className="text-[#515251] font-medium">Outflow</p>
            <h1 className="text-[28px] text-[#EF4444] font-bold">N1,567,552</h1>
          </div>
          <div>
            <p className="text-[#11453B] font-medium">Inflow/Outflow</p>
          </div>
        </div>
        <div className=" w-[90%] ml-20  mx-auto ">
          <LineChart />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-[32px] font-semibold text-[#292A29]">
          Recent Activities
        </h1>
        <div className="flex justify-between gap-3 mt-4">
          <div className="w-[90%] flex h-12  rounded-2xl border-2 border-solid border-[#e7e8e7]">
            <input
              type="text"
              className="pl-5 py-2.5 text-[14px] w-[90%] font-normal"
              placeholder="Search Employee"
            />
            <img src={Frame3} alt="frame" />
          </div>
          <div className="w-[10%] text-center gap-3 flex rounded-2xl border-2 border-solid border-[#e7e8e7]">
            <Equalizer className="pt-3 w-[20px] h-[20px] pl-2" />
            <button className="text-[#8D8E8D]">Filter</button>
          </div>
        </div>
      </div>
      <div className="mt-10 text-[18px] font-semibold">
        <h1 className="text-[#515251]">Wednesday, November 09, 2022</h1>
        <div className="shadow-xl rounded-lg w-full h-[120px] mt-5">
          <div className="w-[90%] mx-auto">
            <p className="text-[14px] font-light py-2 ">PAYROLL</p>
            {/* First Part */}
            <div className="flex justify-between">
              <div className="flex">
              <p className="bg-[#01AA8C] text-white text-center pt-1 w-[40px] h-[40px] rounded-full">
                   {`${data[0].firstName ? data[0].firstName?.charAt(0) : ""}${
                          data[0].lastName ? data[0].lastName?.charAt(0) : ""
                        }` }
                  </p>
                <h1 className="text-[#515251] mt-2"> &nbsp;
                  {`${data[0]?.firstName} ${data[0]?.lastName}`}
                </h1>
              </div>
              <div>
                <div className="">
                  <p className="text-[14px] text-[#515251]  font-light">
                    ACTIVITY
                  </p>
                  <h1 className="text-[#515251] mt-2">{data[0]?.activity}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">
                    EMPLOYEE
                  </p>
                  <h1 className="text-[#515251] mt-2">{data[0]?.employee}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">Time</p>
                  <h1 className="text-[#515251] mt-2">{data[0]?.time}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg w-full h-[120px] mt-5">
          <div className="w-[90%] mx-auto">
            <p className="text-[14px] font-light py-2 ">PAYROLL</p>
            {/* Second Part */}
            <div className="flex justify-between">
            <div className="flex">
              <p className="bg-[#01AA8C] text-white text-center pt-1 w-[40px] h-[40px] rounded-full">
                   {`${data[1].firstName ? data[1].firstName?.charAt(0) : ""}${
                          data[1].lastName ? data[1].lastName?.charAt(0) : ""
                        }` }
                  </p>
                <h1 className="text-[#515251] mt-2"> &nbsp;
                  {`${data[1]?.firstName} ${data[1]?.lastName}`}
                </h1>
              </div>
              <div>
                <div className="">
                  <p className="text-[14px] text-[#515251]  font-light">
                    ACTIVITY
                  </p>
                  <h1 className="text-[#515251] mt-2">{data[1]?.activity}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">
                    EMPLOYEE
                  </p>
                  <h1 className="text-[#515251] mt-2">{data[1]?.employee}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">Time</p>
                  <h1 className="text-[#515251] mt-2">{data[1]?.time}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-[18px] font-semibold">
        <h1 className="text-[#515251]">Friday, November 04, 2022</h1>
        <div className="shadow-xl rounded-lg w-full h-[120px] mt-5">
          <div className="w-[90%] mx-auto">
            <p className="text-[14px] font-light py-2 ">PAYROLL</p>
            {/* First Part */}
            <div className="flex justify-between">
            <div className="flex">
              <p className="bg-[#01AA8C] text-white text-center pt-1 w-[40px] h-[40px] rounded-full">
                   {`${data2[0].firstName ? data2[0].firstName?.charAt(0) : ""}${
                          data2[0].lastName ? data2[0].lastName?.charAt(0) : ""
                        }` }
                  </p>
                <h1 className="text-[#515251] mt-2"> &nbsp;
                  {`${data2[0]?.firstName} ${data2[0]?.lastName}`}
                </h1>
              </div>
              <div>
                <div className="">
                  <p className="text-[14px] text-[#515251]  font-light">
                    ACTIVITY
                  </p>
                  <h1 className="text-[#515251] mt-2">{data2[0]?.activity}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">
                    EMPLOYEE
                  </p>
                  <h1 className="text-[#515251] mt-2">{data2[0]?.bonusName}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">Time</p>
                  <h1 className="text-[#515251] mt-2">{data2[0]?.time}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-2xl rounded-lg w-full h-[120px] mt-5">
          <div className="w-[90%] mx-auto">
            <p className="text-[14px] font-light py-2 ">PAYROLL</p>
            {/* Second Part */}
            <div className="flex justify-between">
            <div className="flex">
              <p className="bg-[#01AA8C] text-white text-center pt-1 w-[40px] h-[40px] rounded-full">
                   {`${data2[1].firstName ? data2[1].firstName?.charAt(0) : ""}${
                          data2[1].lastName ? data2[1].lastName?.charAt(0) : ""
                        }` }
                  </p>
                <h1 className="text-[#515251] mt-2"> &nbsp;
                  {`${data2[1]?.firstName} ${data2[1]?.lastName}`}
                </h1>
              </div>
              <div>
                <div className="">
                  <p className="text-[14px] text-[#515251]  font-light">
                    ACTIVITY
                  </p>
                  <h1 className="text-[#515251] mt-2">{data2[1]?.activity}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">
                    EMPLOYEE
                  </p>
                  <h1 className="text-[#515251] mt-2">{data2[1]?.bonusName}</h1>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-[14px] text-[#515251]  font-light">Time</p>
                  <h1 className="text-[#515251] mt-2">{data2[1]?.time}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
