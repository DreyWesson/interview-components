[👉] install express @babel/preset-env @babel/preset-react @babel-register
[👉] require @babel/...and config in index.js file and require server.js
[👉] setup express server in the server.js
[👉] require fs and path from node
[👉] fs.readFile(path.resolve(${"index.htm path"}),"utf-8", (err,data)=> {
if (err) {
console.log("Some err occurred");
return res.statusCode(500).send("Some err occurred")
}

    const html = ReactDOMServer.renderToString(
    	<StaticRouter><App/></StaticRouter>
    )
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))

})
