const mongoose = require('mongoose');

// Creating the Schema
const Schema = mongoose.Schema;

const SignUpSchema = new Schema({
    existingEmailId: String,
    existingPassword: String
});

// Creating the NewUser model
const SignUp = mongoose.model('SignUp', SignUpSchema);

// --------------Dummy data Insertion --------------
// const data = {
//     name: "Pranav Soni",
//     emailId: "pranavsoni1101@gmail.com",
//     password: "1234567890"
// }

// in order to save to database we need to create an instance of the model
// const newSignUp = new SignUp(data);
 
// Saving the data into the databse using .save()
// newSignUp.save((error) => {
//     if(error)
//         console.log("Something Went Wrong", error);
//     else
//         console.log("New Signup user has been saved");
// })
// --------------Dummy data Insertion --------------

module.exports = SignUp;