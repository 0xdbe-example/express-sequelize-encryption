"use strict";

const crypto = require('crypto');

const secretKey = Buffer.from(process.env.SECRET_KEY);

function encryptData(plainText) {

    // Configuration
    let algorithm = 'aes-128-cbc';
    let initVector = crypto.randomBytes(16);
    let inputEncoding = 'utf8';
    let outputEncoding = 'base64';

     //Encryption
     let cipher = crypto.createCipheriv(algorithm, secretKey, initVector);
     let encrypted = cipher.update(plainText, inputEncoding, outputEncoding);
     encrypted += cipher.final(outputEncoding);

     return initVector.toString(outputEncoding) + "." + encrypted;

};

function decryptData(data) {

    // get data
    var cypherData = data.split('.');
    var initVector = Buffer.from(cypherData[0],"base64");
    var cipherText = cypherData[1];

    // Configuration
    let algorithm = 'aes-128-cbc';
    let inputEncoding = 'base64';
    let outputEncoding = 'utf8';
    
    // Decryption
    let decipher = crypto.createDecipheriv(algorithm, secretKey, initVector);
    let decrypted = decipher.update(cipherText, inputEncoding, outputEncoding);
    decrypted += decipher.final(outputEncoding);
    return decrypted;
};

module.exports = { encryptData: encryptData, decryptData: decryptData };