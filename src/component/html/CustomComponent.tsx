import React from 'react'
import { Greet } from '../Greet'//get props from Greet

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}