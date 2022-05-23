const Transaction = require('./model');
const Category = require('../category/model');

module.exports = {
	index: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');

			const alert = { message: alertMessage, status: alertStatus };

			res.render('admin/transaction/view_transaction', {
				alert,
				name: req.session.user.name,
				title: 'Halaman Transaksi',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/transaction');
		}
	},
};
