const { src, dest, series } = require('gulp');

function deployLayout(cb) {
    return deployMFE('src/*.*', 'public')
}

function deployEditor(cb) {
    return deployMFE('src/editor/*', 'public/editor');
}

function deployList(cb) {
    return deployMFE('src/list/*', 'public/list');
}

function deployMFE(srcPath, target){ 
    return src(srcPath)
        .pipe(dest(target));
}

exports.default = series(deployLayout, deployEditor, deployList);
exports.deployLayout = deployLayout;
exports.deployEditor = deployEditor;
exports.deployList = deployList;