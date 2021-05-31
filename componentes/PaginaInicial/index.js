import React, {useState} from 'react';
import './style.css';


 const  PaginaInicial = () => {

    const [ curtidas, setcurtidas ] = useState(0);


    function somarCurtidas () {
  
      setcurtidas(curtidas + 1);
   
    } 

  
    function subtrairCurtidas (){

      setcurtidas(curtidas - 1);
   }


   function limparCurtidas (){

      setcurtidas(0);
   }



    return (

      <div className="conteudo-centralizado">

            <h3>Quantidade de Like 👍👎 : </h3>
               <h2> {curtidas}</h2>

                    <button onClick={somarCurtidas} >
                      Like!
                    </button>

                    <button onClick={subtrairCurtidas} className="botao-subtrair">
                     Deslike!
                    </button>

                   

                    <button onClick={limparCurtidas} className="botao-limpar">
                      Limpar
                    </button>
    
         
        </div>
      );

}
   export default PaginaInicial;