const triggers = document.querySelectorAll('.hover-trigger');
const compositeSlice = document.querySelectorAll('.composite-slice');

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter', () => {
    compositeSlice.forEach(slice => slice.classList.remove('active'));
    const targetSection = document.getElementById(trigger.getAttribute('data-target'));
    if (targetSection) targetSection.classList.add('active');
  });

  trigger.addEventListener('click', () => {
    document.querySelectorAll('.composite-slice').forEach(s => s.classList.remove('pinned'));
    const targetSection = document.getElementById(trigger.getAttribute('data-target'));
    if (targetSection) targetSection.classList.add('pinned');
  });
});

const microCT = document.querySelector('.micro-ct');

microCT.addEventListener('mouseleave', () => {
  const pinned = document.querySelector('.composite-slice.pinned');
  if (!pinned) {
    compositeSlice.forEach(slice => slice.classList.remove('active'));
  }
});