import React from "react";

export default function Loader() {
  return (
    <div className="bg-black bg-opacity-50 p-10 rounded-md mt-10 inline-block">
      <div className="h-12 w-12 border-8 border-white border-t-12 border-t-blue-300 rounded-full animate-spin" />
    </div>
  );
}
