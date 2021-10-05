import { checkAuth } from './components/helper'
import Login from './components/Login'

export default ({
                    Vue,
                    options,
                    router,
                    siteData
                }) => {
    Vue.mixin({
        mounted() {
            const doCheck = () => {
                if (!checkAuth()) {
                    this.$dlg.modal(Login, {
                        width: 300,
                        height: 280,
                        title: '登录',
                        singletonKey: 'employee-login',
                        maxButton: false,
                        closeButton: false,
                        callback: data => {
                            if (data === true) {
                                // do some stuff after login
                            }
                        }
                    })
                }
            }

            if (this.$dlg) {
                doCheck()
            } else {
                import('v-dialogs').then(resp => {
                    Vue.use(resp.default)
                    this.$nextTick(() => {
                        doCheck()
                    })
                })
            }
        }

        // router.beforeEach((to, from, next) => {
        //     if (typeof _hmt != "undefined") {
        //         if (to.path) {
        //             _hmt.push(["_trackPageview", to.fullPath]);
        //         }
        //     }
        //     next();
        // })

    })
}