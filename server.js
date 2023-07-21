
const express =require('express');
const app=express();
const db=require('./db.js')
const jobsRoute=require("./routes/jobsRoute");
const usersRoute =require("./routes/usersRoute.js");

app.use(express.json());
app.use("/api/jobs/",jobsRoute);
app.use("/api/users/",usersRoute);
const port=process.env.PORT || 5000;
app.listen(port,()=>console.log("server listening at ports 5000"));
