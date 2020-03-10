import fetchComments from './commentsAPI';
import renderComments from './commentsRender';

const comments = () => {
	
	// Define constants that will be used such as JS selectors, CSS Classes and Events
	const SELECTORS = {
		LIKES_BUTTON: '.js-likes-button',
		NEWEST_BUTTON: '.js-newest-button'
	};
	
	const CLASSES = {
		ACTIVE_BUTTON_CLASS: 'comments-list__button--selected'
	};
	
	const EVENTS = {
		CLICK: 'click'
	};
	
	
	// Define elements that will be used
	const $likesButton = document.querySelector(SELECTORS.LIKES_BUTTON);
	const $newestButton = document.querySelector(SELECTORS.NEWEST_BUTTON);
	
	// Initialise click handlers
	$likesButton.addEventListener(EVENTS.CLICK, (event) => {
		event.preventDefault();
		
		if (event.currentTarget.classList.contains(CLASSES.ACTIVE_BUTTON_CLASS)) {
			
			// Promise to fetch comments, sorting is done when comments are 'fetched' based on parameter, button styles
			// active state is toggled on and off
			fetchComments()
				.then(sortedComments => renderComments(sortedComments));
			event.currentTarget.classList.remove(CLASSES.ACTIVE_BUTTON_CLASS);
		} else {
			fetchComments('likes')
				.then(sortedComments => renderComments(sortedComments));
			event.currentTarget.classList.add(CLASSES.ACTIVE_BUTTON_CLASS);
		}
	});
	
	// Second click handler for other sort button
	$newestButton.addEventListener(EVENTS.CLICK, (event) => {
		event.preventDefault();
		if (event.currentTarget.classList.contains(CLASSES.ACTIVE_BUTTON_CLASS)) {
			fetchComments()
				.then(sortedComments => renderComments(sortedComments));
			event.currentTarget.classList.remove(CLASSES.ACTIVE_BUTTON_CLASS);
		} else {
			fetchComments('newest')
				.then(sortedComments => renderComments(sortedComments));
			event.currentTarget.classList.add(CLASSES.ACTIVE_BUTTON_CLASS);
		}
	});
	
	//TODO refactor event listeners to reduce lines of code and make it easier see whats happening. Move code to new
	// function and pass sort type in as parameter and
	
	// Initial fetch for comments.
	fetchComments()
		.then(sortedComments => renderComments(sortedComments));
};

export default comments;