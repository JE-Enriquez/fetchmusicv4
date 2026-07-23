import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { FAILED, IDLE, LOADING, SUCCEEDED } from "./status";

// Interfaces para tipar la respuesta de la API
export interface Songs {
    idTrack: string;
    strTrack: string;
    strAlbum: string;
    strMusicVid: string;
    [key: string]: any; 
}


export interface Albums {
    idArtist: string;
    strArtist: string;
    strAlbum: string;
    strAlbumThumb: string;
    strDescriptionES: string;
    idAlbum: string;
}

interface FetchSongResponse {
    song: Songs[] | null
}

interface FetchAlbumResponse {
    album: Albums[] | null
}

interface SongState {
    status: string;
    songs: FetchSongResponse | null;
    albums: FetchAlbumResponse | null;
}


export const fetchSong = createAsyncThunk<FetchSongResponse, string>('songs/fetchTracks', async (queryT: string) => {
    try{
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track-top10.php?s=${queryT}`);
        
        return response.data.track;
        
    }catch (error: any){
        
        console.log(error)
    }
});


export const fetchAlbums = createAsyncThunk<FetchAlbumResponse, string>('songs/fetchAlbums', async (query: string) => {
    try{
        const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${query}`);

        return response.data.album;
    }catch (errorAlbum: any){
        console.log(errorAlbum);
    }
});


// Se declara el initialState como variable global
const initialState: SongState = {
    status: IDLE,
    songs: null,
    albums: null,
}


// Aquie esta la funcion que maneja los estados
const songsSlice = createSlice ({
    name: 'songs',
    initialState,

    reducers: {

        addSong: (state, action: PayloadAction<Songs>) => {
            
            // Con este if sevalida e inserta en el array interno .track
            if(!state.songs) {
                state.songs = {
                   song: []
                   
                }
            
            }
            // Con este if se controla que el push se ejecute si albums inicia como array []
            if(Array.isArray(state.songs)){

                state.songs.push(action.payload)
            }
        },

        addAlbum: (state, action: PayloadAction<Albums>) => {
            if(!state.albums){
                state.albums = {
                    album: []
                }
            }
        }


    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchSong.pending, (state) => {
                state.status = LOADING;

            })
            .addCase(fetchSong.fulfilled, (state, action) => {
                state.status = SUCCEEDED;
                state.songs = action.payload || []; // Aquí guardamos el resultado de la API
            })
            .addCase(fetchSong.rejected, (state) => {
                state.status = FAILED;

            })

            // Estrareducers para Albums
            .addCase(fetchAlbums.pending, (state) => {
                state.status = LOADING;
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.status = SUCCEEDED;
             // Aquí guardamos el resultado de la API
                state.albums = action.payload || [];
            })
            .addCase(fetchAlbums.rejected, (state) => {
                state.status = FAILED;

            });
    }

})

export const { addSong, addAlbum } = songsSlice.actions;
// Este destructurin y exportacion sirve para pasarle los reducers al store,
export const { reducer: songsReducer} = songsSlice;
export default songsReducer;