import React, {Component} from "react";

class Membro extends Component{

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
                        <div key={item.id}>
                            <h3>{item.username}</h3>
                            <a>{item.curtidas} Curtidas / {item.comentarios} Comentários</a><hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Membro;


/*import React, {Component} from "react";

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: true
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({status: false});
    }
    entrar(){
        this.setState({status: true});
    }
    
    render(){
        return(
            <div>
                {this.state.status ?
                <div>
                    <h1>Você está logado no sistema</h1>
                    <button onClick={this.sair}>Sair do Sistema</button>
                </div> :
                <div>
                    <h1>Deseja fazer login?</h1>
                    <button onClick={this.entrar}>Entrar do Sistema</button>
                </div>

                }
            </div>
        )
    }
}
export default App;*/