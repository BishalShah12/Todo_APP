import { createSlice, current } from '@reduxjs/toolkit'
import {addTodo, AllTodo, deleteTodo, editTodo, getProfileData, loginUserThunk, logoutThunk, registerUserThunk} from "./user.thunk"


const initialState = {
  isAuthenticated:false,
  todos:[],
  userProfile:null,
  loading:false,
  error:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {


      // get Profile Data
   builder.addCase(getProfileData.pending, (state, action) => {
    state.loading = true
    
  });
  builder.addCase(getProfileData.fulfilled, (state, action) => {
    state.loading = false
  //   state.isAuthenticated = true
  // state.userProfile = action.payload
  // console.log(state.userProfile);
      
    if (action.payload?.statusCode === 200) {
      return (state.isAuthenticated = true,
          state.userProfile = action.payload?.responseData);
    }
     
  });
  builder.addCase(getProfileData.rejected, (state, action) => {
    state.loading = true
    state.error = action.payload
    
  });

    // User Login
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.loading = true
      
      
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      console.log(state.isAuthenticated);
      
      
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loading = true
      state.error  = action.payload
      
    });

    // Logout
    builder.addCase(logoutThunk.pending, (state, action) => {
      state.loading = true

      
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = false
      
      
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.loading = true
      state.error  = action.payload
      
    });


    // User register 
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.loading = true
      
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.loading = false
      state.isAuthenticated = true
      
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.loading = true
      state.error = action.payload
      
    });


    // AddTodo
    builder.addCase(addTodo.pending, (state, action) => {
        state.loading = true
      
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false
      
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = true
      state.error = action.payload
      
    });


    // get all todo
    builder.addCase(AllTodo.pending, (state, action) => {
      state.loading = true
    
  });
  builder.addCase(AllTodo.fulfilled, (state, action) => {
    state.loading = false
    state.todos = action.payload
      
  });
  builder.addCase(AllTodo.rejected, (state, action) => {
    state.loading = true
    state.error = action.payload
    
    
  });

  // delete Todo
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true

  });
  builder.addCase(deleteTodo.fulfilled, (state, action) => {
    state.loading = false 
  });
  builder.addCase(deleteTodo.rejected, (state, action) => {
    state.loading = true
    state.error = action.payload

  });


  // Edit Todo List
   builder.addCase(editTodo.pending, (state, action) => {
    state.loading = true
    
  });
  builder.addCase(editTodo.fulfilled, (state, action) => {
    state.loading = false
    console.log(action.payload);
    
    
  });
  builder.addCase(editTodo.rejected, (state, action) => {
    state.loading = true
    state.error = action.payload
    
  });




  },

})


export default userSlice.reducer