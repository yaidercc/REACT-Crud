import { useState } from "react"

export const Formulario=({setDataUser})=>{

    const[Info,setInfo] = useState({nombre:"",edad:''});

    /**
     * Funcion para agregar valor a la variable nombre del Info
     * @param {*} event 
     */
    const addName=(event)=>{

        /**
         * prevState: estado anterior del hook
        */
        setInfo(prevState =>({...prevState, nombre: event.target.value }));
    }

    /**
     * Funcion para agregar valor a la variable edad del Info
     * @param {*} event 
     */
    const addEdad=(event)=>{

        /**
         * prevState: estado anterior del hook
        */
        setInfo(prevState =>({...prevState, edad: event.target.value }));
    }

    /**
     * Funcion encargada de cambiar el estado del componente padre y guardar los datos en el localStorage
     * @param {*} event 
     */
    const onSubmit=(event)=>{
        event.preventDefault();

        // validaciones a los datos
        if(Number(Info.edad)>0 && Info.nombre.trim().length>1){

            // Agrear datos al usestate de CrudUsers
            setDataUser(datausers=>[...datausers,Info]);
            
            // Agregar datos al localstorage
            const dataLocal=JSON.parse(localStorage.getItem("data")) || [];
            dataLocal.push(Info);
            localStorage.setItem("data",JSON.stringify(dataLocal));

            // reinciar useState
            setInfo({nombre:"",edad:0});
        }else{
            alert("algunos datos estan incorrectos.");
        }
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="Ingrese un nombre"
                    value={Info.nombre}
                    onChange={(e)=>addName(e)}
                />
                <input 
                    type="number"
                    placeholder="Ingrese una edad"
                    value={Info.edad}
                    onChange={(e)=>addEdad(e)}
                />
                <input type="submit" value="Enviar" className="btn-enviar"/>
            </form>
        </>
    );
}
