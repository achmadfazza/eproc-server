const mongoose = require("mongoose");

let barangSchema = mongoose.Schema({
	name: {
		type: String,
		require: [true, "Nama barang harus diisi"],
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
	},
	location: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Location",
	},
	reservationdate: {
		type: String,
	},
	endingdate: {
		type: String,
	},
	requirement: {
		type: String,
		require: [true, "Kebutuhan harus diisi"],
	},
	description: {
		type: String,
		require: [true, "Deskripsi harus diisi"],
	},
});

module.exports = mongoose.model("Barang", barangSchema);
