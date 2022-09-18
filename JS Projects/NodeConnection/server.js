const { info } = require('console')
var http = require('http')

http.createServer(function(req, res)
{
var route = req.url

if(route==='/')
{
    res.end('This is information from backend to home page')

}

if(route==='/getusernames')
{
    var username =['messi', 'ronaldo', 'rohit']
    res.end(JSON.stringify(username))
}
  
    console.log('My node js server started successfully in prot 5000')
}).listen(5000)