module.exports = exports = {
    port: "4000",
    theme: "basic",
    languages: [
        {
            "code": "es-es",
            "relative_url_prefix": "/es/"
        },
        {
            "code": "en-us",
            "relative_url_prefix": "/"
        },
        {
            "code": "fr-fr",
            "relative_url_prefix": "/fr/"
        }
    ],
    security: {
        frameguard: false
    },
    plugins: {},
    contentstack: {
        api_key: "",
        access_token: ""
    }
};