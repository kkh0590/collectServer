var server = require('./esper.server.js');
var mysqlDB = require('./esper.mysqlDB.js');
// var reqDataHandlers = require('./esper.reqDataHandlers.js');
var router = require('./esper.router.js');
var reqHandlers = require('./esper.reqHandlers.js');
//var email = require('./esper.email.js');

var reqMysqlDB = {};
reqMysqlDB['insert'] = mysqlDB.insert;

var reqHandle = {};
reqHandle['insert'] = reqHandlers.insert;

server.start(router.route, reqHandle, reqMysqlDB);
