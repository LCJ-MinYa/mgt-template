const global = {
    methods: {
        handleCode(code, isExecute = false) {
            return isExecute ? new Function(code)() : code;
        },
    },
};

export default global;
