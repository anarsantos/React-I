import React,{Component} from 'react'

class Contador extends Component {
    constructor(props){
        
        super(props)
    }

    render(){
        return(
            <header className="cabecalho">
                <p>Eu sou um componente contador</p>

            </header>
        )
    }
        
}

export default Contador;