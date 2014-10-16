#!/usr/bin/env node

var esl = require('modesl'),
//open a connection
conn = new esl.Connection('127.0.0.1', 8021, 'ClueCon', function() {
    conn.api("conference list", function(res) {
      console.log(res.getBody());
    })
    //send the status api command
    conn.events('plain', 'all', function(res) {
        //log result body and exit
        console.log("got: \n" + res.getBody());
    });
});

console.log("Listening for events.");

conn.on('esl::event::**', function(e) {
  console.log(e);
});

