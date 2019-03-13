require(process.env.UPPERCASE_PATH + '/LOAD.js');

INIT_OBJECTS();

let enDB = READ_FILE({
	path : 'DB/EN',
	isSync : true
}).toString().trim().split('\r\n');

enDB.sort((a, b) => {
	return b.length - a.length;
});

let jaDB = READ_FILE({
	path : 'DB/JA',
	isSync : true
}).toString().trim().split('\r\n');

jaDB.sort((a, b) => {
	return b.length - a.length;
});

let koDB = READ_FILE({
	path : 'DB/KO',
	isSync : true
}).toString().trim().split('\r\n');

koDB.sort((a, b) => {
	return b.length - a.length;
});

let zhDB = READ_FILE({
	path : 'DB/ZH',
	isSync : true
}).toString().trim().split('\r\n');

zhDB.sort((a, b) => {
	return b.length - a.length;
});

WRITE_FILE({
	path : 'BadWordFilter/COMMON/DB.js',
	isSync : true,
	content : 'BadWordFilter.DB = {\n	en : ' + JSON.stringify(enDB) + ',\n	ja : ' + JSON.stringify(jaDB) + ',\n	ko : ' + JSON.stringify(koDB) + ',\n	zh : ' + JSON.stringify(zhDB) + '\n};'
});
