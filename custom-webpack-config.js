const webpack = require('webpack')

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            $ENV: {
                FIREBASE_API_KEY : JSON.stringify(process.env.FIREBASE_API_KEY)
            }
        })
    ]
}