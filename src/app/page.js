"use client"
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState({
    username: "",
    mail: "",
    fullname: "",
    password: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      placeholder:"username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: "mail",
      type: "mail",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      placeholder:"Email",
      
      required:true,
    },
    {
      id: 3,
      name: "fullname",
      type: "text",
      label: "Full Name",
      errorMessage:"Type full name",
      placeholder:"Full Name",
      required:true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      placeholder:"Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true,
    },
    {
      id: 2,
      name: "date",
      type: "date",
      label: "Birth Date",
      errorMessage:"It should be valid Email ",
      placeholder:"DOB"
    }
  ]

  // console.log(inputs);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  const handleFocus = () => {
    setFocused(true);
  };


  return (
    <div className="app">
      <form action="" className="mx-auto grid justify-center align-center" onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((any) => (

          <div key={String(any.id)} className="block mt-3">
            <label className="block mt-2">{any.label}</label>
            <input
              // Convert any.id to string
              {...any}
              className="border"
              value={values[inputs.label]}
              onChange={onChange}
              onBlur={handleFocus}
              onFocus={() =>
                any.name === "confirmPassword" && setFocused(true)
              }
              focused={focused.toString()}
            
            />
            <span>{any.errorMessage}</span>
          </div>
        ))}


        <button className="mt-5">Submit</button>
      </form>
    </div>
  );
}
