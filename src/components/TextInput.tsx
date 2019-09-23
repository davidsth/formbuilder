import * as React from 'react'

export const TextInput = (props: any) => {

  return <label htmlFor={props.name}>{props.label}
    <input name={props.name} value={props.value} onChange={props.onChange}/>
  </label>
}
