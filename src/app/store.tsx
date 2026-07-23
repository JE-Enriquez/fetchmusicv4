import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from '../redux/slices/librarySlice.ts'
import songsReducer from '../redux/slices/libraryReducers.ts'

// ConfigureStore = createStore usado en redux puro

const store = configureStore ({
    reducer: {
        library: libraryReducer,
        songs: songsReducer,
    }
})

// Tipos inferidos necesarios para TypeScript y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;