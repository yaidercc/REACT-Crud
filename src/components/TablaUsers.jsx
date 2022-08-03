import { FaEdit, FaTrash } from "react-icons/fa";
import swal from 'sweetalert';
export const TablaUsers=({dataUsers,setDataUsers})=>{

    /**
     * Funcion para agregar los datos al localstorage
     * @param {*} data 
     */
    const addLocalStorage=(data)=>{
        localStorage.setItem("data",JSON.stringify(data));
    }

    /**
     * Funcion para eliminar un registro
     * @param {*} index 
     */
    const deleteRecord=(index)=>{
        const newInfo=dataUsers.filter((el,i)=>i!=index);
        if(confirm("¿Desea eliminar este registro?")){
            setDataUsers([...newInfo]);
            addLocalStorage(newInfo);
        }
    }

    /**
     * Funcion para editar un registro
     * @param {*} index 
     * @returns 
     */
    const editRecord=(index)=>{
        
        // Pide los datos
        const name=prompt("Ingresa un nombre",dataUsers[index].nombre);
        const edad=Number(prompt("Ingresa una edad",dataUsers[index].edad));
        
        // valida que esten correctos
        if(name.trim().length<1){
            swal("Nombre incorrecto",'', "error");
            return;
        }
        if(Number(edad)<1 || isNaN(edad)){
            swal("Edad incorrectos",'', "error");
            return;
        }

        // Los asigna a la variable de usestate dataUsers
        dataUsers[index].nombre=name;
        dataUsers[index].edad=edad;

        // Cambia el estado del la variable dataUsers
        setDataUsers([...dataUsers]);

        // Añade los datos al localStorage
        addLocalStorage(dataUsers);
    }
    return (
        <>
        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUsers?.map((elem,i)=>{
                        return (
                            <tr key={i}>
                                <td >{i+1}</td>
                                <td>{elem.nombre}</td>
                                <td>{elem.edad}</td>
                                <td><button className="btn-edit" onClick={()=>editRecord(i)}> <FaEdit /></button></td>
                                <td><button className="btn-delete" onClick={()=>deleteRecord(i)}><FaTrash /></button></td>
                            </tr>
                        );
                        
                    })}
                </tbody>
        </table>
        </>
    );
}