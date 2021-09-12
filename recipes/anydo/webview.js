module.exports = (Ferdi) => {
  function getTasks() {
    let incompleteCount = 0;

    const countEls = document.querySelectorAll('.AppSidebarListsItems__itemContainer__sizeContainer:not([hidden]) > .AppSidebarListsItems__itemContainer__size');

    if (countEls.length) {
      Array.from(countEls).forEach((el) => {
        incompleteCount += Ferdi.safeParseInt(el.innerHTML);
      });
    }

    Ferdi.setBadge(incompleteCount);
  }

  Ferdi.loop(getTasks);
};
