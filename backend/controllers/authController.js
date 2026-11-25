import bcrypt from 'bcrypt';
import User from '../models/user.js';



export const register = async (req, res)=> {
    try {
        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword
        })
        console.log("New user: ", newUser);
        await newUser.save();
        res.status(201).json({message: "New User successfully created'"})
    } catch (error) {
        res.status(500).json({ error: "error registering user", message: error.message})
    }
};

export const login = async (req, res) => {
    try {
   const {username, password} = req.body;
   const user = await User.findOne({ username });

   if(!user){
    return res.status(404).json({message: "User not found"})
   }
   const isMatch = await bcrypt.compare(password, user.password);

   if(!isMatch){
    return res.status(401).json({message: "Invalid password"})
   }
    }
    catch(error){
        res.status(500).json({message: "something went wrong"})
    }
}