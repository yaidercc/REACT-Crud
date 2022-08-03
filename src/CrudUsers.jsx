import { useState } from "react";
import { Formulario } from "./components/Formulario"
import { TablaUsers } from "./components/TablaUsers";

export const CrudUsers=()=>{
    const [dataUsers,setDataUsers]=useState(JSON.parse(localStorage.getItem("data")) || []);
    return(
        <>
            <h1>Crud Usuarios</h1>
            <div className="crud">
                <Formulario setDataUser={setDataUsers}/>
                <TablaUsers dataUsers={dataUsers} setDataUsers={setDataUsers}/>
            </div>
        </>
    )
}