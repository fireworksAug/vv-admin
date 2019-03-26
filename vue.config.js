const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/root/' : '/'

module.exports = {
    lintOnSave: false,
    publicPath: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src"));
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]',
            })
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/icons'))
        config.module
            .rule('images')
            .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },
    productionSourceMap: false, // 打包不生成map文件
    devServer: {
        // port: 9099,
        // host: 'localhost',
        // https: false,
        // hotOnly: false,
        // before: app => {}
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'/'
                }
            }
        }
    }
}
