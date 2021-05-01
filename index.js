/**
 * @package Deepbackup Microservice
 * @author Ugur Cengiz
 * FTP Client that backup  for backing up
 */

 const hostname = 'Domain or Ip Adress';
 const portNumber = '21'; // 21 Usually
 const ftpUserName = 'FtpUserName';
 const ftpPassword = 'FtpPassword';
 
const ftpClient = require('ftp-client');
const fs = require('fs');

const config = {
	host: hostname,
	port: portNumber,
	user: ftpUserName,
	password: ftpPassword
};

const options = {
	logging: 'basic'
};

const client = new ftpClient(config, options);
let momentDate = new Date().toLocaleString('tr-TR').replaceAll('-', '');
fs.mkdirSync(momentDate);

client.connect(() => {
	client.download('/public_html', momentDate+'/', {
        overwrite: 'all'
    }, function (result) {
        console.log(result);
    }, function(){
    	//Logging functions here
    });
})