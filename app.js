  // Get the DOM elements for the image carousel
  const wrapper = document.querySelector(".wrapper"),
    carouselContainer = document.querySelector(".carousel-container"),
    carousels = document.querySelectorAll(".carousel"),
    nextButton = document.getElementById("next"),
    prevButton = document.getElementById("prev");

  let imageIndex = 0,
    intervalId;

  // Define function to start automatic image slider
  const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalId = setInterval(() => slideImage(++imageIndex), 2000);
  };
  // Call autoSlide function on page load
  autoSlide();

  // A function that updates the carousel display to show the specified image
  const slideImage = () => {
    // Calculate the updated image index
    imageIndex = imageIndex >= carousels.length ? 0 : imageIndex < 0 ? carousels.length - 1 : imageIndex;
    // Update the carousel display to show the specified image
    carouselContainer.style.transform = `translate(-${imageIndex * 100}%)`;
  };

  // A function that updates the carousel display to show the next or previous image
  const updateClick = (e) => {
    // Stop the automatic slideshow
    clearInterval(intervalId);
    // Calculate the updated image index based on the button clicked
    imageIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imageIndex);
    // Restart the automatic slideshow
    autoSlide();
  };

  // Add event listeners to the navigation buttons
  nextButton.addEventListener("click", updateClick);
  prevButton.addEventListener("click", updateClick);

  // Add mouseover event listener to wrapper element to stop auto sliding
  wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
  // Add mouseleave event listener to wrapper element to start auto sliding again
  wrapper.addEventListener("mouseleave", autoSlide);

 document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                arrow.innerHTML = '&#9654;'; // Right arrow for folded state
            } else {
                answer.style.display = 'block';
                arrow.innerHTML = '&#9660;'; // Downward arrow for unfolded state
            }
        });
    });
});