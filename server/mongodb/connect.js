import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set ('strictQuery', true); // Turn on strict mode for queries, const accept an url.


mongoose.connect(url) // connect the database
.then(() => 
    console.log('Connected to MongoDB'))
.catch((err) => console.log(err));
}

export default connectDB;