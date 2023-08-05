import React, { useEffect } from 'react'

function AlertComponent({type,msg,removeAlert,list}) {
  useEffect(()=>{
    const timeout=setInterval(()=>{
        removeAlert()
    },3000)
    return ()=>clearTimeout(timeout)
  },[list])
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default AlertComponent