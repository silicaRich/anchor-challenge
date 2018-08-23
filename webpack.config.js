const HtmlWebPackPlugin = require("html-webpack-plugin");
const https=require("https");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        before: function(app){
            app.get('/tracks', function(req, res){
                var req = https.request('https://s3-us-west-2.amazonaws.com/anchor-website/challenges/bsb.json', 
                function(res2) {
                    res2.on('data', (chunk) => {
                      res.send(chunk);
                    });
                });
                req.end();
            })
        }
    },
    plugins: [htmlPlugin]
};