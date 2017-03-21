const personRouter = require('express').Router();
const person = require('../models').Person;

//TO CHECK ROUTES : http://localhost:8888/api/people/

//GET REQUEST - FINDING ALL THE PEOPLE AND ONE SINGLE PERSON 

const allPeople = (req,res)=>{
	person.findAll()
	.then((data)=>{
		res.send(data)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singlePerson = (req,res)=>{
	person.findById(req.params.id)
	.then((data)=>{
		res.send(data)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

//POST REQUEST - CREATING A NEW PERSON 
const newPerson = (req,res)=>{
	person.create({favoriteCity:req.body.favoriteCity,name: req.body.name})
	.then((data)=>{
		res.send(data)
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


//PUT REQUEST - UPDATING THE PERSON'S CITY
const updateCity = (req,res)=>{
	person.findById(req.params.id)
	.then((person)=>{
		person.update({favoriteCity: req.body.city})
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


//DELETE REQUEST - DELETING ONE PERSON 
const deletePerson = (req,res)=>{
	person.destroy({where:{id:req.params.id}})
	.then((data)=>{
		res.sendStatus(200)
	})
}

personRouter.route('/')
	.get(allPeople)
	.post(newPerson)

personRouter.route('/:id')
	.get(singlePerson)
	.put(updateCity)
	.delete(deletePerson)

module.exports = personRouter; 