var path = require('path');
var fs = require('fs');
var appDir = path.dirname(require.main.filename);

module.exports = function(req, res, next) {
    //get data from post request
    var userName = req.body.user_name;
    var text = req.body.text;
    var channelName = req.body.channel_name;
    var timestamp = req.body.timestamp;

    // will display time in 10:30 format
    var formattedTime = getDate(timestamp);
    // prepare the string to save
    var toSave = "[" + formattedTime + "]" + userName + " : " + text + "\r\n";
    // get the file path to save
    var filePath = getFilePath(channelName, appDir);
    // write into the file
    writeToFile(filePath);
    // auto respond to some messages --> implement it yourself
    //respond(); --> NOT HERE (CAT bot ONLY)

    function getDate(timestamp) {
        // create a new javascript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        var date = new Date(timestamp * 1000);
        // hours part from the timestamp
        var hours = date.getHours();
        // minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // will display time in 10:30 format
        var formattedTime = hours + ':' + minutes.substr(-2);
        return formattedTime;
    }

    function getFilePath(channelName, appDir) {
        // the file name will be the cannel name with .txt extension
        var file_name = channelName + ".txt";
        // the file path will be the application_path/logs/filename
        var filePath = appDir + "/logs/" + file_name;
        return filePath;
    }

    function writeToFile(filePath) {
        //check if the file exists
        fs.exists(filePath, function(exists) {
            if (exists) {
                // if the file exists append new messages to it
                fs.appendFile(filePath, toSave, 'UTF-8', function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            } else {
                // if the file does not exist create it and write into it
                fs.writeFile(filePath, toSave, 'UTF-8', function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
            }
        });
    }
}