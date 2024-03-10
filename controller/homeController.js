import userModel from '../model/userModel.js';

const homeControlller= async(req,res)=>{
    try{
        console.log(req.body)
        res.render('index')
    }catch(error){
        console.log(error.message);
    }
}
const homeAboutControlller= async(req,res)=>{
    try{
        console.log(req.body)
        res.render('index')
    }catch(error){
        console.log(error.message);
    }
}


//user Contact Controller
const ContactUserController = async(req,res)=>{
    try{
        const data = await userModel({
            name:req.body.name,
            email:req.body.email ,
            subject:req.body.subject,
            message:req.body.message,
        })
        if(data){
        await data.save()
            console.log("User saved successfully");
        }
        res.render('index')

    }catch(error){
        console.log(error.message);
    }
}

export {homeControlller,homeAboutControlller, ContactUserController};
