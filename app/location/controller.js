const Location = require('./model');

module.exports = {
	index: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');

			const alert = { message: alertMessage, status: alertStatus };

			const location = await Location.find();
			res.render('admin/location/view_location', {
				location,
				alert,
				name: req.session.user.name,
				title: 'Halaman Lokasi',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},

	viewCreate: async (req, res) => {
		try {
			res.render('admin/location/create', { name: req.session.user.name, title: 'Halaman Lokasi' });
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},

	actionCreate: async (req, res) => {
		try {
			const { name } = req.body;
			let location = await Location({ name });
			await location.save();

			req.flash('alertMessage', 'Berhasil Tambah Lokasi');
			req.flash('alertStatus', 'success');

			res.redirect('/location');
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},

	viewEdit: async (req, res) => {
		try {
			const { id } = req.params;

			const location = await Location.findOne({ _id: id });

			res.render('admin/location/edit', {
				location,
				name: req.session.user.name,
				title: 'Halaman ubah lokasi',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},

	actionEdit: async (req, res) => {
		try {
			const { id } = req.params;
			const { name } = req.body;

			await Location.findByIdAndUpdate({ _id: id }, { name });
			req.flash('alertMessage', 'Berhasil Ubah Lokasi');
			req.flash('alertStatus', 'success');

			res.redirect('/location');
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},
	actionDelete: async (req, res) => {
		try {
			const { id } = req.params;

			await Location.findByIdAndRemove({ _id: id });
			req.flash('alertMessage', 'Berhasil Hapus Lokasi');
			req.flash('alertStatus', 'success');
			res.redirect('/location');
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/location');
		}
	},
};
