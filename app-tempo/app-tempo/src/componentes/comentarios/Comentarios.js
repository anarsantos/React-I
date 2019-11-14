import React,{Component} from 'react'
import comentarios from '../../dados/comentarios'

class Comentario extends Component {
    constructor(props){
        
        super(props)
    }

    render(){
        return(
            <div className="comentarios">
                {
                    comentarios.map
                }

            </div>
        )
    }
        
}

export default Comentario;