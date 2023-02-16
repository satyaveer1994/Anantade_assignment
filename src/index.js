

import aws from "aws-sdk";
import express from "express";
import bodyParser from "body-parser";
const app = express()


app.use(bodyParser.json());


app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});