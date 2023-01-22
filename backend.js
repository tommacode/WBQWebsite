const express = require('express');
const app = express();

const ejs = require('ejs');
app.set('view engine', 'ejs');

//Remove x-powered-by header
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.render(__dirname + '/Pages/index.ejs');
});

app.get('/HowToHelp', (req, res) => {
    res.render(__dirname + '/Pages/HowToHelp.ejs');
});

app.get('/Statistics', (req, res) => {
    res.render(__dirname + '/Pages/Statistics.ejs');
});



app.get('/css.css', (req, res) => {
    res.sendFile(__dirname + '/css.css');
});

//Specify the folder where the images are located
app.use('/Images', express.static(__dirname + '/Images'));

app.listen(8090, () => {
    console.log('Listening on port 8090');
}
);

