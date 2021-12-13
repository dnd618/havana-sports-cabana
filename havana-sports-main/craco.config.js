const path = require("path");
module.exports = {
    webpack: {
        alias: {
            '@app' : path.resolve(__dirname, "src/"),
            '@pages' : path.resolve(__dirname, "src/Pages/"),
            '@styles' : path.resolve(__dirname, "src/Styles/"),
            '@redux' : path.resolve(__dirname, "src/Redux/"),
            '@store' : path.resolve(__dirname, "src/Redux/Store/"),
            '@reducers' : path.resolve(__dirname, "src/Redux/Reducers/"),
            '@actions' : path.resolve(__dirname, "src/Redux/Actions/"),
            '@sagas' : path.resolve(__dirname, "src/Redux/Sagas/"),
            '@constants' : path.resolve(__dirname, "src/Redux/Constants/"),
            '@middleware' : path.resolve(__dirname, "src/Redux/Middleware/"),
            '@components' : path.resolve(__dirname, "src/Components/"),
        }
    }
}