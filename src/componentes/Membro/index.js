import React, {Component} from "react";

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
export default App;