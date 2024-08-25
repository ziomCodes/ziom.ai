let comments = [];

document.getElementById('submit-comment').addEventListener('click', () => {
    const username = document.getElementById('comment-username').value;
    const comment = document.getElementById('comment-text').value;

    comments.push({ username, comment });
    alert('Comment submitted successfully!');

    displayComments();
});

function displayComments() {
    const commentsSection = document.getElementById('comments-section');
    commentsSection.innerHTML = '';

    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const usernameElem = document.createElement('h4');
        usernameElem.textContent = comment.username;
        const commentElem = document.createElement('p');
        commentElem.textContent = comment.comment;

        commentDiv.appendChild(usernameElem);
        commentDiv.appendChild(commentElem);

        commentsSection.appendChild(commentDiv);
    });
}

