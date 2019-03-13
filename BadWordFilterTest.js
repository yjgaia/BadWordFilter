require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'BadWordFilterTest',
		isDevMode : true
	},
	
	BROWSER_CONFIG : {
		isNotConnectToServer : true
	},
	
	NODE_CONFIG : {
		// CPU 클러스터링 기능을 사용하지 않습니다.
		isSingleCoreMode : true
	}
});