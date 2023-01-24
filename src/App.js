import React, {Component} from "react";
import Feed from "./componentes/Membro";
import Login from "./componentes/forms/login";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed:[
            {id: 1, username: 'Alcemir', curtidas: 1, comentarios: 1},
            {id: 2, username: 'Maria', curtidas: 15, comentarios: 4},
            {id: 3, username: 'Meirys', curtidas: 17, comentarios: 8},
        ]
    }
  }
  render(){
    return(
      <div>
        {this.state.feed.map((item)=>{
          return(
            <div>
              <Feed id={item.id} nome={item.username} like={item.curtidas} comments={item.comentarios} />
            </div>
          )
        })}

        <Login />
      </div>
    )
  }
}
export default App;