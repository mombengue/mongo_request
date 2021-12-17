const Courses = require("../models/courses");

/* Afficher tous les courses */
const getAllCourses =  async (req, res) => {
    try {
        const courses = await Courses.find();
    
        res.send(courses);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Afficher un course */
const getCourseById = async (req, res) => {
    try {
        const id = req.params.id;
        
        const course = await Courses.find({"_id" : id});
        
        res.send(course);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Ajouter un course */
const setCourse = async (req, res) => {
    try {
        await Courses.create(req.body);

        const courses = await Courses.find();
    
        res.send(courses);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

/* Supprimer un course */
const removeCourse = async (req, res) => {
    try {
        const id = req.params.ids

        await Courses.findOneAndDelete({"_id" : id});

        const courses = await Courses.find();
    
        res.send(courses);
        
    } catch (error) {
        console.log(error.message);
    }
};  

/* Mettre a jour un course */
const updateCourse = async (req, res) => {
    try {
        const id = req.params.id

        await Courses.findOneAndUpdate(
            {"_id" : id}, 
            { $set: 
                {   
                    label: req.body.label,
                    description: req.body.description,
                    volume: req.body.volume,
                }
            }
        );

        const courses = await Courses.find();
    
        res.send(courses);
        
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    setCourse,
    removeCourse,
    updateCourse,
}