const Signupschema = require("../Model/userSignupschema");
const bcrypt = require("bcrypt");
const secreatkey = "secreat";
const jsonwebtoken = require("jsonwebtoken");
const signup = async (req, res) => {
  const { firstname, lastname, mobilenumber, email, password } = req.body;
  console.log({ email });
  try {
    // existing user check
    const existinguser = await Signupschema.findOne({ email: email });
    if (existinguser) {
      res.json({ message: "user alreday exists" });
    }
    // hash password creation
    const hashpassword = await bcrypt.hash(password, 10);
    // newuser
    const result = await Signupschema.create({
      firstname: firstname,
      lastname: lastname,
      mobilenumber: mobilenumber,
      email: email,
      password: hashpassword,
    });
    console.log(result);
    // jwt token
    const jsontoken = jsonwebtoken.sign(
      { email: result.email, id: result._id },
      secreatkey
    );
    console.log('asfafafae',jsontoken)
    res.json({ user: result, token: jsontoken });
    console.log(result);
  } catch (error) {
    res.status(500).json({ message: "something went to wrong" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // if (!(email && password)) {
    //   res.status(401).json().send({ message: "invalid userlogin" });
    // } else {
      const user = await Signupschema.findOne({ email: email });
      console.log(user)
      if(!!user){
        const ispassword = await bcrypt.compare(password, user.password);
      if (!ispassword) {
        res.status(405).json({ message: "worng password try again" });
      }
      if (user && ispassword) {
        const token = jsonwebtoken.sign(
          { id: user._id, email: user.email },secreatkey,
          { expiresIn: "2h" }
        );
        user.token = token;
        console.log('efefeff', user)
        res.json(user).send({message:'log in sucsessfully'});
      }
      }else{
        res.status(401).json({ message: "user not found" });
      }
      
    // }
  } catch (err) {
    // res.status(401).json({ message: "invalid userlogin" });
  }
};
module.exports = { signup, login };
