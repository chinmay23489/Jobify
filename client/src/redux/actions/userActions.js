import axios from "axios";
import { message } from "antd";

//added register user 
export const registerUser=(values)=>async dispatch =>{
   
    dispatch({type:'LOADING',payload:true})

    try {
        await axios.post('/api/users/register',values)
        message.success('User Registered Successfully')
        setTimeout(() => {
            window.location.href='/login';
        }, 1000);
        dispatch({type:'LOADING',payload:false})
        
    } catch (error) {
        message.error('Something went wrong,please try later');
        dispatch({type:'LOADING',payload:false})
    }
}

export const loginUser=(values)=>async dispatch =>{
   
    dispatch({type:'LOADING',payload:true})

    try {
        const user=await axios.post('/api/users/login',values)
        message.success('Login Success')
        localStorage.setItem('user',JSON.stringify(user.data))
        setTimeout(() => {
            window.location.href='/';
        }, 1000);
        dispatch({type:'LOADING',payload:false})
        
    } catch (error) {
        message.error('Invalid Credentials');
        dispatch({type:'LOADING',payload:false})
    }
}

export const updateUser=(values)=>async dispatch =>{
   
    const userId=JSON.parse(localStorage.getItem('user'))._id
    values._id=userId;
    dispatch({type:'LOADING',payload:true})

    try {
        const user=await axios.post('/api/users/update',values)
        message.success('User Updated Successfully')
        localStorage.setItem('users',JSON.stringify(user.data))
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        dispatch({type:'LOADING',payload:false})
        
    } catch (error) {
        message.error('Something went wrong,please try again later');
        dispatch({type:'LOADING',payload:false})
    }
}

export const getAllUsers = () => async (dispatch) => {
      dispatch({ type: "LOADING", payload: true });
      try {
        const response = await axios.get("/api/users/getallusers");
        dispatch({ type: "GET_ALL_USERS", payload: response.data });
        dispatch({ type: "LOADING", payload: false });
      } catch (error) {
        console.log(error);
        dispatch({ type: "LOADING", payload: false });
      }
    };

// export const updateUser = (values) => async (dispatch) => {
//     dispatch({ type: 'LOADING', payload: true });
  
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       console.log(user);
//       if (user && user._id) {
//         values._id = user._id;
//         const updatedUser = await axios.post('/api/users/update', values);
//         message.success('User Updated Successfully');
//         localStorage.setItem('users', JSON.stringify(updatedUser.data));
//         setTimeout(() => {
//           window.location.reload();
//         }, 1000);
//         dispatch({ type: 'LOADING', payload: false });
//       } else {
//         throw new Error('User data is missing or invalid');
//       }
//     } catch (error) {
//       message.error('Something went wrong, please try again later');
//       dispatch({ type: 'LOADING', payload: false });
//     }
//   };

// import axios from "axios";
// import { message } from "antd";
// export const registerUser = (values) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });

//   try {
//     await axios.post("/api/users/register", values);
//     message.success("User Registered Successfully");
//     setTimeout(() => {
//       window.location.href = "/login";
//     }, 1000);
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     message.error("something went wrong , please try later");
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

// export const loginUser = (values) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });

//   try {
//     const user = await axios.post("/api/users/login", values);
//     message.success("Login success");
//     localStorage.setItem("user", JSON.stringify(user.data));
//     setTimeout(() => {
//       window.location.href = "/";
//     }, 1000);
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     message.error("invalid credentials");
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

// export const updateUser = (values) => async (dispatch) => {
//   const userid = JSON.parse(localStorage.getItem("user"))._id;

//   values._id = userid;

//   dispatch({ type: "LOADING", payload: true });

//   try {
//     const user = await axios.post("/api/users/update", values);
//     message.success("User updated successfully");
//     localStorage.setItem("user", JSON.stringify(user.data));
//     setTimeout(() => {
//       window.location.reload();
//     }, 1000);
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     message.error("something went wrong , please try later");
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

// export const getAllUsers = () => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });
//   try {
//     const response = await axios.get("/api/users/getallusers");
//     dispatch({ type: "GET_ALL_USERS", payload: response.data });
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//   }
// };
