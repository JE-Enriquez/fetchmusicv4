import axios from 'axios'
import { useEffect, useState } from "react";

type Music = {
    idArtist: string;
    strArtist: string;
    strAlbum: string;
    strAlbumThumb: string;
    strDescriptionES: string;
    idAlbum: string;
}

interface FetchBuscarState {
    music: Music[];
    isLoading: boolean;
    error: string | null;
}

const useFetchBuscar = (query: string) => {

    const [state, setState] = useState<FetchBuscarState>({music: [], isLoading: false, error: null});

    useEffect(() => {

        if (!query.trim()) {
            setState({ music: [], isLoading: false, error: null });
            return;
        }

        const fetchAlbum = async () => {
            setState(prev => ({...prev, isLoading: true, error: null}));

            try{
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${query}`);
                
                const rawAlbums = response.data && response.data.album ? response.data.album : [];
                
                
                setState({
                    music: rawAlbums,
                    isLoading: false,
                    error: null,
                });
    
                console.log("Si responde", response);
            } catch (error) {
                setState({
                    music: [],
                    isLoading: false,
                    error: "error fetching"
                });
                console.log(error);
            }
            
        }
        
        fetchAlbum();

    }, [query]);
    
    console.log("este es el state", state)
    return {
        
        music: state.music,
        isLoading: state.isLoading,
        error: state.error
    };
}
export default useFetchBuscar;