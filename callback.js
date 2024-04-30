const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getAllCookies() {
  return cookies;
}

// Progression 2: using setTimeout()
function getAllCookiesWithDelay() {
  setTimeout(() => {
    console.log('All cookies:', getAllCookies());
  }, 1000);
}

//Progression 3: Create a function to creat cookies
function createCookie(cookie) {
  setTimeout(() => {
    cookies.push(cookie);
    console.log('New cookie created:', cookie);
  }, 2000);
}
// Progression 5: calling function
getAllCookiesWithDelay();
createCookie(newCookie);
