const fs = require('fs');
const path = require('path');
module.exports = {
    function readContent() {
        return fs.readFileSync(path.join(__dirname, '../flat.js'));
    }
};

