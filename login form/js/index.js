let clickedCard = null;

function onCardClicked(e){
	const target = e.currentTarget;
	if (target === clickedCard ||
		target.className.includes('done')){
		return;
	}
	target.className = target.className
	.replace('color-hidden', '')
	.trim();
	target.className += ' done';

	console.log(target.getAttribute('data-color'));

	if (!clickedCard) {
		clickedCard = target;
	} else if (clickedCard) {
		if (
			clickedCard.getAttribute('data-color') ===
		    target.getAttribute('data-color')
		    ) {
			console.log('cards are equal')
			// clickedCard.className += ' done';
			// target.className += ' done';
			clickedCard = null;
		} else{
			console.log('cards not equal');
			setTimeout(() => {
			console.log('we are here');
			clickedCard.className = 
			clickedCard.className.replace('done', '').trim() +
			 ' color-hidden';
			target.className =
			 target.className.replace('done', '').trim() + 
			' color-hidden';
			clickedCard = null;
			}, 500);	
			}
		}

}