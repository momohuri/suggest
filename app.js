express = require('express.io');
app = require('express.io')();
app.http().io();

// Broadcast the new visitor event on ready route.
app.io.route('ready', function (req) {
    req.io.broadcast('new visitor')
});


app.io.route('createSuggestion', function (req) {
    app.io.room(req.data.category).broadcast("newSuggestion", req.data);
    //todo save in db
    req.io.emit('createdSuggestionSuccess');
});


app.io.route('joinCategory', function (req) {
    req.io.join(req.data);
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/app/index.html')
});

app.use(express.static(process.cwd() + '/public'));

app.listen(7000, function () {
    console.log("started on 7000");
});



