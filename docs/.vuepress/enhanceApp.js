import auth from './components/auth'
import Login from './components/Login'

export default ({
                    Vue,
                    options,
                    router,
                    siteData
                }) => {
    Vue.mixin({
        mounted() {

            router.beforeEach((to, from, next) => {
                if (typeof _hmt != "undefined") {
                    if (to.path) {
                        _hmt.push(["_trackPageview", to.fullPath]);
                    }
                }

                var checkAuthResult = false;
                if (this.$dlg) {
                    checkAuthResult = doCheckAuth()
                } else {
                    import('v-dialogs').then(resp => {
                        Vue.use(resp.default)
                        this.$nextTick(() => {
                            checkAuthResult = doCheckAuth()
                        })
                    })
                }

                if (checkAuthResult) {
                    next();
                }

            })

            const doCheckAuth = () => {
                var checkAuthResult = auth.checkAuth();
                if (!checkAuthResult) {
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
                return checkAuthResult;
            }

        },


    })
}