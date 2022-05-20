const Category = require('../category/model');
const Location = require('../location/model');
const Barang = require('../barang/model');
const User = require('../login/model');

module.exports = {
	index: async (req, res) => {
		try {
			const category = await Category.countDocuments();
			const location = await Location.countDocuments();
			const barang = await Barang.countDocuments();
			const user = await User.countDocuments();

			res.render('admin/dashboard/view_dashboard', {
				name: req.session.user.name,
				title: 'Halaman Dashboard',
				count: {
					category,
					location,
					barang,
					user,
				},
			});
		} catch (err) {
			console.log();
		}
	},
};
