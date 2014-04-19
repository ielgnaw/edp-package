/**
 * @file 获取已定义的依赖包
 * @author errorrik[errorrik@gmail.com]
 */

/**
 * 获取已定义的依赖包
 * 
 * @param {string=} importDir 导入目录
 * @return {Object}
 */
module.exports = function ( importDir ) {
    importDir = importDir || process.cwd();
    var depDir = require( './util/get-dependencies-dir' )( importDir );

    var fs = require( 'fs' );
    var path = require( 'path' );
    var data;

    var pkgFile = path.resolve( depDir, '..', 'package.json' );
    if ( fs.existsSync( pkgFile ) ) {
        data = JSON.parse( fs.readFileSync( pkgFile, 'UTF-8' ) );
        if ( data.edp && data.edp.dependencies ) {
            data = data.edp;
        }
    }
    else {
        var project = require( 'edp-project' );
        var projectInfo = project.getInfo( importDir );
        if ( projectInfo ) {
            data = project.metadata.get( projectInfo );
        }
    }

    if ( data ) {
        return data.dependencies || null;
    }
    return null;
};
