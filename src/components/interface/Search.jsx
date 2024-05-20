"use client";

import React from "react";
import { Input } from "@mantine/core";
import { PiMagnifyingGlass } from 'react-icons/pi'

const Search = () => {
  return (
    <div>
      <Input 
        bg={"primaryColor.2"}
        variant="filled"
        placeholder="Search..."
        leftSection={<PiMagnifyingGlass className="text-purple.6" />}
      />
    </div>
  );
};

export default Search;
