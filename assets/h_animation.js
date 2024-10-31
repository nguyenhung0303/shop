document.querySelectorAll('.h_animation_img_service').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.animation = `var(--animation) 0.5s ease forwards`;
    });
  
    item.addEventListener('animationend', () => {
      item.style.animation = ''; // Reset animation sau khi hoàn thành
    });
  });