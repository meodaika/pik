const express = require('express');

const app = express();

app.get('/', (req, res) => {
	            res.send('Bac lai danh cho quan dit lennn');
});

app.listen(3000, () => {
	console.log('server run at port 3000');
});
