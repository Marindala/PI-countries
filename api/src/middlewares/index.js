const validateActivity = (req, res, next) =>{
    const {name, difficulty, duration, season} = req.body
    if(!name) return res.status(400).send({error: "Missing name"})
    if(!/^[a-zA-Z]+$/.test(name)) return res.status(400).send({error: "The name must be contain letters"})
    if(!difficulty) return res.status(400).send({error: "Missing difficulty"})
    if(difficulty < 1 && difficulty > 5) return res.status(400).send({error: "Difficulty must be between 1 and 5"})
    if(!duration) return res.status(400).send({error: "Missing duration"})
    if(!season) return res.status(400).send({error: "Missing season"})
    if( season !== "summer" && season !== "winter" && season !== "spring" && season !== "autumn")
    return res.status(400).send({error : "Season must be summer, winter, spring or autumn"})
    next()
}

module.exports = {
    validateActivity
}