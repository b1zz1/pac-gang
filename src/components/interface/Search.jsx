"use client";

import React from "react";
import { PiMagnifyingGlass} from "react-icons/pi";
import Input from "antd/es/input/Input";

const Search = () => {

  return (
    <div>
      <Input
        prefix={<PiMagnifyingGlass/>}
        placeholder="Search..."
        variant="filled"
        size="large"
        className="bg-purple.3 text-purple.6 hover:bg-purple.3 focus-within:bg-purple.3 focus-within:border-purple.6 placeholder-purple.6"
      />
      </div>
  )
}

export default Search;
