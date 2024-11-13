import React from 'react';

const PreviewComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className={`rounded-lg w-full dark:bg-[#080b11] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden pt-8 p-4 m-4`}
      >
        <div className="h-full w-full mx-auto p-2 not-prose ">
          {children}
        </div>
      </div>
    </>
  );
};

export default PreviewComponent;
