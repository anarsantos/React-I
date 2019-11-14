import React, { Component } from 'react'


// Paro que o header se comporte como um componente de react
class Header extends Component {
    constructor(props){
        
        super(props)
    }

    render(){
        return(
            <header className="cabecalho">
                <p>Olá</p>

            </header>
        )
    }
    
    
}

export default Header;