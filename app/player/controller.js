const Category = require('../category/model');
const Barang = require('../barang/model');

module.exports = {
	category: async (req, res) => {
		try {
			const category = await Category.find();

			res.status(200).json({ data: category });
		} catch (err) {
			res.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
	landingPage: async (req, res) => {
		try {
			const barang = await Barang.find();

			if (!barang) {
				return res.status(404).json({ message: 'Barang tidak ditemukan.!' });
			}

			res.status(200).json({ data: barang });
		} catch (err) {
			res.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
};
