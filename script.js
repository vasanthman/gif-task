document.addEventListener('DOMContentLoaded', () => {
  const gif = document.getElementById('moveableGif');
  const container = document.querySelector('.container');

  container.addEventListener('click', (event) => {
      const containerRect = container.getBoundingClientRect();
      const gifRect = gif.getBoundingClientRect();

      // Calculate the new position for the GIF
      const newLeft = event.clientX - containerRect.left - gifRect.width / 2;
      const newTop = event.clientY - containerRect.top - gifRect.height / 2;

      // Ensure the GIF stays within the container bounds
      const boundedLeft = Math.max(0, Math.min(containerRect.width - gifRect.width, newLeft));
      const boundedTop = Math.max(0, Math.min(containerRect.height - gifRect.height, newTop));

      // Move the GIF to the new position
      gif.style.transform = `translate(${boundedLeft}px, ${boundedTop}px)`;
  });
});
