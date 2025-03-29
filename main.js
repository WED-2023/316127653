/**
 * Adds smooth scrolling functionality to menu links
 * Triggered when the DOM content is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Select all links in the menu
    const menuLinks = document.querySelectorAll('#menu a');
    
    // Add event listeners to each link
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();
        
        // Get target ID from href attribute
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Calculate position of the target element
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          // Scroll duration in milliseconds
          const scrollDuration = 1000;
          
          // Perform smooth scrolling
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });


/**
 * Increments the like counter when the like button is clicked
 * Updates the displayed count in the UI
 */
function incrementLikes() {
    var likes = parseInt(document.getElementById('likes-count').innerText);
    document.getElementById('likes-count').innerText = likes + 1;
}


/**
 * Updates the emoji preview when a new emoji is selected from the dropdown
 * Displays the selected emoji in the preview area
 */
function updateEmojiPreview() {
    const emoji = document.getElementById('emoji').value;
    document.getElementById('emojiPreview').textContent = emoji;
}
      
/**
 * Handles form submission for the contact form
 * Performs validation and prepares the message before submission
 */
document.getElementById('emailForm').addEventListener('submit', function(event) {
    // Check required fields
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
        
    if (!email || !subject || !message) {
      event.preventDefault();
      alert('Please fill all required fields');
      return false;
    }
        
    // Handle emoji (optional)
    const emoji = document.getElementById('emoji').value;
    const originalMessage = document.getElementById('message').value;
        
    // Only add emoji if one was selected
    if (emoji) {
      document.getElementById('message').value = originalMessage + " " + emoji;
    }
        
    // Don't display an alert here - the email server will handle confirmation
    return true;
});