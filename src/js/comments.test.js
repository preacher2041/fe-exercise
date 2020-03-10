// import fetchComments from '../js/commentsModule/commentsAPI';

const fetchComments = require('./commentsModule/commentsAPI');
test("Fetches comments from API", () => {
	return fetchComments()
		.then(response => {
			expect(response).toEqual();
		});
});

// Problem getting tests to run, possibly due to the way the comments module is split up