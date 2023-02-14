import React, {Component} from "react";

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            form: {
                nome: "",
                email: "",
                senha: "",
                sexo: ""
            }
            
        }
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e){
        let form = this.state.form;   
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    

    render(){
        return(
            <div>
                <h1>Formulário de Login</h1>
                E-mail: <br/>
                <input type="email" name="email" value={this.state.email} onChange={this.dadosForm}/><br/>
                Senha: <br/>
                <input type="password" name="senha" value={this.state.senha} onChange={this.dadosForm} /><br/>

                Sexo:<br/>
                <select name="sexo" value={this.state.sexo} onChange={this.dadosForm}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <div>
                    <h2>{this.state.form.email}</h2>
                    <h3>{this.state.form.senha}</h3>
                    <h3>{this.state.form.sexo}</h3>
                </div>

            </div>
        )
    }
}
export default Login;