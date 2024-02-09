document.addEventListener("DOMContentLoaded", function() {
  var container = document.body; // 或者任何要应用主题的容器元素
  var date = new Date();
  var hour = date.getHours();

  // 假设白天是从6:00到18:00
  if (hour >= 6 && hour < 7) {
    container.className = 'day-theme';
  } else {
    container.className = 'night-theme';
  }
});
