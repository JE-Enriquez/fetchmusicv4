import React, { useState } from "react";
import { Link } from 'react-router-dom'
// import useFetchBuscar from "../../Hooks/useFetchBuscar";
import { MainContainer, MianResults, MainCards, MainCardTitle,
        MainCardTitle2, MainPLoading, MainPError,
        CardAlbum, 
        CardImg,
        CardP,
        Card,
        CardTrack,
        TrackP,
        FontStrong,
        TrackBoton} from "./style.js";

import { AppDispatch, RootState } from "../../app/store.tsx";

import SearchForm from "../SearchForm/SearchForm.tsx";


import { useDispatch, useSelector } from "react-redux";
import { LOADING, FAILED, SUCCEEDED } from "../../redux/slices/status.js";
import { fetchSong, fetchAlbums, Songs } from "../../redux/slices/libraryReducers.ts";

import useFetchBuscar from "../../Hooks/useFetchBuscar.ts";
import SearchTracksList from "../SearckTrackList/SearchTrackList.tsx"

// import { librarySlice } from "../../redux/slices/librarySlice.ts";
import  { addSong } from "../../redux/slices/librarySlice.ts"
import { displayPartsToString } from "typescript";


// Tipamos song para que tome los valores de la api
interface Song {
    idTrack: string;
    strTrack: string;
    strMusicVid?: string;
    strAlbum: string;
    // Añade aquí más propiedades si tu API devuelve más datos
}

export interface Albums {
    idArtist: string;
    strArtist: string;
    strAlbum: string;
    strAlbumThumb?: string;
    strDescriptionES: string;
    idAlbum?: string;
}

const Main = () => {


//********************************************************************************
//      EXPORTANDO EL ESTADO GLOBAL DE librarySlice                              */
    
    const dispatch = useDispatch<AppDispatch>();
    // Mandamos llamar/leemos el estado global del reduc de librarySlice
    
    const { songs, albums, status } = useSelector((state: any) => state.songs);
    // const { albums, status } = useSelector((state: any) => state.albums);
    const savedSongs = useSelector ((state: RootState) => state.library.songs); 

    
//******************************************************************************* */
    
//***************************************************************************************************** */
//      SECCION DE LOS ESTADOS Y LOS ARRAYS 

    // En este arreglo vamos a guardar lo que se excriba en el input de SearchForm
    const [textInput, setTextInput] = useState("");
    
    const [ query, setQuery ] = useState("");
    const [ queryT, setQueryT] = useState("");

    // Hook local para los albums
    // const { music, isLoading, error } = useFetchBuscar(query);
    
    // Con este evencto pasamos la informacion al useState de textInput
    // const handleSearchMusic = (texto: string) => {
    //     setTextInput(texto); // Guardamos el texto del inpur en el useState
        // setQuery(texto)
    // };

//******************************************************************************************************* */

//****************************************************************************************************** */
//      SECCION DE LOS MANEJADORES / HANDLE

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value)

    };

    const handleSearchMusic = () => {
        if (textInput.trim() !== '') { 
        setQuery(textInput); 
        dispatch(fetchAlbums(textInput));   
    } 
    }


    const handleSearchTracks = () => {
        setQueryT(textInput);
        console.log("este es el valor del input", textInput)
        if(textInput.trim() !== ''){
            dispatch(fetchSong(textInput));
        }
    };

    const handleAddSong = (song : Song) => {
    if (!song.idTrack) return;

   
        console.log("Canción enviada a Redux:", song); // <-- Añade esta línea
        dispatch(addSong(song));

    };





//*********************************************************************************************************************** */


    // con estas funciones manejamos estados de la consulta de la api
    // creamos la funcion y su return (resultado de la funcion su es activada)
    // Mas abaio en el codigo en el renderizado las funciones seran llamadas para hacer el
    // control de estados.
    // const renderLoading = () => <MainPLoading>Loading...</MainPLoading>
    // const renderError = () => <MainPError>Hubo un error al cargar</MainPError>
    
    // Englobamos slos resultados de la buscqueda en la funcion de control de estado para 
    // evitar que se cargue la pagina aun no se ha echo ninguna consulta
    const renderAlbums = () => {
        
        // esto hace un a validacion del input cuando esta vacio y si es verdaredo (osea si esta vacio)
        // deja el mensaje de "ingresar un artista"
        if(!query) return <MainPLoading>Ingresa un artista para buscar...</MainPLoading>
        if (status === LOADING && !queryT) return <MainPLoading>Buscando álbumes...</MainPLoading>;
        if (status === FAILED) return <MainPError>Hubo un error al cargar los álbumes</MainPError>;

        
        //Esta validacion ayuda a que si el valoir del unput no arrojo nada en la busqueda
        // no rompa la pagina y mande un mensaje de error de busqueda
        // if(music.length === 0) return <MainPError>No se encontraron resultados para {query}</MainPError>
        
         // Almacenamos en un array la respuesta de la API
        const listaAlbums = Array.isArray(albums) ? albums : []; 

        if(listaAlbums.length === 0 && status === SUCCEEDED) {
            return <p>No se encontraron canciones para {query}</p>
        }

        return (
            <>
                {/* <MainContainer> */}
    
    
                    <MianResults>
                        <MainCards>
                    
                            <MainCardTitle>Albums</MainCardTitle>
                            {/* Manejadores de esta de carga cuando la api esta haciendo una consulta */}
                            {/* {isLoading && <p>Buscando en la base de datos...</p>} */}
                            {/* {error && <MainPError>{error}</MainPError>} */}
                            {
                                // (albums && status === SUCCEEDED) && 
                                listaAlbums.map((album: Albums) => {
                                    // const { idAlbum, strAlbum, strAlbumThumb, strArtist, idArtist } = item;
    
                                    return(
                                        <Card key={album.idAlbum || album.idArtist}>
                                            <CardP>ID: {album.idArtist}</CardP>
                                            <CardAlbum>Nombre del Artista: <FontStrong>{album.strArtist}</FontStrong></CardAlbum>
                                            <CardImg src={album.strAlbumThumb} alt="" />
                                            <CardP>Id album: {album.idAlbum}</CardP>
                                            <CardAlbum>Nombre del album: {album.strAlbum}</CardAlbum>
                                            
                                        </Card>   
                                    )
                                })
                            }
                            <SearchTracksList onSearch={handleSearchTracks}/>
                        </MainCards>
                    </MianResults>
                {/* </MainContainer> */}
    
            </>
        )
    }

    // const savedSongs = useSelector((state: RootState) => state.library.songs);

    // const renderLoadingTrack = () => <MainPLoading>{LOADING}Loading tracks...</MainPLoading>
    // const renderErrorTrack = () => <MainPError>Hubo un error al cargar los tracks</MainPError>
    
    const renderTracks = () =>{

        // if(queryT !== query) return <p style={{textAlign: 'center', marginTop: '10px'}}>Presiona "Ver canciones" para mostrar la lista</p>;    
        if(queryT === '') return <MainPLoading style={{textAlign: 'center', marginTop: '10px'}}>Presiona "Ver canciones" para mostrar la lista</MainPLoading>;
        if (status === LOADING && queryT) return <MainPLoading>Cargando canciones...</MainPLoading>;


        // Almacenamos en un array la respuesta de la API
        const listaCanciones = Array.isArray(songs) ? songs : []; 
        if(listaCanciones.length === 0 && status === SUCCEEDED) {
            return <p>No se encontraron canciones para "{queryT}"</p>
        }

        
        return(
            <>
            {/* <MainContainer> */}
                <MianResults>
                    <MainCards>
                        <MainCardTitle2>Canciones de {queryT}</MainCardTitle2>
                        
                            
                        {
                            
                            listaCanciones.map((cancion: Song) => {
                                
                                const isAlreadySaved = savedSongs.some((song: any) => song.idTrack === cancion.idTrack);
                                return(
                                    <CardTrack key={cancion.idTrack}>
                                        <TrackP>Id: {cancion.idTrack}</TrackP>
                                        <TrackP>Nombre: <FontStrong>{cancion.strTrack}</FontStrong></TrackP>
                                        <TrackP>Álbum: {cancion.strAlbum}</TrackP>
                                        <TrackP>{cancion.strMusicVid}</TrackP>
                                        <Link 
                                                to={`/tracks/${cancion.idTrack}`}
                                                style={{
                                                    textDecoration: 'none', 
                                                    color: '#1da1f2',
                                                    alignSelf: 'center',
                                                    marginTop: '5px',
                                                    border: '#000, 1px, solid',
                                                    padding: '5px',
                                                    
                                                }}
                                            >Ve detalles de album</Link>
                                        <TrackBoton 
                                            type="button"
                                            onClick={() => handleAddSong(cancion)}
                                            disabled={isAlreadySaved}
                                            style={
                                                {backgroundColor: isAlreadySaved ? '#ccc' : '#1db954', 
                                                color: 'white',
                                                cursor: isAlreadySaved ? 'not-allowed' : 'pointer'
                                                }
                                            }  
                                        >Agregar</TrackBoton>
                                    </CardTrack>
                                )
                            }
                            
                            )
                        }
                   
                                
                        
                    </MainCards>
                </MianResults>
            {/* </MainContainer> */}
            
            </>
        )
    }
    
// **********************************************************************************************
 // Controladores de interfaz para renderizar los bloques condicionales
    // const renderConstentAlbums = () => {
    //     if(isLoading) return renderLoading();
    //     if(error) return renderError();
    //     return renderAlbums();
    // }

    // const renderConstentTracks = () => {
    //     if(status === LOADING) return renderLoadingTrack();
    //     if(status === FAILED) return renderErrorTrack();
    //     return renderTracks();
    
    // }

//****************************************************************************************************** */
    return (
        <>
            <SearchForm 
                onSearch={handleSearchMusic} 
                onChange={handleInputChange} 
                value={textInput}
            />
            <MainContainer>
                {renderAlbums()}
                {/* <SearchTracksList onSearch={handleSearchTracks}/> */}

            </MainContainer>
            <MainContainer>
                {renderTracks()}
            </MainContainer>
        </>
    )
}

export default Main;
