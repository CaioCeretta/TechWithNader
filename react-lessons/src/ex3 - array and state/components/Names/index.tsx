import React, { ChangeEvent, useState } from 'react'

interface NameProps {
  name: string;
}

export default function Names() {
  const [names, setNames] = useState<NameProps[]>([])
  const [text, setText] = useState<string>('');

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleSubmit() {
    setNames([...names, {name: text}])
  }


  return (
    <>
      <label htmlFor="name">Name</label>
      <input onChange={handleInputChange} type="text" id="name" />
      <button type="button" onClick={handleSubmit}name='submit'>Submit</button>

      <ul>
      {names.map((name, index)=> (
        name.name.startsWith('A') ? <li key={index}>{name.name}</li> : null
      ))}
      </ul>
      
        
      
    </>
  )
}
