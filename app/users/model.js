const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
	{
		email: {
			type: String,
			require: [true, 'Email harus diisi'],
		},
		name: {
			type: String,
			require: [true, 'Nama harus diiis'],
		},
		password: {
			type: String,
			require: [true, 'Kata sandi harus diisi'],
		},
		role: {
			type: String,
			enum: ['admin', 'user'],
			default: 'admin',
		},
		status: {
			type: String,
			enum: ['Y', 'N'],
			default: 'Y',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
