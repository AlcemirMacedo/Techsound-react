import React, {Component} from "react";
import Feed from "./componentes/Membro";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        feed:[
            {id: 1, username: 'Alcemir', curtidas: 10, comentarios: 2},
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
      </div>
    )
  }
}
export default App;