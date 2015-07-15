# express-res-html
res.html() middlewire

## Get-started

    var app = express()
    app.use(require('express-res-html'))

    app.route('/').get(function(req, res){

        res.html({
            doctype: 'html5',
            title: "HOME",
            js: ['http://code.jquery.com/jquery.min.js'],
            css: ['/assets/app.css'],
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content:""}
            ],
            body: {
                id: null,
                class: null,
                childNodes: ""
            }
        })

    })

