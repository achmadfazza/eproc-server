const Category = require('../category/model');
const Barang = require('../barang/model');
const Location = require('../location/model');

module.exports = {
	landingPage: async (req, res) => {
		try {
			const barang = await Barang.find()
				.select('_id name category location reservationdate description')
				.populate('category')
				.populate('location');

			if (!barang) {
				return res.status(404).json({ message: 'Barang tidak ditemukan.!' });
			}

			res.status(200).json({ data: barang });
		} catch (err) {
			res.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
	category: async (req, res) => {
		try {
			const category = await Category.find();

			res.status(200).json({ data: category });
		} catch (err) {
			res.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
	location: async (req, res) => {
		try {
			const location = await Location.find();

			if (!location) {
				return res.status(404).json({ message: 'Barang tidak ditemukan.!' });
			}

			res.status(200).json({ data: location });
		} catch (err) {
			res.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
};
