import express from "express";
import { getComplain, createComplain,deleteComplain,findComplain} from "../controller/student.js";
// import auth for the verification
const router = express.Router();
router.get("/",getComplain);
router.post("/add",createComplain);
router.delete("/:id",deleteComplain);
router.get("/complain/:id",findComplain);


export default router;
