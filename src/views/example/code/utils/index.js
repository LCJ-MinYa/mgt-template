const handleAngleBracket = (code) => {
    code = code.replace(/<|>/g, (string) => {
        if (string === '<') {
            return '&lt';
        } else {
            return '&gt';
        }
    });
    return code;
};

export { handleAngleBracket };
