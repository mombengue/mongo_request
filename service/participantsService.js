const Participants = require("../models/participants");

const util = require("util");

/* Afficher tous les participants */
const getAllParticipants =  async (req, res) => {
    try {
        const participants = await Participants.find();
    
        res.send(participants);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Afficher un participant */
const getParticipantById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const participant = await Participants.find({"_id" : id});
        
        res.send(participant);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Ajouter un participant */
const setParticipant = async (req, res) => {
    try {
        await Participants.create(req.body);

        const participants = await Participants.find();
    
        res.send(participants);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Supprimer un participant */
const removeParticipant = async (req, res) => {
    try {
        const id = req.params.id

        await Participants.findOneAndDelete({"_id" : id});

        const participants = await Participants.find();
    
        res.send(participants);
        
    } catch (error) {
        console.log(error.message);
    }
};  

/* Mettre a jour un participant */
const updateParticipant = async (req, res) => {
    try {
        const id = req.params.id

        await Participants.findOneAndUpdate({"_id" : id}, { $set: { name: req.body.name }});

        const participants = await Participants.find();
    
        res.send(participants);
        
    } catch (error) {
        console.log(error.message);
    }
};

/* Afficher tous les participants/cours */
const getAllParticipantsCourses =  async (req, res) => {
    try {
        const participants = await Participants.find().populate("courses");
    
        res.send(util.inspect(participants, false, null, true /* enable colors */));
        
    } catch (error) {
        console.log(error.message);
    }
}; 

module.exports = {
    getAllParticipants,
    getParticipantById,
    setParticipant,
    removeParticipant,
    updateParticipant,
    getAllParticipantsCourses
}
