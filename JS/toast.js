window.addEventListener('DOMContentLoaded', () => {
    // Check if the cookies are enabled
    if (getCookie('cookiesEnabled') === 'true') {
      // Cookies are enabled
      console.log('Cookies are enabled');
    } else {
      // Cookies are not enabled
      const toastElement = document.querySelector('.toast');
      const toastInstance = new bootstrap.Toast(toastElement);
  
      // Show the toast message
      toastInstance.show();
  
      // Set the cookie when the close button is clicked
      const closeButton = toastElement.querySelector('.btn-secondary');
      closeButton.addEventListener('click', () => {
        setCookie('cookiesEnabled', 'false');
      });
  
      // Set the cookie when the take action button is clicked
      const takeActionButton = toastElement.querySelector('.btn-primary');
      takeActionButton.addEventListener('click', () => {
        setCookie('cookiesEnabled', 'true');
      });
  
      // Set the cookie when the Allow All button is clicked
      const allowAllBtn = document.getElementById('allowAllBtn');
      allowAllBtn.addEventListener('click', () => {
        setCookie('cookiePreference', 'allowAll');
      });
  
      // Set the cookie when the Choose button is clicked and redirect to choose-cookie-page.html
      const chooseBtn = document.getElementById('chooseBtn');
      chooseBtn.addEventListener('click', () => {
        setCookie('cookiePreference', 'choose');
        window.location.href = 'choose-cookie-page.html';
      });
  
      // Set the cookie when the Deny All button is clicked
      const denyAllBtn = document.getElementById('denyAllBtn');
      denyAllBtn.addEventListener('click', () => {
        setCookie('cookiePreference', 'denyAll');
      });
    }
  });
  
  // Function to set a cookie
  function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  
  // Function to get the value of a cookie
  function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
  