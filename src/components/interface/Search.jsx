"use client";

import React from "react";
import Input from "antd/es/input/Input";
import { PiMagnifyingGlass } from "react-icons/pi";

const Search = () => {
  return (
    <div className="w-full">
      <Input
        placeholder="Search..."
        variant="filled"
        size="large"
        className="bg-purple.3 hover:bg-purple.3 focus:bg-purple.3 focus:border-purple.6 text-purple.6 placeholder-purple.6"
      />
    </div>
  );
};

export default Search;
