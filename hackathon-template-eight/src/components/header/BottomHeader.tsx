import Navbar from "./Navbar";
import React from "react";

const BottomHeader = () => {
  return (
    <div className="bg-white border-b">
      <div className="max-w-6xl mx-auto py-4 flex justify-between">
        <Navbar />
        <div className="flex gap-2">
          <span className="text-textColor">Contact:</span>
          <span className="text-secondary">(808) 555-0111</span>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
