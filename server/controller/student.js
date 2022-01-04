import express from "express";
import Complain from "../models/complain.js";

const router = express.Router();

// get request

export const getComplain = async (req,res)=>
{
    try {
        const complains = await Complain.find();
        res.status(200).json(complains);
    } catch (error) {
        console.log(error);
    }
}

// add request


export const createComplain = async (req,res)=>
{
        const complain = {
            rollno : req.body.rollno,
            title : req.body.title,
            subject : req.body.subject,
            message : req.body.message
        }
        const newComplain = new Complain(complain);
        try {
            await newComplain.save();
            res.status(201).json("added");
        } catch (error) {
            res.status(409).json({message : error.message});
        }
}

// get a particular complain with it's id
/** yha problem h ki hum id se kaise dekhe we will manage it later*/
export const findComplain = async (req,res)=>
{
    try {
        const complain = Complain.find({_id : req.params.id});
        console.log(complain);
        res.status(200).json(complain);

    } catch (error) {
        console.log(error);
    }
}

 // delete the comPlain 

export const deleteComplain= async (req,res)=>
{
    try {
       await Complain.findByIdAndDelete(req.params.id);
       res.json("deleted");
    } catch (error) {
       console.log(error);
    }
}

export default router;