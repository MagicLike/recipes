const path = require('path');

module.exports = (Franz) => {
  // if the user is on gmail's landing page, go to the login page.
  if (location.hostname == 'www.google.com' && location.href.includes('gmail/about/')) {
    location.href = 'https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/';
  }

  const getMessages = function getMessages() {
    let count = 0;

    const inboxLinks = document.getElementsByClassName('J-Ke n0');
    if (inboxLinks.length > 0) {
      const inboxLink = inboxLinks[0];
      const unreadCounts = inboxLink.parentNode.parentNode.getElementsByClassName('bsU');
      if (unreadCounts.length > 0) {
        count = parseInt(unreadCounts[0].innerHTML.trim(), 10);
      }
    }

    // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
    count = parseInt(count, 10);
    if (isNaN(count)) {
      count = 0;
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  Franz.injectCSS(path.join(__dirname, 'service.css'));
  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
