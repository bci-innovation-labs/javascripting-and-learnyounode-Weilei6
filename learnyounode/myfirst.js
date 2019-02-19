const fs = require('fs');
const path = require('path');

function filterDir(directory, extension, callback){
    fs.readdir(directory, function (err,data){
        if(err){
            return callback(err,null);
        }
        let result = []
        for (var i = 0; i < data.length; i++){
            if (path.extname(data[i]).indexOf(extension) !== -1){
                result.push(data[i]);
            }
        }
        return callback(null, result);
    })
}
module.exports = filterDir;