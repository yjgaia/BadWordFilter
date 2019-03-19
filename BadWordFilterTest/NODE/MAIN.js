BadWordFilterTest.MAIN = METHOD({
	
	run : () => {
		
		console.log(BadWordFilter.Replace({
			text : '아오 시발',
			language : 'ko'
		}));
		
		console.log(BadWordFilter.Replace({
			text : '아오 시@발',
			language : 'ko'
		}));
		
		console.log(BadWordFilter.Replace({
			text : '기영씨 발냄새',
			language : 'ko'
		}));
		
		console.log(BadWordFilter.Replace({
			text : 'What the fuck',
			language : 'en'
		}));
		
		console.log(BadWordFilter.Replace({
			text : 'WhatTheFuck',
			language : 'en'
		}));
	}
});