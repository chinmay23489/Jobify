import axios from "axios";
import { message } from "antd";

export const getAllJobs = () => async dispatch => {

   dispatch({ type: 'LOADING', payload: true });
   try {
      const response = await axios.get('/api/jobs/getalljobs/');
      dispatch({ type: "GET_ALL_JOBS", payload: response.data })
      dispatch({ type: 'LOADING', payload: false });
   } catch (error) {
      console.log(error);
   }
   dispatch({ type: 'LOADING', payload: false });
}

// export const postJob = (values) => async (dispatch) => {
//    values.postedBy = JSON.parse(localStorage.getItem("user"))._id;

//    dispatch({ type: "LOADING", payload: true });
//    try {
//      const response = await axios.post("/api/jobs/postjobs/", values);

//      dispatch({ type: "LOADING", payload: false });
//      message.success("Job Posted Successfully");

//      setTimeout(() => {
//        window.location.href = "/";
//      }, 1000);
//    } catch (error) {
//      console.log(error);
//      dispatch({ type: "LOADING", payload: false });
//    }
//  };
export const postJob = (values) => async (dispatch) => {
   try {
      dispatch({ type: "LOADING", payload: true });

      // Get the user ID from localStorage and add it to the values object
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
         values.postedBy = user._id;
      }

      // Make the API request to post the job
      const response = await axios.post("/api/jobs/postjobs", values);

      dispatch({ type: "LOADING", payload: false });
      message.success(response.data);

      // Redirect to the homepage after a short delay
      setTimeout(() => {
         window.location.href = "/";
      }, 1000);
   } catch (error) {
      console.log(error);
      dispatch({ type: "LOADING", payload: false });
      message.error("Failed to post the job");
   }
};

export const editJob = (values) => async (dispatch) => {
   dispatch({ type: "LOADING", payload: true });
   try {
     const response = await axios.post("/api/jobs/editjob", values);
 
     dispatch({ type: "LOADING", payload: false });
     message.success("Job Updated Successfully");
 
     setTimeout(() => {
       window.location.href = "/";
     }, 1000);
   } catch (error) {
     console.log(error);
     dispatch({ type: "LOADING", payload: false });
   }
 };

// import { message } from "antd";
// import axios from "axios";
// export const getAllJobs = () => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });
//   try {
//     const response = await axios.get("/api/jobs/getalljobs");
//     dispatch({ type: "GET_ALL_JOBS", payload: response.data });
//     dispatch({ type: "LOADING", payload: false });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

// export const postJob = (values) => async (dispatch) => {
//   values.postedBy = JSON.parse(localStorage.getItem("user"))._id;

//   dispatch({ type: "LOADING", payload: true });
//   try {
//     const response = await axios.post("/api/jobs/postjob", values);

//     dispatch({ type: "LOADING", payload: false });
//     message.success("Job Posted Successfully");

//     setTimeout(() => {
//       window.location.href = "/";
//     }, 1000);
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//   }
// };

// export const editJob = (values) => async (dispatch) => {
//   dispatch({ type: "LOADING", payload: true });
//   try {
//     const response = await axios.post("/api/jobs/editjob", values);

//     dispatch({ type: "LOADING", payload: false });
//     message.success("Job Updated Successfully");

//     setTimeout(() => {
//       window.location.href = "/";
//     }, 1000);
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: "LOADING", payload: false });
//   }
// };


export const applyJob = (job) => async (dispatch) => {


  const user = JSON.parse(localStorage.getItem("user"))

  dispatch({ type: "LOADING", payload: true });
  try {
    const response = await axios.post("/api/jobs/applyjob", {job , user});

    dispatch({ type: "LOADING", payload: false });
    message.success("Job applied Successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const searchJobs = (searchKey) => async (dispatch) => {
   dispatch({ type: "LOADING", payload: true });
   try {
     const response = await axios.get("/api/jobs/getalljobs");
 
     const jobs = response.data
 
     const filteredJobs = jobs.filter(job=>job.title.toLowerCase().includes(searchKey.toLowerCase()))
 
     dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
     dispatch({ type: "LOADING", payload: false });
   } catch (error) {
     console.log(error);
     dispatch({ type: "LOADING", payload: false });
   }
 };
 
 
 export const sortJobs = (values) => async (dispatch) => {
   dispatch({ type: "LOADING", payload: true });
   try {
     const response = await axios.get("/api/jobs/getalljobs");
 
     const jobs = response.data
 
     var filteredJobs = jobs
 
     if(values.experience !== undefined) {
 
          filteredJobs = jobs.filter(job=>job.experience <= values.experience)
 
     }
     if(values.salary!==undefined){
       filteredJobs = jobs.filter(job=>job.salaryTo >= values.salary)
     }
 
     dispatch({ type: "GET_ALL_JOBS", payload: filteredJobs });
     dispatch({ type: "LOADING", payload: false });
   } catch (error) {
     console.log(error);
     dispatch({ type: "LOADING", payload: false });
   }
 };






