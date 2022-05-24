const mongoose = require('mongoose');

let locationSchema = mongoose.Schema({
	name: {
		type: String,
		require: [true, 'Nama lokasi harus diisi'],
	},
});

module.exports = mongoose.model('Location', locationSchema);
