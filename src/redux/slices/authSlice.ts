import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Types
interface User {
  email: string;
  password: string;
}

interface RegistrationState {
  loading: boolean;
  user: User | null;
  message: string;
  error: string;
  loggedIn: boolean;
  isCheckedL:boolean;
}

const initialState: RegistrationState = {
  loading: false,
  user: null,
  loggedIn: false,
  message: "",
  error: "",
  isCheckedL: false,
};

// Fake API call
const fakeRegisterApi = async (userData: User): Promise<{ message: string; user: User }> => {
  console.log("API called with:", userData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email === "fail@example.com") {
        console.log("API failed");
        reject({ message: "Registration failed!" });
      } else {
        console.log("API succeeded");
        resolve({ message: "Registration successful!", user: userData });
      }
    }, 1000);
  });
};

// Async thunk
export const registerUser = createAsyncThunk<
{ message: string; user: User },
User,
{ rejectValue: string }
>(
  "registration/registerUser",
  async (userData: User, { rejectWithValue }) => {
    try {
      const response = await fakeRegisterApi(userData);
      // Save user data to AsyncStorage
      await AsyncStorage.setItem("authUser", JSON.stringify(response.user));
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Load user from AsyncStorage (for rehydration)
export const loadUserFromStorage = createAsyncThunk<
User | null, // Type of the fulfilled value
void, // Type of the argument passed to the thunk
{ rejectValue: string } // Type of the rejected value
>(
  "registration/loadUserFromStorage",
  async (_, { rejectWithValue }) => {
    try {
      const user = await AsyncStorage.getItem("authUser");
      if (user) {
        return JSON.parse(user);
      }
      return null;
    } catch (error) {
      return rejectWithValue("Failed to load user data");
    }
  }
);




// Login api fake 
const fakeLoginApi = async (userData: User): Promise<{ message: string; user: User }> => {
    console.log("Login API called with:", userData);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userData.email === "fail@example.com") {
          console.log("Login API failed");
          reject({ message: "Invalid email or password!" });
        } else {
          console.log("Login API succeeded");
          resolve({ message: "Login successful!", user: userData });
        }
      }, 1000);
    });
  };
  
  // Async thunk for Login api fake 
  export const loginUser = createAsyncThunk<
  { message: string; user: User },
  User,
  { rejectValue: string }
>(
    "registration/loginUser",
    async (userData: User, { rejectWithValue }) => {
      try {
        const response = await fakeLoginApi(userData);
        // Save user data to AsyncStorage
        await AsyncStorage.setItem("authUser", JSON.stringify(response.user));
        return response;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );
  


const authSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.user = null;
      state.message = "";
      state.error = "";
      state.loggedIn = false;
      state.isCheckedL = false;
      
    },

    // logout 
    setUserNull: (state) => {
      state.user = null;
      state.loggedIn = false;
      state.isCheckedL = false;
    },
    setIsChecked: (state) => {
        state.isCheckedL = true; // Update isCheckedL
      },
  },
  extraReducers: (builder) => {
    builder
    // fake register api 
      .addCase(registerUser.pending, (state) => {
        state.loggedIn = false;
        state.loading = true;
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ message: string; user: User }>) => {
        console.log("dhjvndjkvndfkjvndfkvcndf",action.payload)
        state.loading = false;
        state.loggedIn = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.loggedIn = false;
        state.error = action.payload || "Something went wrong!";
      })
      .addCase(loadUserFromStorage.fulfilled, (state, action: PayloadAction<User | null>) => {
        state.user = action.payload;
        state.loggedIn = !!action.payload;
      })
      .addCase(loadUserFromStorage.rejected, (state, action) => {
        state.error = action.payload ? action.payload : "Failed to load user data";
        state.loggedIn = false;
      })

//Fake login api 
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ message: string; user: User }>) => {
        state.loading = false;
        state.loggedIn = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.loggedIn = false;
        state.error = action.payload || "Invalid login credentials!";
      });

  },
});

export const { resetState, setUserNull,setIsChecked } = authSlice.actions;
export default authSlice.reducer;
