'use strict';

describe('index.js', () => {
    
    describe('checkCurrentVal()', () => {
        it('should return the prev value', () => {
            let fn = checkCurrentVal('prev', 'curr');

            expect(fn).toEqual('prev');
        });

        it('should return the curr value', () => {
            let fn = checkCurrentVal(undefined, 'curr');

            expect(fn).toEqual('curr');
        });
    });

});