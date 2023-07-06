import React from "react";

const Field = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col gap-y-3 max-w-[400px] mx-auto mb-6 last:mb-0 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Field;
