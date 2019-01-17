const express = require("express");
const router = express.Router();

const jar = require("../../models/jarDatabase")

//Get api/jar
//get all information for a jar
router.get('/', (req, res) => {
	jar.find()
	.then(jarDatabase => res.json(jarDatabase))
})

router.post('/', (req, res) => {
	const newJar = new Jar({
		name: req.body.name,
		paperclipsIn: req.body.paperclipsIn,
		paperclipsOut: req.body.paperclipsOut
	});
	newJar.save().then(user => res.json(jarDatabase));
})

module.exports = router;