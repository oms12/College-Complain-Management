import express from "express";
import { getComplain,deleteComplain,findComplain, resolveComplain, adminHistory} from "../controller/admin.js";
// import auth for the verification
const router = express.Router();
router.get("/",getComplain);
router.post("/resolve", resolveComplain);
router.delete("/:id",deleteComplain);
router.get("/complain/:id",findComplain);
router.get("/history/:department",adminHistory);

export default router;
