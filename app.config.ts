interface AppConfigInput {
    authURL: string
    authName: string
    appName: string
    appLogo: string
    appTagline: string
    auth: object
    meta: {
        title: string
        icon: string
    }
    breeth: {}
    startPage: string
    excludedPaths: Array
}

const defineAppConfig: AppConfigInput = {
    appName: 'The Breeth',
    appLogo: 'https://assets.infinity-api.net/builderpe/home/logo.svg',
    authName: 'thebreeth',
    startPage: '/home',
    excludedPaths: ['', 'login', 'signup', 'public'],
    appTagline: '',
    breeth: {
        loginURL: '',
        signupURL: 'https://dev-be.thebreeth.com/auth/creator/signup',
    },
    meta: {
        title: 'The Breeth',
        icon: 'https://assets.infinity-api.net/builderpe/logos/favicon.svg',
    },
    authURL: '',
    auth: '',
}
export default defineAppConfig
