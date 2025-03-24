import React from 'react'

interface AboutLayoutProps{
 children: React.ReactNode
}


export default function layout({children}: AboutLayoutProps) {
  return (
    <div>{children}</div>
  )
}
