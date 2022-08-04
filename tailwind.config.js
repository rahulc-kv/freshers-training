module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            borderWidth: {
                '1': '1px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
