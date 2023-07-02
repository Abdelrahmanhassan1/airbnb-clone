"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
    border-[1px]
    w-full
    shadow-sm
    rounded-full
    py-2
    md:w-auto
    hover:shadow-md
    transition
    cursor-pointer
    "
    >
      <div
        className="
      flex flex-row items-center justify-between
      "
      >
        <div
          className="
      text-sm
      font-semibold
      px-6
      "
        >
          Anywhere
        </div>
        <div
          className="
          hiddensm:block
          text-sm
          font-semibold
          px-6
          border-x-[1px]
          flex-1
          text-center
        "
        >
          Any Week
        </div>
        <div
          className="
          text-sm
          pl-6
          pr-2 
          text-gray-600
          flex
          flex-row
          items-center
          gap-3
          "
        >
          <div className="hidden sm:block">Add Guests</div>
          <div
            className="
          p-2
          bg-rose-500
          rounded-full
          text-white
          "
          >
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
