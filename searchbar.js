import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Grocery = [
  { id: 101, name: "milk" },
  { id: 102, name: "shampoo" },
  { id: 103, name: "toothpaste" },
  { id: 104, name: "detergent" },
];
const Cloths = [
  { id: 201, name: "shirt" },
  { id: 202, name: "pants" },
  { id: 203, name: "jacket" },
  { id: 204, name: "shoes" },
];
const Electronics = [
  { id: 301, name: "refrigerator" },
  { id: 302, name: "oven" },
  { id: 303, name: "bulb" },
  { id: 304, name: "fan" },
];

const  Data =Grocery.concat(Cloths, Electronics);

export default function SearchBar() {
  const [value, setValue] = useState("Search...");
  const handleOnChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  return (
    <>
      <Box
        className="container my-5  d-flex justify-content-center"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleOnChange}
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          placeholder={value}
        />
      </Box>
      <ul>
        {Data
          .filter((val) => {
            if (value === "") {
              return ("");
            } else if (val.name.toLowerCase().includes(value.toLowerCase())) {
              return val;
            }
          }).map((Data) => (
            <p
              key={Data.id}
              className="container my-3 d-flex justify-content-center"
            >
              {Data.name}
            </p>
          ))}
      </ul>
    </>
  );
}
