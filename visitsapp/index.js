const express = require('express');

const redis = require('redis');

const process = require('process');

const app = express();

const client = redis.createClient({
	host: 'redis-server',
	port: 6379
});

client.set('visits', 0);

app.get('/', (req, resp) => {
	process.exit(0);
	client.get('visits', (err, visits) => {
		resp.send('Number of visits ' + visits);
		client.set('visits', parseInt(visits) + 1);
	})
});

app.listen(8081, () => {
	console.log('Listening on 8081');
});