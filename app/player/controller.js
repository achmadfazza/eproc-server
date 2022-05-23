const Category = require('../category/model');

module.exports = {
	category: async (req, res) => {
		try {
			const category = await Category.find();

			res.status(200).json({ data: category });
		} catch (err) {
			req.status(500).json({ message: err.message || 'Internal Server Error' });
		}
	},
};
