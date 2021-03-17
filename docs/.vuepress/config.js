module.exports = {
    base: '/',
    title: '笔记记录',
    description: '笔记记录',
    head: [],
    host: '0.0.0.0',
    port: 8080,
    temp: '',
    dest: '.vuepress/dist',
    locales: {'/': {lang: 'zh-CN',},},
    cache: true,
    extraWatchFiles: [],
    patterns: ['**/*.md', '**/*.vue'],
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        lastUpdated: '上次更新 ',
        docsDir: 'docs',
        repo: 'https://github.com/tuojinhui/tuojinhui.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'master',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {updatePopup: true},
    },
    devServer: {
        open: true
    },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).add(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
            },
        },],
        ['@vuepress/medium-zoom'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: '有新内容更新啦~',
                buttonText: '立即获取新内容'
            }
        }],
        ['vuepress-plugin-code-copy', true]
    ]
}
