'use strict';

const table =  ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];

function print(inputs) {
    if(!validateInputs(inputs)){
        return{success:false,error:'invalid_barcode'}
    }

    const input = buildInputs(inputs);
    const codeText = buildCodeText(input);
    
    if (!validateCheckDigit(codeText)) {
        return {success: false, error: 'check_digit_not_match'};
    }

    const codes = buildCode(codeText);
    const barcodes = buildBarcode(codes);

    return {success: true, value: barcodes};
}

function validateInputs(inputs) {
    const length = inputs.length;
    return inputs.match(/^\|[:|]+\|$/) && [32, 52].includes(length);
}

function validateCheckDigit(codeText) {
    return codeText.reduce((a, b) => a + b)% 10 === 0;
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

