import React, { ChangeEvent, useState } from 'react'

export default function Auth() {
  const [password, setPassword] = useState('');

  const pText =
    password === "secret"
    ? "Successfully logged in!"
    : "Enter correct password";

  function checkString(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  return (
    <>
      <input id="name" onChange={checkString} />

      {pText}
    </>
  )
}
