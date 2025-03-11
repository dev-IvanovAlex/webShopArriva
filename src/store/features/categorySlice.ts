import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"


export interface Category{
    id:number,
    name:string,
    slug:string,
    image:string,
    creationAt:string,
    updatedAt:string
}
export interface CategoriesState{
    categories:Category[]

}

const initialState:CategoriesState={
    categories:[]
}

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async()=>{
        const response = await fetch("https://api.escuelajs.co/api/v1/categories")
        const data = await response.json()
        return data;
    }
)
export const CategoriesSlice=createSlice({
    name:'categories',
    initialState,
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled, (state,action)=>{
           state.categories =action.payload
        })
    }
})


export default CategoriesSlice.reducer
