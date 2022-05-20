const User = require('../login/model');

module.exports = {
	index: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');

			const alert = { message: alertMessage, alertStatus: alertStatus };

			const user = await User.find();
			res.render('admin/users/view_users', {
				user,
				alert,
				name: req.session.user.name,
				title: 'Halaman buku',
			});
		} catch (err) {
			console.log(err);
		}
	},
};
