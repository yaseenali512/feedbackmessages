import mongoose from "mongoose";

type ConnnectionObject ={
    isConnected?: number
}

const connection: ConnnectionObject = {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected");
        return;
    }

    try {
      const db =  await mongoose.connect(process.env.MONGODB_URI || '', {})

      connection.isConnected =  db.connections[0].readyState

      console.log("DB Connected Successfully");
      
    } catch (error) {
        console.log("Database connection failed", error);
        
        process.exit(1)
    }
}

export default dbConnect;