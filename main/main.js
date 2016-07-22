'use strict';

const table =  ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];

function print(inputs) {


    const input = buildInputs(inputs);
    const codeText = buildCodeText(input);
    const codes = buildCode(codeText);
    const barcodes = buildBarcode(codes);

    console.log(barcodes);
}

function buildInputs(inputs) {
  return inputs.slice(1,-1).match(/.{1,5}/g);
}

function buildCodeText(codes) {
    return codes.map(str => table.indexOf(str));
}

function buildCode(codeText) {
    return codeText.join('').slice(0,-1);
}


function buildBarcode(codes) {
    if (codes.length === 9) {
        return `${codes.slice(0, 5)}-${codes.slice(5)}`;
    }
    return codes;
}

module.exports = {
    print: print,
    buildInputs: buildInputs,
    buildCodeText: buildCodeText,
    buildCode: buildCode,
    buildBarcode: buildBarcode
};

