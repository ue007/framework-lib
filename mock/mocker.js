const path = require('path');

const proxy = {
	'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
	'GET /api/user/list': [
		{ id: 1, username: 'kenny', sex: 6 },
		{ id: 2, username: 'kenny', sex: 6 }
	],
	'POST /api/login/account': (req, res) => {
		const { password, username } = req.body;
		console.log(req.body);
		if (password === '888888' && username === 'admin') {
			return res.send({
				status: 'ok',
				code: 0,
				token: 'sdfsdfsdfdsf',
				data: { id: 1, username: 'kenny', sex: 6 }
			});
		} else {
			return res.send({ status: 'error', code: 403 });
		}
	},
	'DELETE /api/user/:id': (req, res) => {
		console.log('---->', req.body);
		console.log('---->', req.params.id);
		res.send({ status: 'ok', message: '删除成功！' });
	},
	'POST /api/sceneData': (req, res) => {
		var fs = require('fs');
		const pat = path.resolve(__dirname, 'scene.json');
		var data = fs.readFileSync(pat, 'utf-8');
		return res.send({
			status: 'ok',
			code: 0,
			token: 'token',
			data: JSON.parse(data)
		});
	}
};
module.exports = proxy;
