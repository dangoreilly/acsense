// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from '../package.json'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },

	routeRules: {
		// '/info/*': {ssr: true},
		// '/': {static: true},
		'/admin/login': {appMiddleware: undefined},
		'/admin/*': {appMiddleware: "auth"},
		'/admin': {redirect:'/admin/analytics'},
	},
	// css: [ "~/assets/css/style.scss"],
	modules: [
		'@nuxt/content',
		// '@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/test-utils'
	],
	// app: {
    //     head: {
    //         link: [{ rel: 'icon', type: 'image/svg', href: '/TCDSenseMapFavicon.svg' }]
    //     }
    // },
    runtimeConfig: {
        // Will be available in both server and client-side
        public: {
            // override with env var
            baseUrl: process.env.NUXT_BASE_URL || 'http://localhost:3000',
            supabaseUrl: process.env.NUXT_SUPABASE_URL,
            supabaseKey: process.env.NUXT_SUPABASE_KEY,
            version: pkg.version,
			// Set during build, contains the valid tenant information
			tenants: {}
        },
        // Only available serverside
        plausibleAPIKey: process.env.NUXT_PLAUSIBLE_KEY,
        supabaseServiceKey: process.env.NUXT_SUPABASE_SERVICE_KEY,
        superAdminEmail: process.env.NUXT_SUPER_ADMIN_EMAIL,
    },
    hooks: {
        "build:done": () => {
            console.log('TODO: Add build:done hook to init superadmin user if not exists.')
            console.log('TODO: Add build:done hook to init superadmin user if not exists.')
        }
    }
})