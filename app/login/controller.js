const User = require('./model');
const bcrypt = require('bcryptjs');

module.exports = {
	viewSignin: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');

			const alert = { message: alertMessage, status: alertStatus };
			if (req.session.user === null || req.session.user === undefined) {
				res.render('admin/users/signin', {
					alert,
					title: 'Halaman SignIn',
				});
			} else {
				res.redirect('/dashboard');
			}
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/');
		}
	},

	actionSignin: async (req, res) => {
		try {
			const { email, password } = req.body;
			const check = await User.findOne({ email: email });

			if (check) {
				if (check.status === 'Y') {
					const checkPassword = await bcrypt.compare(password, check.password);
					if (checkPassword) {
						req.session.user = {
							id: check._id,
							email: check.email,
							status: check.status,
							name: check.name,
						};
						res.redirect('/dashboard');
						console.log('check');
						console.log(check);
					} else {
						req.flash('alertMessage', 'Kata sandi yang anda masukan salah');
						req.flash('alertStatus', 'danger');
						res.redirect('/');
					}
				} else {
					req.flash('alertMessage', 'Mohon maaf status belum aktif');
					req.flash('alertStatus', 'danger');
					res.redirect('/');
				}
			} else {
				req.flash('alertMessage', 'Email yang anda masukan salah');
				req.flash('alertStatus', 'danger');
				res.redirect('/');
			}
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/');
		}
	},

	actionLogout: (req, res) => {
		req.session.destroy();
		res.redirect('/');
	},
};
