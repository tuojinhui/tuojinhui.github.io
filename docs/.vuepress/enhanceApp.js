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
                let result = false;
                if (this.$dlg) {
                    result = doCheckAuth()
                } else {
                    import('v-dialogs').then(resp => {
                        Vue.use(resp.default)
                        this.$nextTick(() => {
                            result = doCheckAuth()
                        })
                    })
                }

                if (result) {
                    next();
                }

            })

            const doCheckAuth = () => {
                const result = auth.checkAuth();
                if (!result) {
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
                return result;
            }

        },


    })
}