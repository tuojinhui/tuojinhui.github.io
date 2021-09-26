// 侧边栏总控文件，exports各个模块的sidebar

module.exports = {
    '/java/': require('../java/sidebar'),
    '/linux/': require('../linux/sidebar'),
    '/other/': require('../other/sidebar'),
    '/vue/': require('../vue/sidebar'),
    '/wechat/': require('../wechat/sidebar')
}
