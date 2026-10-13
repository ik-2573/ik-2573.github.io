const DESIRED_WIDTH = 820;

function scaleWrapper() {
    const wrapper = document.getElementById('content-wrapper');
    const viewportWidth = document.documentElement.clientWidth;
    wrapper.style.zoom = Math.min(1, viewportWidth / DESIRED_WIDTH);
}

window.addEventListener('resize', scaleWrapper);
window.addEventListener('DOMContentLoaded', scaleWrapper);
