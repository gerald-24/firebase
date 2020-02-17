//file under plugins
import { mapState, mapMutations } from 'vuex'
 
const myPlugins = {
    install(Vue){
        Vue.mixin({
            data: () => ({
                api: process.env.VUE_APP_URL,
                signUp: false,
            }),
            computed: {
                ...mapState([
                    'userInfo',
                    'showFab',
                    
                ])
            },
            methods: {
                ...mapMutations([
                    'CHANGE_USER_INFO',
                    'ShowFab',
                    'CHANGE_ACCOUNT_DETAILS'
                ])
            }
        })
    }
}
 
export default myPlugins