import React from "react";

const Page = () => {
  return (
    <div className="bg-primary h-[100vh] flex flex-col justify-center p-10">
      <div className=" flex flex-col gap-3 content-center mb-20">
        <h1 className="h1">MEALGURUU PLATFORM</h1>
        <h4 className="h4 active">2022 LANDING PAGE / WEB APP</h4>
      </div>
      <div className="flex justify-end mt-20">
        <div className="btn btn-lg items-center flex gap-3">
          <span className="btn1"></span>
          <p className="bot"> In Progress</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
