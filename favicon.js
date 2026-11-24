const faviconLink = document.querySelector("#animated-favicon");

if (faviconLink) {
  const logoColor = "#010101";
  const waveAngles = [0, -28, 24, -22, 18, -14, 10, -6, 0];
  const frameDuration = 180;
  const restingDuration = 10000;
  let restTimer;
  let waveTimer;

  const logoPaths = `
    <path fill-rule="evenodd" clip-rule="evenodd" d="M240.972 448L240.972 90L275.88 90L275.88 448L240.972 448Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M68 306.049L444.831 306.049L444.831 341.219L68 341.219L68 306.049Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M258.561 313.32L409.555 162.326L433.908 186.68L282.915 337.674L258.561 313.32Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M107.011 162.327L258.005 313.321L233.651 337.675L82.6574 186.681L107.011 162.327Z"/>
  `;

  const faviconSvg = (color, angle = 0) => {
    const svg = `
      <svg width="512" height="538" viewBox="0 0 512 538" xmlns="http://www.w3.org/2000/svg">
        <rect x="16" y="16" width="480" height="506" rx="88" fill="#F2F2F2"/>
        <g fill="${color}" transform="rotate(${angle} 256 448)">
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
