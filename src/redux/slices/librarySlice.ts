import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface Song {
    idTrack: string;
    strTrack: string;
    strAlbumThumb?: string; // El signo ? los hace opcionales por si alguna canción no los tiene
    idAlbum?: string;
    strAlbum?: string;
    strMusicVid?: string;
};

interface LibraryState {
    songs: Song[];
};

const initialState: LibraryState = {
    songs: [],
};

export const librarySlice = createSlice ({
    name: 'library',
    initialState,

    reducers: {
            addSong: (state, action: PayloadAction<Song>) => {
                state.songs.push(action.payload)
            
            },

            removeSong: (state, action: PayloadAction<string>) => {
                state.songs = state.songs.filter(song => song.idTrack !== action.payload)
            },
            
            remove: (state) => {
                state.songs = [];
            },
        }


    // extraReducers: builder => {
    //     builder
    //         .addCase(fetchSong.pending, (state, action) => {
    //             console.log("pending", action);

    //         })

    //         .addCase(fetchSong.fulfiled, (state, action) => {
    //             console.log("fulfiled", action);
    //         })

    //         .addCase(fetchSong.rejected, (state, action) => {
    //             console.log("rejected", action);


    //         })
    // }




});

export const { addSong, removeSong, remove } = librarySlice.actions;
export const { reducer: libraryReducer } = librarySlice;
export default librarySlice.reducer;