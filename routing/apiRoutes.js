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

    // get the survey info (is comming in the res)
    console.log("match", req.body.scores);
    console.log(friendsData)

    var scores = req.body.scores
    var best = 0
    var bestsum = 0
    var status = 0

    console.log("friendsdata.length", friendsData.length)

    for (let i = 0; i < friendsData.length; i++) {
        var sum = 0;
        for (let j=0; j< friendsData[i].scores.length; j++){
            sum += Math.abs(parseInt(scores[j]) - friendsData[i].scores[j])

        }
      
        console.log("friend :", i, sum)

        if (status === 0){
          status = 1
          best = i
          bestsum = sum
        }

        if (sum < bestsum){
          best = i
          bestsum = sum
        }
    }
    console.log("bestMatch: ", best, friendsData[best])
    res.json([friendsData[best].name, friendsData[best].photo])

})
}
   