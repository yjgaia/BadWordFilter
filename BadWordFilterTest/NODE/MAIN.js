BadWordFilterTest.MAIN = METHOD({
	
	run : () => {
		
		console.log(BadWordFilter.Replace({
			text : '아오 시발',
			language : 'ko'
		}));
		
		console.log(BadWordFilter.Replace({
			text : 'What the fuck',
			language : 'en'
		}));
	}
});