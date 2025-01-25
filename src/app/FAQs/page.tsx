import React from 'react';

const Page = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-full px-4"> {/* Added px-4 for padding on smaller screens */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="font-Helvetica font-bold text-center xl:text-[48px] text-[36px] leading-[56px] pt-[30px]">
              Questions Look Here
            </p>
            <p className="font-Helvetica font-bold text-center lg:text-[16px] text-[14px] leading-[24px] text-[#4F4F4F] mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-6 mt-6"> {/* Added flex-wrap and gap for responsiveness */}
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]"> {/* Adjust width for smaller screens */}
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]">
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]">
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]">
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]">
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[48%] lg:w-[648px]">
            <div className="w-full h-[170px] rounded-lg bg-[#F7F7F7]">
              <p className="w-full h-[122px] font-[Inter] text-base font-normal leading-6 text-left p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
