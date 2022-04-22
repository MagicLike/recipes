const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = Ferdi => {
  const getMessages = () => {
    let directCount = 0;
    const directCountPerServer = document.querySelectorAll(
      '[class*="lowerBadge-"] [class*="numberBadge-"]',
    );

    for (const directCountBadge of directCountPerServer) {
      directCount += Ferdi.safeParseInt(directCountBadge.textContent);
    }

    const indirectCountPerServer = document.querySelectorAll(
      '[class*="modeUnread-"]',
    ).length;

    Ferdi.setBadge(directCount, indirectCountPerServer);
  };

  Ferdi.loop(getMessages);

  Ferdi.injectCSS(_path.default.join(__dirname, 'service.css'));

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="http"]');
    const button = event.target.closest('button[title^="http"]');

    if (link || button) {
      const url = link ? link.getAttribute('href') : button.getAttribute('title');

      if (url.includes('views/imgpsh_fullsize_anim')) {
        event.preventDefault();
        event.stopPropagation();
        Ferdi.openNewWindow(url);
      }
    }
  }, true);
};