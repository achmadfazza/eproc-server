const mongoose = require('mongoose');

let supplierSchema = mongoose.Schema({
	namaSupplier: {
		type: String,
		require: [true, 'nama harus diisi'],
	},
	alamat: {
		type: String,
		require: [true, 'alamat harus diisi'],
	},
	jenisSupplier: {
		type: String,
		require: [true, 'jenis supplier harus diisi'],
	},
	npwp: {
		type: String,
		require: [true, 'npwp harus diisi'],
	},
	nik: {
		type: String,
		require: [true, 'nik harus diisi'],
	},
	noTelp: {
		type: String,
		require: [true, 'no telp harus diisi'],
	},
	email: {
		type: String,
		require: [true, 'email harus diisi'],
	},
});

module.exports = mongoose.model('Player', supplierSchema);
