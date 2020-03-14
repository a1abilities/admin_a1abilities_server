<<<<<<< HEAD
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const { env } = require("./lib/databaseMySQL");
const mainRoute = require('./routes/mainRoute');


if (env === 'dev' || env === 'uat' || env === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'dist')));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
    app.use('/', express.static(path.join(__dirname, '..', 'src')));
    app.use('/src', express.static(path.join(__dirname, '..', 'src')));
}

app.use('/api',require('./routes/appRouting.js'));
app.use('/',mainRoute);

let port ='';

if(env === 'local'){
    port = 5000;
}else if(env === 'prod'){
    port = 3010;
}

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is running on port: ', port);    
=======
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

const { env } = require("./lib/databaseMySQL");
const mainRoute = require('./routes/mainRoute');


if (env === 'dev' || env === 'uat' || env === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'dist')));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else {
    app.use('/', express.static(path.join(__dirname, '..', 'src')));
    app.use('/src', express.static(path.join(__dirname, '..', 'src')));
}

app.use('/api',require('./routes/appRouting.js'));
app.use('/',mainRoute);

let port ='';

if(env === 'local'){
    port = 5000;
}else if(env === 'prod'){
    port = 3012;
}

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is running on port: ', port);    
>>>>>>> 1537f2cd9be855c5fbd6d2df6bc1bb0c3df764f8
});