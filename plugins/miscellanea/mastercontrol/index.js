'use strict';

var libQ = require('kew');
var fs=require('fs-extra');
var config = new (require('v-conf'))();
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
var fs = require('fs');
var file = require('/data/plugins/miscellanea/mastercontrol/config.json');
var serial_port_config = file.SERIALPORTDEVICE.value

module.exports = mastercontrol;
function mastercontrol(context) {
	var self = this;
	this.context = context;
	this.commandRouter = this.context.coreCommand;
	this.logger = this.context.logger;
	this.configManager = this.context.configManager;
}

mastercontrol.prototype.onVolumioStart = function()
{
	var self = this;
    return libQ.resolve();
}

mastercontrol.prototype.onStart = function() {
    var self = this;
	var defer=libQ.defer();
	defer.resolve();
    return defer.promise;
};

mastercontrol.prototype.onStop = function() {
    var self = this;
    var defer=libQ.defer();
    defer.resolve();

    return libQ.resolve();
};

mastercontrol.prototype.onRestart = function() {
    var self = this;
};

mastercontrol.prototype.SendCommand = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
};

mastercontrol.prototype.SendTape1 = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py NUMone /dev/${serial_port_config}`);
};

mastercontrol.prototype.SendTape2 = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py NUMtwo /dev/${serial_port_config}`);
};

mastercontrol.prototype.LowBassPlus = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py bassplus /dev/${serial_port_config}`);
};

mastercontrol.prototype.LowBassMinus = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py bassminus /dev/${serial_port_config}`);
};

mastercontrol.prototype.SPEAKER1 = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py NUMOne /dev/${serial_port_config}`);
};

mastercontrol.prototype.SPEAKER2 = function (commanddata) {
    const { exec } = require('child_process');
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py ${commanddata} /dev/${serial_port_config}`);
    exec(`python3 /data/plugins/miscellanea/mastercontrol/BSC.py NUMTwo /dev/${serial_port_config}`);
};


mastercontrol.prototype.saveSettings = function (data) {
    var self = this;
    var defer = libQ.defer();
    file.SERIALPORTDEVICE.value = data.SERIAL_PORT;
    fs.writeFileSync('/data/plugins/miscellanea/mastercontrol/config.json', JSON.stringify(file));
    self.commandRouter.pushToastMessage('success',"Set new Serial-Hardware:", data.SERIAL_PORT);//serial_port_config);
    serial_port_config = data.SERIAL_PORT;
    defer.resolve();
    return defer.promise;     
};

// Configuration Methods -----------------------------------------------------------------------------

mastercontrol.prototype.getUIConfig = function() {
    var defer = libQ.defer();
    var self = this;

    var lang_code = this.commandRouter.sharedVars.get('language_code');

    self.commandRouter.i18nJson(__dirname+'/i18n/strings_'+lang_code+'.json',
        __dirname+'/i18n/strings_en.json',
        __dirname + '/UIConfig.json')
        .then(function(uiconf)
        {


            defer.resolve(uiconf);
        })
        .fail(function()
        {
            defer.reject(new Error());
        });

    return defer.promise;
};

mastercontrol.prototype.getConfigurationFiles = function() {
	return ['config.json'];
}

mastercontrol.prototype.setUIConfig = function(data) {
	var self = this;
	//Perform your installation tasks here
};

mastercontrol.prototype.getConf = function(varName) {
	var self = this;
	//Perform your installation tasks here
};

mastercontrol.prototype.setConf = function(varName, varValue) {
	var self = this;
	//Perform your installation tasks here
};
