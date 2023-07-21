const mongoose=require('mongoose');
dbConnect();
async function dbConnect(){
    try {
        await mongoose.connect('mongodb+srv://chinmaykate313:TPOTrNv8LqCm1k0i@cluster0.uwiz20t.mongodb.net/chinmayjobs',{useNewUrlParser :true});
        console.log("MongoDB connected successfully"); 
        
    } catch (error) {
        console.log("MongoDB connection failed")
    }
}

module.export=mongoose 