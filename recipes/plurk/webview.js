module.exports = Franz => {
  function getMessages() {
    let direct = 0;

    const np = document.querySelector('#noti_np_count');
    const re = document.querySelector('#noti_re_count');

    if (np || re) {
      direct = parseInt(np.innerHTML) + parseInt(re.innerHTML);
    }

    Franz.setBadge(direct);
  }

  Franz.loop(getMessages, 10000);
};
// # sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdXJrL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56IiwiZ2V0TWVzc2FnZXMiLCJkaXJlY3QiLCJucCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInJlIiwicGFyc2VJbnQiLCJpbm5lckhUTUwiLCJzZXRCYWRnZSIsImxvb3AiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBa0JDLEtBQUQsSUFBVztBQUMxQixXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlDLFNBQVMsQ0FBYjs7QUFFQSxVQUFNQyxLQUFLQyxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFYO0FBQ0EsVUFBTUMsS0FBS0YsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWDs7QUFFQSxRQUFJRixNQUFNRyxFQUFWLEVBQWM7QUFDWkosZUFBU0ssU0FBVUosR0FBR0ssU0FBYixJQUEwQkQsU0FBVUQsR0FBR0UsU0FBYixDQUFuQztBQUNEOztBQUVEUixVQUFNUyxRQUFOLENBQWdCUCxNQUFoQjtBQUVEOztBQUVERixRQUFNVSxJQUFOLENBQVdULFdBQVgsRUFBd0IsS0FBeEI7QUFDRCxDQWhCRCIsImZpbGUiOiJwbHVyay93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgZnVuY3Rpb24gZ2V0TWVzc2FnZXMoKSB7XG4gICAgbGV0IGRpcmVjdCA9IDA7XG5cbiAgICBjb25zdCBucCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RpX25wX2NvdW50Jyk7XG4gICAgY29uc3QgcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aV9yZV9jb3VudCcpO1xuXG4gICAgaWYgKG5wIHx8IHJlKSB7XG4gICAgICBkaXJlY3QgPSBwYXJzZUludCAobnAuaW5uZXJIVE1MKSArIHBhcnNlSW50IChyZS5pbm5lckhUTUwpO1xuICAgIH1cblxuICAgIEZyYW56LnNldEJhZGdlIChkaXJlY3QpO1xuXG4gIH1cblxuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzLCAxMDAwMCk7XG59XG4iXX0=
