module.exports = Ferdi => {
  const getMessages = function getMessages() {
    let unread = 0;
    const notificationBadge = document.getElementsByClassName('notification-badge')[0];
    if (notificationBadge != undefined) {
      unread = notificationBadge.innerText;
    }
    Ferdi.setBadge(unread);
  };

  Ferdi.loop(getMessages);
};
