// Define consts to be used such as Selectors
const SELECTORS = {
	COMMENTS_CONTAINER: '.js-comments-container',
};

// Define elements to be used.
const $commentsContainer = document.querySelector(SELECTORS.COMMENTS_CONTAINER);

const renderComments = (sortedComments) => {
	// Remove any existing comments from the comment container
	$commentsContainer.innerHTML = '';
	
	// Use ES6 map function to loop through comments array (passed as a parameter)
	sortedComments.map(comment => {
		
		// Sanitise ISO date string to more readable time and date format
		const date = new Date(comment.date).toLocaleString('en-gb',{
			day: 'numeric',
			month: 'short',
			year: 'numeric'});
		const time = new Date(comment.date).toLocaleString('en-gb',{
			hour12:true,
			hour:'numeric',
			minute:'numeric'});
		// concat date and time together to create readable date strinf
		const newDate = `${date} ${time}`;
		
		// Use string literals to create new HTML element, passing comment variables in
		const commentBlockString = `<header class='comment-block__header'>
										<span class='comment-block__username'>${comment.name}</span>
										<time class='comment-block__date'>${newDate}</time>
										<span class='comment-block__likes'>${comment.likes} Likes</span>
									</header>
									<p class='comment-block__body'>${comment.body}</p>`;
		
		let commentBlockElement = document.createElement('article'); // Create new element to hold comment
		commentBlockElement.setAttribute('class', 'comment-block'); // Add class to new element
		commentBlockElement.innerHTML = commentBlockString.trim(); // Add comment string to new element and convert it to valid html
		
		$commentsContainer.appendChild(commentBlockElement) // Append new comment block to DOM
	})
};

export default renderComments;