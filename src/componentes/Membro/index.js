import React, {Component} from "react";

class Feed extends Component{

    
    render(){
        return(
            <div key={this.props.id}>
                <h2>{this.props.nome}</h2>
                <a>{this.props.like > 1 ? this.props.like + ' Curtidas' : this.props.like + ' Curtida'} / {this.props.comments > 1 ? this.props.comments + ' Comentários' : this.props.comments + ' Comentário'}</a><hr/>
            </div>
        )
    }
}
export default Feed;


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