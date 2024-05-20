"use client";

import React from "react";
import { Input } from "@mantine/core";
import { PiMagnifyingGlass } from "react-icons/pi";

const Search = () => {
  return (
    <div className="w-full">
      <Input
        className="w-full"
        variant="filled"
        placeholder="Search..."
        leftSection={<PiMagnifyingGlass className="text-purple.6" />}
        styles={(theme) => ({
          input: {
            color: theme.colors.primaryColor[5],
            backgroundColor: theme.colors.primaryColor[2],
            '::placeholder': {
              text: theme.colors.primaryColor[2],
            },
          },
        })}
      />
    </div>
  );
};

export default Search;
