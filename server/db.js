const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
	mongoose.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
		.then(() => { console.log("DB connected successfully") })
		.catch((err) => {
			console.log("DB CONNECTION ISSUES");
			console.error(err);
			process.exit(1);
		});
}


module.exports = { connect }