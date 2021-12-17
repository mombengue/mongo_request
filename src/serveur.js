const DBService = require("../service/DBService")
const participantsService = require("../service/participantsService")
const coursesService = require("../service/coursesService")

const HOST = "http://localhost"
const PORT = 3030;

const express = require('express');

app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

DBService.dbconnect();

/* All request participants */
app.get('/participants', participantsService.getAllParticipants); 

app.get('/participants/:id', participantsService.getParticipantById); 

app.post('/participants', participantsService.setParticipant); 

app.delete('/participants/:id', participantsService.removeParticipant); 

app.patch('/participants/:id', participantsService.updateParticipant); 

app.get('/participants/courses', participantsService.getAllParticipantsCourses); 


/* All request courses */
app.get('/courses', coursesService.getAllCourses); 

app.get('/courses/:id', coursesService.getCourseById); 

app.post('/courses', coursesService.setCourse); 

app.delete('/courses/:id', coursesService.removeCourse); 

app.patch('/courses/:id', coursesService.updateCourse); 


app.listen(PORT, function () {
    console.log(`Server listening  on ${HOST}:${PORT}`)
});










