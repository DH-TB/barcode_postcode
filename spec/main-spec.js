const main = require('../main/main.js');

describe('print', ()=> {

    const inputs = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';

    it('can work', ()=> {

        const expectText = '45056-1234';

        spyOn(console, 'log');

        main.print(inputs);

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

describe('buildInputs', ()=> {
    const input1 = '|:|::|:|:|:||::::|:|::||::||:::|';

    const input2 = '|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
    it('build Inputs', ()=> {

        const expectText1 = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', '||:::'];

        const expectText2 = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];

        expect(main.buildInputs(input1)).toEqual(expectText1);
        expect(main.buildInputs(input2)).toEqual(expectText2);
    });
});

describe('buildCodeText', ()=> {

    const postCode1 = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', '||:::'];

    const postCode2 = [':|::|', ':|:|:', '||:::', ':|:|:', ':||::', ':::||', '::|:|', '::||:', ':|::|', '||:::'];


    it('build Code Text', ()=> {

        const expectText1 = [4, 5, 0, 5, 6, 0];
        const expectText2 = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];

        expect(main.buildCodeText(postCode1)).toEqual(expectText1);
        expect(main.buildCodeText(postCode2)).toEqual(expectText2);

    })
});

describe('buildCode', ()=> {

    const code1 = [4, 5, 0, 5, 6, 0];
    const code2 = [4, 5, 0, 5, 6, 1, 2, 3, 4, 0];


    it('build Code', ()=> {
        const expectText1 = '45056';
        const expectText2 = '450561234';

        expect(main.buildCode(code1)).toEqual(expectText1);
        expect(main.buildCode(code2)).toEqual(expectText2);
    });
});

describe('buildBarcode', ()=> {

    const barcode1 = '45056';
    const barcode2 = '450561234';


    it('build Barcode', ()=> {
        const expectText1 = '45056';
        const expectText2 = '45056-1234';

        expect(main.buildBarcode(barcode1)).toEqual(expectText1);
        expect(main.buildBarcode(barcode2)).toEqual(expectText2);
    });
});
