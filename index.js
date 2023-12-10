function scrollToTarget(targetId) {
    const targetSection = document.querySelector(`#${targetId}`);
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // or 'end' to scroll to the bottom of the target
        inline: 'nearest', // or 'center' to scroll to the center of the target
    });
}
// JavaScript code to handle comments

document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-section');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('exampleFormControlInput1').value;
        const email = document.getElementById('exampleFormControlInput2').value;
        const commentText = document.getElementById('exampleFormControlTextarea1').value;

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <strong>${name} (${email}):</strong><br>
            ${commentText}
        `;

        // Append the comment to the comments list
        commentsList.appendChild(commentElement);

        // Clear the form
        document.getElementById('exampleFormControlInput1').value = '';
        document.getElementById('exampleFormControlInput2').value = '';
        document.getElementById('exampleFormControlTextarea1').value = '';
    });
});
