const mongoose = require('mongoose');

const participantsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },


    courses : [
        {
            type : mongoose.SchemaTypes.ObjectId,
            ref: "Courses",
        }
    ]


   /*  lastname : {
        type : String,
        required : true,
    },

    birthDate : {
        type : Date,
        required : true,
    },

    address : {
        type : String,
        required : true,
    },
 */
});

const participantsModel = mongoose.model('Participants', participantsSchema);
module.exports = participantsModel;