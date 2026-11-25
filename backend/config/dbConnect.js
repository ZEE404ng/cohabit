import {connect} from 'mongoose';

const dbConnect = async () => {
    try {
        const mongoDbConnect = await connect(process.env.CONNECTION_STRING)
        console.log(`Database connected: ${mongoDbConnect.connection.host}`);
    } catch (error) {
        console.error(`Database connection error: ${error} `)
    }
}

export default dbConnect;