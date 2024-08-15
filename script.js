function redirect(pageId) {
  window.location.href = pageId;
}

function openLinkedIn() {
  window.open("https://www.linkedin.com/in/claudio-soto-66389a24b/", "_blank");
}

function openGitHub() {
  window.open("https://github.com/claudioS-dev/", "_blank");
}

function openWhatsApp() {
  window.open("https://api.whatsapp.com/send?phone=56932158831", "_blank");
}

// animated-background.js
document.addEventListener("DOMContentLoaded", () => {
  const interBubble = document.querySelector(".interactive");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
