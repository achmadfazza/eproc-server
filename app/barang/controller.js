const Barang = require('./model');
const Category = require('../category/model');
const Location = require('../location/model');

module.exports = {
	index: async (req, res) => {
		try {
			const alertMessage = req.flash('alertMessage');
			const alertStatus = req.flash('alertStatus');

			const alert = { message: alertMessage, status: alertStatus };

			const barang = await Barang.find();
			res.render('admin/barang/view_barang', {
				barang,
				alert,
				name: req.session.user.name,
				title: 'Halaman barang',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
	viewCreate: async (req, res) => {
		try {
			const category = await Category.find();
			const location = await Location.find();

			res.render('admin/barang/create', {
				category,
				location,
				name: req.session.user.name,
				title: 'Halaman tambah barang',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
	actionCreate: async (req, res) => {
		try {
			const { name, category, location, reservationdate, requirement, description } = req.body;

			const barang = new Barang({
				name,
				category,
				location,
				reservationdate,
				requirement,
				description,
			});

			await barang.save();

			req.flash('alertMessage', 'Berhasil tambah barang');
			req.flash('alertStatus', 'success');

			res.redirect('/barang');
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
	viewEdit: async (req, res) => {
		try {
			const { id } = req.params;
			const category = await Category.find();
			const location = await Location.find();
			const barang = await Barang.findOne({ _id: id }).populate('category').populate('location');

			res.render('admin/barang/edit', {
				barang,
				category,
				location,
				title: 'Halaman edit barang',
			});
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
	actionEdit: async (req, res) => {
		try {
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
	actionDelete: async (req, res) => {
		try {
			const { id } = req.params;

			await Category.findByIdAndRemove({ _id: id });
			req.flash('alertMessage', 'Berhasil Hapus Kategori');
			req.flash('alertStatus', 'success');

			res.redirect('/barang');
		} catch (err) {
			req.flash('alertMessage', `${err.message}`);
			req.flash('alertStatus', 'danger');
			res.redirect('/barang');
		}
	},
};
