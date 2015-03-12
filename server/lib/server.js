////////
// SETUP
////////

// Import the 'express' module
var express = require('express'),
	app = express(),
	postmark = require("postmark")('f8536579-7284-4950-9e3d-977cc96332d0');
// Set the Port Number for This Server to Listen To (8080)
app.set('port', (process.env.PORT || 8080));


///////////
// MAIN CODE
///////////

// Respond to a GET Request at address 'localhost:8080/' with a message


app.get('/', function (req, res) {
  res.send('GET request to homepage');
// Respond to a GET Request at address 'localhost:5000/' with a message
app.get('/report/:data', function (req,res) {
	postmark.send({
	    "From": "bm09148n@pace.edu",
	    "To": "barakm18@gmail.com",
	    "Subject": ":)",
	    "TextBody": "STATIC TEXT",
	    "Tag": "important"
	}, function(error, success) {
	    if(error) {
	        console.error("Unable to send via postmark: " + error.message);
	       return;
	    }
	    console.info("Sent to postmark for delivery")
	});

	res.send(req.params.data);
});

app.get('/info', function (req,res) {
  res.sendfile('info.json');
});


////////////
// RUN SERVER
////////////

// Start Listening at set Port (Starts Server)
app.listen(app.get('port'), function() {
	// Outputs a Message in the Command Line When the Server Has Started Listening
	console.log("scl-alert-app is running at localhost:" + app.get('port'));
});