const mongoose = require('mongoose');

let transactionSchema = mongoose.Schema({
	historyProcurement: {
		idBarang: { type: String, require: [true] },
		namaBarang: { type: String, require: [true, 'nama barang harus diisi'] },
		idSupplier: { type: String, require: [true] },
		namaSupplier: { type: String, require: [true, 'nama supplier harus diisi'] },
		alamat: { type: String, require: [true, 'alamat harus diisi'] },
		jenisSupplier: { type: String, require: [true, 'jenis supplier harus diisi'] },
		noTelp: { type: Number, require: [true, 'no telephone harus diisi'] },
		email: { type: String, require: [true, 'email harus diisi'] },
	},
});

module.exports = mongoose.model('Transaction', transactionSchema);
