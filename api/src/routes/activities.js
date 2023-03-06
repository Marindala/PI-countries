const { Router } = require("express")
const {postActivity, getActivities , changeActivity, deleteActivity} = require("../handlers/activityHandlers")
const {validateActivity} = require ("../../src/middlewares/index")



const router = Router();


router.get("/", getActivities)

router.post("/", validateActivity, postActivity )

router.put("/:id", changeActivity)

router.delete("/:id", deleteActivity)





module.exports = router;