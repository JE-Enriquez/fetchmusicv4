import React from "react";
import { BotonDiv, BotonBtn } from './style.js';


type SearchTrackListProps = {
    onSearch: () => void
}

const SearchTracksList = ({onSearch}: SearchTrackListProps) => {

    // En este componente solo vamos a crear el boton que dispare la busqueda en la API
    // para extraer las canciones del artista buscado

    return(
        <>
            <BotonDiv>
                <BotonBtn type="button" onClick={onSearch}>Ver canciones</BotonBtn>
                
            </BotonDiv>
        </>
    )
}

export default SearchTracksList;