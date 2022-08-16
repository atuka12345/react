
import React, {Component} from "react";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      showUsersList: true,
      users: []
    }
  }
  
  checker = () => {
    this.setState({showUsersList: true})
    this.setState({users: greatUsers})
    console.log(this.state.showUsersList)
  }

  removeRandomeUser = () => {
      this.setState( (sum) => {
        console.log(greatUsers.name,'died'  )
        const randomIndex = Math.floor(Math.random() * sum.users.length)
        const usersArray = sum.users.filter((_, index)=> index !== randomIndex)
        return {users: usersArray }
      })
  }

  render() {
    return (
      <div>
        <button onClick={this.checker}>spawn users</button>
        <>
          {this.state.users.map(user => {
          const {name, id} = user;
          return <p key={id}>{name}</p>
          })}
        </>
        <button onClick={this.removeRandomeUser}>KILL USER</button>
      </div>
    )
  }
}

  
const greatUsers =[
  {name:"atuka",id: 1,},
  {name: "ilia",id: 2,},
  {name:"petre",id: 3,},
  {name:"rusudani",id: 4,},
  {name:"giorgi",id: 5,},
  {name:"merabi",id: 6,},
  {name: "luka",id: 7,},
  {name: "lali",id: 8,},
  {name:"anamaria",id: 9,},
  {name:"lizi",id: 10,}
 ]








 










