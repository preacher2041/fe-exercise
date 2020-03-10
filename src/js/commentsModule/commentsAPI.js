
// define the url for the comments api
const commentsAPIUrl = 'https://my-json-server.typicode.com/telegraph/front-end-exercise-contractors/comments';

// define sorting methods to be used when fetching comments
const SORT_METHOD = {
	'likes': (resultA, resultB) => {
		return parseInt(resultA.likes) - parseInt(resultB.likes)
	},
	'newest': (resultA, resultB) => {
		return new Date(resultA.date).getTime() - new Date(resultB.date).getTime()
	}
};

// Fetch comments function
const fetchComments = (sortType) => {
	const sortFunction = SORT_METHOD[sortType] || SORT_METHOD.NONE; // Get sort value from parameter and use it to define which sort method to run
	
	// JS Fetch in order to get comments from API.
	return fetch(commentsAPIUrl)
		.then(response => response.json())
		.then(data => {
			// Use ES6 destructuring in order not to mutate our original data,
			return [...data].sort(sortFunction);
		})
};

export default fetchComments;