BadWordFilter.Replace = METHOD({
	
	run : (params) => {
		//REQUIRED: params
		//REQUIRED: params.text
		//REQUIRED: params.language
		
		let text = params.text;
		let language = params.language;
		
		let db = BadWordFilter.DB[language];
		
		if (db !== undefined) {
			
			EACH(db, (badWord) => {
				
				let newText = '';
	
				REPEAT(language === 'en' ? Math.ceil(badWord.length / 2) : badWord.length, () => {
					newText += '♡';
				});
				
				text = text.replace(badWord, newText);
			});
		}
		
		return text;
	}
});