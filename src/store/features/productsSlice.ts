import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Category{
    id:number,
    name:string,
    slug:string,
    image:string,
    creationAt:string,
    updatedAt:string
}
export interface Product{
    id:number,
    title:string,
    slug:string,
    price:number,
    description:string,
    category:Category,
    images: string[],
    creationAt:string,
    updatedt:string
}

export interface ProductsState{
    products:Product[]

}

const initialState:ProductsState={
    products:[]
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async()=>{
        
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()

        return data;
    }
)
export const ProductsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        addProduct:(state,action:PayloadAction<{title:string}>)=>{
            
        },
       
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
           state.products =action.payload
        })
    }
})


export default ProductsSlice.reducer
export const {addProduct} = ProductsSlice.actions