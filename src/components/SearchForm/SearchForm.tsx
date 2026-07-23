import React, { useState } from "react"
import { SearchFormBuscar, SearchInput, SearchBoton } from './style'


// Para pasar las propiedades de Inpur a la funcion es necesario creap las props y
// por ellos el proyecto cambia de js a tsx

type SearchBarProps = {
    onSearch: () => void; 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;

}

const SearchForm = ({onSearch, onChange, value} : SearchBarProps ) => {

    // const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Presiono el boton buscar");
        onSearch(); //Con esta linea se manda el texto al padre que es donde se declara el handleSubmit
    }

    // Este handel hace la accion de guardar el valor que se escribe en el Input
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const {value} = e.target; // En esta linea guardamos la propuedad del Input en el value
    //     console.log(`Cambio el valor a , ${value}`);
    //     setInputValue(value); // con etsa linea seteamos el estado de inputValue
    // }

    return (
        <>
            <SearchFormBuscar onSubmit={handleSubmit}>
                <SearchInput
                    type="text"
                    name="buscar"
                    id="buscar"
                    value={value}
                    onChange={onChange} // aqui le pasamos la funcion del handle para que accione el evento(e) y almacene los cambios
                />
                <SearchBoton type="submit">Buscar</SearchBoton>
            </SearchFormBuscar>
        </>

    )


    
}

export default SearchForm;