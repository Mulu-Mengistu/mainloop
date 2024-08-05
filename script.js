// Initialize counts
let likeCount = 0;
let shareCount = 0;
let rateCount = 0;

// Update count display
function updateCounts() {
    document.getElementById('like-count').textContent = likeCount;
    document.getElementById('share-count').textContent = shareCount;
    document.getElementById('rate-count').textContent = rateCount;
}

// Event listeners for buttons
document.getElementById('like-button').addEventListener('click', function() {
    likeCount++;
    updateCounts();
});

document.getElementById('share-button').addEventListener('click', function() {
    shareCount++;
    updateCounts();
});

document.getElementById('rate-button').addEventListener('click', function() {
    rateCount++;
    updateCounts();
});

// Handle comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;
    
    // Save comment (pseudo code; you need a backend to handle this)
    // saveComment(email, comment);

    // Display comment
    let commentsList = document.getElementById('comments-list');
    let commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${email}</strong>: <p>${comment}</p>`;
    commentsList.appendChild(commentElement);

    // Clear form
    document.getElementById('comment-form').reset();
});

// Handle subscription
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let subscribeEmail = document.getElementById('subscribe-email').value;
    
    // Notify user (pseudo code; you need a backend to handle this)
    // sendSubscriptionEmail(subscribeEmail);

    alert('Welcome to Mulufrp! Thank you for subscribing. We’ll keep you updated.');
    
    // Clear form
    document.getElementById('subscribe-form').reset();
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
// Initialize counts
let likeCount = 0;
let shareCount = 0;
let rateCount = 0;

// Update count display
function updateCounts() {
    document.getElementById('like-count').textContent = likeCount;
    document.getElementById('share-count').textContent = shareCount;
    document.getElementById('rate-count').textContent = rateCount;
}

// Event listeners for buttons
document.getElementById('like-button').addEventListener('click', function() {
    likeCount++;
    updateCounts();
});

document.getElementById('share-button').addEventListener('click', function() {
    shareCount++;
    updateCounts();
});

document.getElementById('rate-button').addEventListener('click', function() {
    rateCount++;
    updateCounts();
});

// Handle comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;
    
    // Save comment (pseudo code; you need a backend to handle this)
    // saveComment(email, comment);

    // Display comment
    let commentsList = document.getElementById('comments-list');
    let commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${email}</strong>: <p>${comment}</p>`;
    commentsList.appendChild(commentElement);

    // Clear form
    document.getElementById('comment-form').reset();
});

// Handle subscription
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let subscribeEmail = document.getElementById('subscribe-email').value;
    
    // Notify user (pseudo code; you need a backend to handle this)
    // sendSubscriptionEmail(subscribeEmail);

    alert('Welcome to Mulufrp! Thank you for subscribing. We’ll keep you updated.');
    
    // Clear form
    document.getElementById('subscribe-form').reset();
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();
