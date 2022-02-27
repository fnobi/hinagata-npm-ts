"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
describe('group by', () => {
    it('integrate array with prop', () => {
        const sample = [{
                age: 10,
                name: 'hoge'
            }, {
                age: 15,
                name: 'moge'
            }, {
                age: 21,
                name: 'foo'
            }, {
                age: 35,
                name: 'bar'
            }];
        const expected = new Map([
            [10, [{
                        age: 10,
                        name: 'hoge'
                    }, {
                        age: 15,
                        name: 'moge'
                    }]],
            [20, [{
                        age: 21,
                        name: 'foo'
                    }]],
            [30, [{
                        age: 35,
                        name: 'bar'
                    }]]
        ]);
        const processed = __1.groupBy(sample, ({ age }) => {
            return Math.floor(age / 10) * 10;
        });
        expect(processed).toEqual(expected);
    });
});
describe('pad left', () => {
    it('fill with 0', () => {
        expect(__1.padLeft(3, 2)).toBe('03');
        expect(__1.padLeft(10, 5)).toBe('00010');
    });
    it('will not change when over count', () => {
        expect(__1.padLeft(10, 2)).toBe('10');
        expect(__1.padLeft(100, 2)).toBe('100');
    });
    it('fill with another text', () => {
        expect(__1.padLeft(3, 2, 'x')).toBe('x3');
    });
});
//# sourceMappingURL=index.spec.js.map