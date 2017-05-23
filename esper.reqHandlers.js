var crypto = require('crypto');

function insert(queryObj, reqMysqlDB, reqEmail, socket) {
    var resMessageObj, resMessageStr
    var reqContents = {};
    reqContents['table'] = 'sensor';
    reqContents['POST'] = {
        type: queryObj.type,
        name: queryObj.name,
        trial: queryObj.trial,
        accX: queryObj.accX,
        accY: queryObj.accY,
        accZ: queryObj.accZ,
        gyroX: queryObj.gyroX,
        gyroY: queryObj.gyroY,
        gyroZ: queryObj.gyroZ
    };

    reqMysqlDB.insert(reqContents);
}

// Manage membership information
exports.insert = insert;
