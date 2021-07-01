const express = require('express');

const app = express();

app.get('/', (req, res) => {
	            res.send('1gi');
});

app.listen(3000, () => {
	console.log('server run at port 3000');
});
