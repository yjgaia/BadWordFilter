BadWordFilter.Replace = METHOD({
	
	run : (text) => {
		
		EACH(BadWordFilter.DB.split('\n'), (badWord) => {
			
			let newText = '';

			REPEAT(badWord.length, () => {
				newText += '♡';
			});
			
			text = text.replace(badWord, newText);
		});
		
		return text;
	}
});