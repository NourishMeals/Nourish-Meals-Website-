document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.createElement('div');
  const testimonials = document.querySelectorAll(".testimonial");
  const container = document.querySelector(".testimonial-container");

  // Wrap all testimonials in a wrapper div
  wrapper.className = "testimonial-wrapper";
  testimonials.forEach(t => wrapper.appendChild(t));
  container.insertBefore(wrapper, container.querySelector(".testimonial-arrow.right"));

  let currentIndex = 0;
  const visibleCount = 3;

  window.updateCarousel = function () {
    const shift = -(currentIndex * (100 / visibleCount));
    wrapper.style.transform = `translateX(${shift}%)`;
  };

  window.nextTestimonial = function () {
    if (currentIndex < testimonials.length - visibleCount) {
      currentIndex++;
      updateCarousel();
    }
  };

  window.prevTestimonial = function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  };

  updateCarousel();
});
