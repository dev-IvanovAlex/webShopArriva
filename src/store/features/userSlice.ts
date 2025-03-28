import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { Product } from "./productsSlice"

export interface User{
    id?:number,
    email:string,
    password:string,
    name:string,
    role?:string,
    updatedAt?:string,
    avatar?:string
}



export interface ProductsState{
    user:User[]
}

export type CreateUserType = {
    password:string,
    email:string
}


export const createUser = createAsyncThunk(
    'user/createUser',
    async(payload:CreateUserType)=>{
        const response = await fetch("https://api.escuelajs.co/api/v1/users/",{
                    method: 'POST',
                    headers: {
                            'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(payload)})
        const data = await response.json()

        return data;
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async(payload:CreateUserType, {rejectWithValue})=>{
        try {
             const res = await fetch("https://api.escuelajs.co/api/v1/auth/login",{
                    method: 'POST',
                    headers: {
                            'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify(payload)})
            if(!res.ok){
                throw new Error ('Server error!')
            }
            const resData = await res.json()
            const login = await fetch ("https://api.escuelajs.co/api/v1/auth/profile",{
            headers:{
                'Authorization': `Bearer  ${resData.access_token}`,
            }
        })
        const loginData = await login.json()
        return loginData;
            
        } catch (error:any) {
            alert("Не  удалось войти!")
            return rejectWithValue(error.message)
        }
       
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async(payload:User)=>{
        console.log(payload)
        const response = await fetch(`https://api.escuelajs.co/api/v1/users/${payload.id}`,{
                    method: 'PUT',
                    headers: {
                            'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify(payload)})
        const data = await response.json()

        return data;
    }
)

type InitialStateTypes={
    cart:Product[],
    favourites:Product[],
    currentUser:null,
    isLoading:boolean,
    formType:string,
    showForm:boolean,
    error:any,
    status:string
}

 const initialState:InitialStateTypes={
        cart: [],
        favourites:[],
        currentUser:null,
        isLoading:false,
        formType:"signup",
        showForm:false,
        error:false,
        status:''
    } 



export const UserSlice=createSlice({
    name:'user',
    initialState,
    
    reducers:{
        addItemToCart:(state,action)=>{ 
        let newCart = [...state.cart];
        console.log(newCart)

        const found = state.cart.find((item)=>item.id===action.payload.id)
       
        if (found){
            newCart = newCart.map((item)=>{
                return item.id === action.payload.id ? {...item, quantity: action.payload.quantity || item.quantity + 1 } : item
            })
           
        } else newCart.push({...action.payload, quantity:1})

        state.cart = newCart;
       
        },

        increaseQuantity:(state,action)=>{
            let newCart = [...state.cart]
            newCart = newCart.map((item)=>{
            return item.id === action.payload.id ? {...item, quantity:item.quantity+1}:item
           })
           state.cart = newCart
        },
        decreaseQuantity:(state,action)=>{
            let newCart = [...state.cart]
            newCart = newCart.map((item)=>{
               if(item.id === action.payload.id &&item.quantity>1) {
                return  {...item, quantity:item.quantity-1}
               }
               else return item
            
           })
           state.cart = newCart
        },
        deleteItemFromCart:(state, action)=>{
            let newState:Product[] = [...state.cart]
            newState = newState.filter((item)=>item.id!==action.payload.id)
            state.cart = newState
        },

        toggleForm:(state,action)=>{
            state.showForm = action.payload
        },

        toggleFormType:(state,action)=>{
            state.formType = action.payload
        },
        exitAccount:(state,)=>{
            state.currentUser=null
        },

        addToFavourites:(state,action)=>{
            let newFavourites = [...state.favourites]
            if(newFavourites.find((item)=>item.id === action.payload.id)){
              newFavourites= newFavourites.filter((item)=>{
                    return item.id !== action.payload.id
                })
            } else {
                newFavourites.push(action.payload)
            }
            state.favourites = newFavourites
        }


       
    },
    extraReducers:(builder)=>{
        builder.addCase(createUser.fulfilled, (state,action)=>{
           state.currentUser =action.payload
           state.isLoading = false
           state.status = 'resolved'
        }),
        builder.addCase(loginUser.fulfilled, (state,action)=>{
           state.currentUser =action.payload
            state.status = 'resolved'
        }),
         builder.addCase(loginUser.rejected, (state,action)=>{
           state.error = action.payload
           state.status = 'rejected'
        })
         builder.addCase(updateUser.fulfilled, (state,action)=>{
           state.currentUser =action.payload
            state.status = 'resolved'
        })
    }
})


export default UserSlice.reducer
export const {addItemToCart, toggleForm,toggleFormType, increaseQuantity, decreaseQuantity,deleteItemFromCart,exitAccount,addToFavourites} = UserSlice.actions