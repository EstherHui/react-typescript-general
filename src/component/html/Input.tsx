import React from 'react'

type inputProps = React.ComponentProps<'input'>


export const CustomInput = (props : inputProps) => {
     return <input {...props}/>
}
