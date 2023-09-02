import { useEffect, useState } from "react";

export default function Button ({loading}: {loading: boolean}) {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading])

  const buttonText = isLoading ? 'Loading...' : 'Click Me!'

  function toggleButtonText() {
    setIsLoading(prev => !prev)
  }

  return (
    <div>
      <button onClick={toggleButtonText}>{buttonText}</button>

    </div>
  )
}