// Function to add comments
function addComment(listId, nameId, commentId) {
    const name = document.getElementById(nameId).value;
    const comment = document.getElementById(commentId).value;
    const commentList = document.getElementById(listId);

    if (name && comment) {
        const newComment = document.createElement('li');
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.appendChild(newComment);

        // Clear input fields
        document.getElementById(nameId).value = '';
        document.getElementById(commentId).value = '';
    } else {
        alert("Please enter both your name and comment.");
    }
}

// Function to search for blog posts
function searchPosts() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const posts = document.querySelectorAll('.blog-post');
    
    posts.forEach(post => {
        const title = post.querySelector('h2').innerText.toLowerCase();
        post.style.display = title.includes(query) ? 'block' : 'none';
    });
}

