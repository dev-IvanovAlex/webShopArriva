import { configureStore } from "@reduxjs/toolkit";
import { ProductsSlice } from "./features/productsSlice";
import  categoriesSlice  from './features/categorySlice';


export const store = configureStore({
    reducer:{
        categories:categoriesSlice,
        products:ProductsSlice.reducer,
        
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch