const faviconLink = document.querySelector("#animated-favicon");

if (faviconLink) {
  const logoColor = "#010101";
  const waveAngles = [0, -28, 24, -22, 18, -14, 10, -6, 0];
  const frameDuration = 180;
  const restingDuration = 10000;
  let restTimer;
  let waveTimer;

  const logoPaths = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M158.314 358L158.314 -1.52591e-06L193.223 0L193.223 358L158.314 358Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M44.3425 213L308.343 213L308.343 248L44.3425 248L44.3425 213Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M175.903 223.32L326.897 72.3261L351.251 96.6799L200.257 247.674L175.903 223.32Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3538 72.3271L175.347 223.321L150.994 247.675L-3.42004e-05 96.6809L24.3538 72.3271Z"/>
  `;

  const faviconSvg = (color, angle = 0) => {
    const svg = `
      <svg width="512" height="538" viewBox="0 0 512 538" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="480" height="506" rx="88" fill="#F2F2F2"/>
        <g fill="${color}" transform="translate(80 90) rotate(${angle} 176 358)">
          ${logoPaths}
        </g>
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  };

  const setStaticFavicon = () => {
    faviconLink.href = faviconSvg(logoColor, 0);
  };

  const scheduleWave = () => {
    window.clearTimeout(restTimer);
    restTimer = window.setTimeout(startWave, restingDuration);
  };

  const startWave = () => {
    const frames = waveAngles.map((angle) =>
      faviconSvg(logoColor, angle)
    );
    let frameIndex = 0;

    const showNextFrame = () => {
      faviconLink.href = frames[frameIndex];
      frameIndex += 1;

      if (frameIndex < frames.length) {
        waveTimer = window.setTimeout(showNextFrame, frameDuration);
        return;
      }

      setStaticFavicon();
      scheduleWave();
    };

    showNextFrame();
  };

  document.addEventListener("visibilitychange", () => {
    window.clearTimeout(restTimer);
    window.clearTimeout(waveTimer);

    if (!document.hidden) {
      setStaticFavicon();
      scheduleWave();
    }
  });

  startWave();
}
