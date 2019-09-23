import * as React from 'react'
import {ReactNode} from 'react'
import {StateContext} from '../StateContext'
import {User} from '../models/User'

interface Props {
  children: (props: any) => ReactNode
}

export class FormBuilder extends React.Component<Props> {
  static contextType = StateContext


  onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {setUser} = this.context.state
    const name = event.target.name
    setUser({
      [name]: event.target.value
    })
  }

  inputPropsFor = (key: keyof User) => {
    const {user} = this.context.state
    return {
      name: key,
      value: user[key],
      onChange: this.onChangeHandler

    }
  }

  render() {
    return <form>{this.props.children({inputPropsFor: this.inputPropsFor})}</form>
  }
}
