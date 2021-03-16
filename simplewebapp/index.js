const express = require('express');

const app = express();

app.get('/', (req, resp) => {
	resp.send('Hey there!');
} );

app.listen(8080, () => {
	console.log('Listening on port 8080');
});