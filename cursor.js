const canUseCustomCursor = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
).matches;

if (canUseCustomCursor) {
  const openEyesSrc = "assets/cursors/monster-eyes-open.svg";
  const closedEyesSrc = "assets/cursors/monster-eyes-closed.svg";
  const cursor = document.createElement("div");
  cursor.className = "monster-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.innerHTML = `<img src="${openEyesSrc}" alt="">`;
  document.body.append(cursor);
  document.documentElement.classList.add("has-monster-cursor");

  const cursorImage = cursor.querySelector("img");
  const closedEyesImage = new Image();
  closedEyesImage.src = closedEyesSrc;

  const blink = () => {
    cursorImage.src = closedEyesSrc;

    window.setTimeout(() => {
      cursorImage.src = openEyesSrc;

      if (Math.random() < 0.22) {
        window.setTimeout(() => {
          cursorImage.src = closedEyesSrc;
          window.setTimeout(() => {
            cursorImage.src = openEyesSrc;
            scheduleBlink();
          }, 105);
        }, 135);
      } else {
        scheduleBlink();
      }
    }, 115);
  };

  const scheduleBlink = () => {
    const delay = 2600 + Math.random() * 3200;
    window.setTimeout(blink, delay);
  };

  scheduleBlink();

  window.addEventListener(
    "pointermove",
    (event) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      cursor.classList.add("is-visible");
    },
    { passive: true }
  );

  document.documentElement.addEventListener("mouseleave", () => {
    cursor.classList.remove("is-visible");
  });

  document.documentElement.addEventListener("mouseenter", () => {
    cursor.classList.add("is-visible");
  });
}
