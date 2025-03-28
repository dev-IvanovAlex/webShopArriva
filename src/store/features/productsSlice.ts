import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


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
    updatedt:string,
    quantity:number
}

export interface ProductsState{
    
    products:Product[],
    isLoading:boolean,
    pagProducts:[],
    isPagLoading:boolean

}

const initialState:ProductsState={
    products:[],
    isLoading:true,
    pagProducts:[],
    isPagLoading:true

}

type fetchPagProductsParameters = {
    categ:string,
    offset:number,
    limit:number
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async()=>{
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/`)
        const data = await response.json()
        return data;
    }
)


export const fetchPagProducts = createAsyncThunk(
    'products/fetchPagProducts',
    async({categ, offset, limit}:fetchPagProductsParameters)=>{
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categorySlug=${categ}&offset=${offset}&limit=${limit}`)
        const data = await response.json()
    
        return data;

    }
)

export const ProductsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
       
       
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.products =action.payload
            state.isLoading = false
        }),
         builder.addCase(fetchPagProducts.fulfilled, (state,action)=>{
            state.isPagLoading = false
            state.pagProducts =action.payload
            
        }),
         builder.addCase(fetchPagProducts.pending, (state)=>{
            state.isPagLoading = true
        }),
        
       
        builder.addCase(fetchProducts.pending, (state)=>{
           state.isLoading = true
        })
    }
})


export default ProductsSlice.reducer
export const {} = ProductsSlice.actions