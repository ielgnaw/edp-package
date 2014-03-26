describe('util', function(){
    it('get-dependencies-info', function(){
        var getDependenciesInfo = require('../lib/util/get-dependencies-info');

        expect( getDependenciesInfo({}) ).toEqual( {} );

        var defDeps = { a: '1.0.0', b: '2.0.0', c:'3.x', d: '~1.0'};
        var edpDeps = { e: '2.0.0', d: '2.0', p:'5.x', hy: '~2.0'};
        expect( getDependenciesInfo({
            dependencies: defDeps
        }) ).toBe( defDeps );
        expect( getDependenciesInfo({
            dependencies: defDeps,
            edp:{}
        }) ).toBe( defDeps );
        expect( getDependenciesInfo({
            dependencies: defDeps,
            edp:{ dependencies: edpDeps }
        }) ).toBe( edpDeps );
    });
});