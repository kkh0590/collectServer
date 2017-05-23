var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '165.132.120.150',
    user: 'root',
    password: '1q2w3e',
    database: 'sensorDataDB'
});

connection.connect(function(err) {
    if (err) {
        console.log('MySQL connection is failed.');
        console.log(err);
    } else {
        console.log('MySQL connection is success.');
    }
});

function insert(reqContents) {
    var DBRes = '';

    try {
        connection.query('INSERT INTO ?? SET ?', [reqContents.table,
            reqContents.POST
        ], function(err, tuple, result) {
            if (err) {
                console.log(err);
                DBRes = 'refusal';
            } else {
                DBRes = 'approval';
            }
        });
    } catch (err) {
        console.log(err.msg);
        DBRes = 'error'
    }
}

exports.insert = insert;
