
// const likeBtn1 = document.getElementById('btn1');
// const likeCount1 = document.getElementById('likeCount1');
// let count1 = 0;

// const likeBtn2 = document.getElementById('btn2');
// const likeCount2 = document.getElementById('likeCount2');
// let count2 = 0;

// // Event listener for Button 1
// likeBtn1.addEventListener('click', () => {
//     count1++; // Increment count for button 1
//     likeCount1.textContent = count1; // Update the like count display
// });

// Event listener for Button 2
// likeBtn2.addEventListener('click', () => {
//     count2++; // Increment count for button 2
//     likeCount2.textContent = count2; // Update the like count display
// });

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select the like button and the like count span
    const likeButton = document.getElementById("btn2");
    const likeCount = document.getElementById("likeCount2");

    // Retrieve the stored like count from localStorage (if any)
    let count = localStorage.getItem("likeCount2") || 0;
    likeCount.textContent = count; // Display the stored count

    // Add click event listener to the like button
    likeButton.addEventListener("click", function () {
        count++; // Increment the count
        likeCount.textContent = count; // Update the displayed count
        localStorage.setItem("likeCount2", count); // Store the updated count in localStorage
    });
});
