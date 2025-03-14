const { autoPassword } = require('../middleware/autoPassword'); // Destructure the function
const nodemailer = require("nodemailer");
const costumerModel = require("../model/model")

const costumerRegistration = async (req, res) => {
    const { name, email, number, date, address, city, state } = req.body;
    console.log(req.body); // Fix typo: res.body -> req.body

    const myPass = autoPassword(); // Call the function directly
    const data = await costumerModel.create({
        name:name,
        email:email,
        date:date,
        city:city,
        state:state,
        number:number,
        address:address,
        password:myPass
    })


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hr6014158@gmail.com", // Fix email address
            pass: "hjpq juuv htrt xkwp", // Ensure this is the correct app password
        },
    });

    let maildetails = {
        from: "hr6014158@gmail.com", // Fix email address
        to: email,
        subject: "E-Banking registration",
        text: `Dear ${name}, your Account successfully created \n Your password is ${myPass}`,
    };

    transporter.sendMail(maildetails, (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent successfully");
            res.send("OK");
        }
    });
};
const costumerLogin = async(req ,res) => {
    let {email, password} = req.body
    const data = await costumerModel.findOne({email: email})
    try {
        if(!data)
        {
            return res.status(400).send("invalid email")
        }
        if(data.password !=password)
        {
            return res.status(400).send("invalid password")
        }
        res.status(200).send(data)

    } catch (error) {
       res.status(400).send(error) 
    }
   
}

module.exports = {
    costumerRegistration,
    costumerLogin
};