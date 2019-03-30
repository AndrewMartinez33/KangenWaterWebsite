window.addEventListener('scroll', zoomWhenInView);
window.addEventListener('load', zoomWhenInView);


function zoomWhenInView() {
  const elements = document.querySelectorAll('.hidden');
  elements.forEach(element => {
    // return object with the height and width of the element, along with its distance from the top, bottom, right, and left.
    const distances = element.getBoundingClientRect();
    // if the element exits the viewport from the top completely
    if (distances.top <= (- distances.height)) {
      if (element.classList.contains('zoom')) {
        element.classList.remove('zoom');
      }
    }

    // if the element exits the viewport from the bottom completely
    if (distances.top > ((window.innerHeight || document.documentElement.clientHeight))) {
      if (element.classList.contains('zoom')) {
        element.classList.remove('zoom');
      }
    }

    //if the element is within the boundaries of the viewport
    if (distances.top >= 0 &&
      distances.left >= 0 &&
      distances.bottom <= (window.innerHeight || document.documentElement.clientHeight) + (distances.height / 2) &&
      distances.right <= (window.innerWidth || document.documentElement.clientWidth)) {
      element.classList.add('zoom');
    }
  })
}