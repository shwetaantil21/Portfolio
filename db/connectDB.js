import mongoose from 'mongoose';

const connectDB = async(DATABASEURL)=>{
    const DB_OPTIONS={
    dbname:'Shwetaportfolio',
    }
    const data = await mongoose.connect(DATABASEURL, DB_OPTIONS)
    if(data){
        console.log("Database connection successfully");
    }
    }

export default connectDB;
