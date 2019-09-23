import * as React from 'react'
import {FormBuilder} from '../components/FormBuilder'
import {TextInput} from '../components/TextInput'

export class HomePage extends React.Component {

  render() {
    return <FormBuilder>
      {(props) => {
        return <>
          <TextInput label="First Name" {...props.inputPropsFor('firstName')} />
          <TextInput label="Last Name" {...props.inputPropsFor('lastName')} />
        </>
      }}
    </FormBuilder>
  }
}
