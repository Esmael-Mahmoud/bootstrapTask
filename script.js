// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Initialize popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

// Toast notification
const toastEl = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastEl)

// Show toast when form is submitted
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    toast.show()
    this.reset()
})

// Carousel
const carousel = new bootstrap.Carousel('#testimonialCarousel', {
    interval: 5000,
    wrap: true
})
