'use strict';
const fixture = ('../spec/fixture.js');

function print(inputs) {

    const barcodes = fixture.loadBarcodes();

    const input = buildInputs(inputs, barcodes);
    const postCodes = buildBarcode(input);
    const codes = buildCode(postCodes, barcodes);

    const codeText = buildCodeText(codes);
    console.log(codeText);
}

function buildInputs(inputs) {

}

function buildCodeText(codes, barcodes) {

}

function buildCode(codes) {

}

function buildBarcode(codes) {

}


module.exports = {
    print: print,
    buildInputs: buildInputs,
    buildCodeText: buildCodeText,
    buildCode: buildCode,
    buildBarcode: buildBarcode
};

