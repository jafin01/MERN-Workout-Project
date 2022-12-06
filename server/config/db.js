const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectToDb = async (ifSuccess) => {
  try{
    const connect = await mongoose.connect(process.env.MONGO_URI)
    ifSuccess(connect.connection.host);
  }
  catch(error) {
    console.log(error);
  }
}

module.exports = connectToDb;


