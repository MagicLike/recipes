const _path = _interopRequireDefault(require('path'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getInnerInt = selector => {
  const element = document.querySelector(selector);
  return element && parseInt(element.innerText);
};

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    const direct = (
      getInnerInt("header div[data-role='unread-notification-count']") ||
      getInnerInt('a.has-notifs div.notif-count') ||
      0
    );

    Ferdi.setBadge(direct);
  };

  Ferdi.loop(getMessages);
};
