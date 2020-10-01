
var mongoose = require("mongoose");

const schema = mongoose.Schema({
    createdAt: { type: Date, default: new Date() },
    logInfo: { type: Object, required: true },
    logMessage: { type: String, required: true },
    logType: {
        type: String, 
        required: true,
        enum: ['INFO', 'ERROR', 'DEBUG'],
    }
})



module.exports = mongoose.model("beansLogs", schema, "beansLogs");
