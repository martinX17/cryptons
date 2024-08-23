import React from "react";

const Dots = () => {
  return (
    <span className="inline-block animate-spin rounded-sm mr-2 border-2 w-2 h-2"></span>
  );
};

const Loading = () => {
  return (
    <div className="w-full h-[84vh] flex items-center">
      <p className="w-full text-4xl text-center my-auto ">
        Loading <Dots />
        <Dots />
        <Dots />
      </p>
    </div>
  );
};

const Error = ({ Error }) => {
  if (Error) {
    return (
      <div className="w-full h-[84vh] flex items-center justify-center">
        <p className="w-100 h-max text-center text-2xl text-red-600 animate-pulse">
          {Error.message}
        </p>
      </div>
    );
  }
  return;
};

export { Loading, Error };
