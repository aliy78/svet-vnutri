document.querySelectorAll('.church li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const matchId = item.getAttribute('data-match');
    const matchElement = document.getElementById(matchId);
    if (matchElement) matchElement.classList.add('highlight');
  });

  item.addEventListener('mouseleave', () => {
    const matchId = item.getAttribute('data-match');
    const matchElement = document.getElementById(matchId);
    if (matchElement) matchElement.classList.remove('highlight');
  });
});
