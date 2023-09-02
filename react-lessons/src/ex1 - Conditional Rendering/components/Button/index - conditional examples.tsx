import React, { ReactNode } from "react";

interface ButtonProps {
  loading: boolean;
  children: ReactNode
}


export default function ButtonExp({loading, children}: ButtonProps) {
  //One form of conditional rendering
  // return (
  //   <div style={{color: 'white'}}>
  //     <button disabled={loading}>
  //       {loading && 'Loading...'}
  //       {!loading && children }
        
  //     </button>
  //   </div>
  // )

  //Other form of return
  // return (
  //   <div style={{color: 'white'}}>
  //   {loading ? (
  //     Loading...
  //   ) : (
  //     {children}
  //   )}
  //   </div>
  // )

  //Other form of return
  // return loading ? (
  //   <div><button>Loading...</button></div>
  // ) : (
  //   <div><button>{children}</button></div>
  // )

  //Other form
  // if(loading) {
  //   return <div>Loading...</div>
  // } else {
  //   return <div>{children}</div>
  // }

  return <button>{loading ? 'Loading...' : children}</button>
}
