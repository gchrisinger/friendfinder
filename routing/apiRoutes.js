// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../app/data/friends");
// var friendsArray = require("../app/data/friendArray");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
    if (friendArray.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      friendArray.push(req.body);
      res.json(false);
    }
  });

  // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
// //   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     friendsData.length = 0;
//     friendsListData.length = 0;

//     res.json({ ok: true });
//   });
 };
