const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader/dist/index')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.ts'),
    devServer: {
        // contentBase: path.join(__dirname, './dist'),
        // /** 是否开启压缩 */
        // compress: true,
        // /** 端口号 */
        // port:3000,
        // /** 是否自动打开默认浏览器 */
        open:true
    },


    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 不编译node_modules下的文件
                loader: 'babel-loader'
            },
            {
                test:/\.tsx?$/,
                use:[
                    {
                        loader:'ts-loader',
                        options:{
                            transpileOnly: true,
                        }
                    }
                ],
                exclude:/node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }


        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 Vue 开发环境'
        }),
        // 添加 VueLoaderPlugin 插件
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],

}
