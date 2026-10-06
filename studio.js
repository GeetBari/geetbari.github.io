(() => {
  const lightSwitch = document.querySelector('.light-switch');
  function setLights(on) {
    document.body.classList.toggle('lights-off', !on);
    lightSwitch.setAttribute('aria-pressed', String(on));
    lightSwitch.querySelector('.switch-label').textContent = on ? 'Lights on' : 'Lights off';
    document.querySelector('.cursor-glow').classList.remove('active');
  }
  try { setLights(localStorage.getItem('studio-lights') !== 'off'); } catch { setLights(true); }
  lightSwitch.hidden = false;
  lightSwitch.addEventListener('click', () => {
    const on = lightSwitch.getAttribute('aria-pressed') !== 'true';
    setLights(on);
    try { localStorage.setItem('studio-lights', on ? 'on' : 'off'); } catch { /* Lighting still works without storage. */ }
  });
})();
