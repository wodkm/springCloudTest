const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
//遍历指定文件目录，使用多入口文件
const glob = require('glob');
var files = glob.sync(__dirname + '/modules/*.jsx');
let entries = {};
files.map((item, index) => {
    console.log(path.basename(item, '.jsx'));//获取文件名
    entries[path.basename(item, '.jsx')] = item;
});

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: entries,////指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, '../static'), // 输出的路径
        publicPath: '',//资源引用路径
        filename: 'js/[name].js'  // 打包后文件
    },
    plugins: [
        new CleanWebpackPlugin([__dirname + '/../static/js'], {
            root: path.resolve(__dirname, '../')
        }),
        new CleanWebpackPlugin([__dirname + '/../static/resources'], {
            root: path.resolve(__dirname, '../')
        }),
    ],
    resolve: {
        alias: {
            '@static': path.resolve(__dirname, '../static'),
            '@stylesheets': path.resolve('stylesheets'),
            '@images': path.resolve(__dirname, '../static/images'),
            '@components': path.resolve('components'),
            '@modules': path.resolve(__dirname, 'modules'),
            '@templates': path.resolve(__dirname, 'templates'),
            '@utils': path.resolve(__dirname, 'utils'),
        }
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-es2015', 'babel-preset-react'],
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-es2015'],
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'resources/',
                        limit: '1024',//超过1M的文件使用file-loader
                    }
                }]
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }
        ]
    }
}