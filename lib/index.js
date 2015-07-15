module.exports = function(req, res, next) {
  res.html = function(options) {
    this.setHeader('content-type', "text/html")
    var html = ''
    this.end(html)
  }
  next()
}