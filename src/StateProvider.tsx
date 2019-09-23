import * as React from 'react'
import {ReactNode} from 'react'
import {User} from './models/User'
import {StateContext} from './StateContext'

interface State {
  user: User
  setUser: (newUser: Partial<User>) => void
}
export class StateProvider extends React.Component<{children: ReactNode}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      user: new User(),
      setUser: this.setUser
    }
  }

  setUser = (newUser: Partial<User>) => {
    this.setState({
      user: Object.assign({}, {...this.state.user, ...newUser})
    })
  }

  render() {
    return <StateContext.Provider value={{state: this.state}}>
      {this.props.children}
    </StateContext.Provider>
  }
}
