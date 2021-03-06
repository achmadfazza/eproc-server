const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const HASH_ROUND = 10;

let supplierSchema = mongoose.Schema(
	{
		email: {
			type: String,
			require: [true, "email harus diisi"],
		},
		name: {
			type: String,
			require: [true, "email harus diisi"],
			maxlength: [225, "panjang nama harus antara 3 - 225 karakter"],
			minlength: [3, "panjang nama harus antara 3 - 225 karakter"],
		},
		username: {
			type: String,
			require: [true, "nama harus diisi"],
			maxlength: [225, "panjang nama harus antara 3 - 225 karakter"],
			minlength: [3, "panjang nama harus antara 3 - 225 karakter"],
		},
		password: {
			type: String,
			require: [true, "kata sandi harus diisi"],
			maxlength: [225, "panjang password - 225 karakter"],
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "admin",
		},
		status: {
			type: String,
			enum: ["Y", "N"],
			default: "Y",
		},
	},
	{ timestamps: true }
);

supplierSchema.path("email").validate(
	async function (value) {
		try {
			const count = await this.model("Suplier").countDocuments({ email: value });
			return !count;
		} catch (err) {
			throw err;
		}
	},
	(attr) => `${attr.value} sudah terdaftar`
);

supplierSchema.pre("save", function (next) {
	this.password = bcrypt.hashSync(this.password, HASH_ROUND);
	next();
});

module.exports = mongoose.model("Player", supplierSchema);
