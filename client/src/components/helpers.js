import cookie from "js-cookie";

// set in cookie
export const setCookie = (key, value) => {
  if (window !== "undefined") {
    cookie.set(key, value, {
      expires: 1,
    });
  }
};

// Remove from cookie
export const removeCookie = (key) => {
  if (window !== "undefined") {
    cookie.set(key, {
      expires: 1,
    });
  }
};

// Get from cookie such as stored token
// Will be useful when we need to make request to server
export const getCookie = (key) => {
  if (window !== "undefined") {
    return cookie.get(key);
  }
};

////
// Set in localStorage (save user information)

// Remove from localStorage

// Authemticate user by passing data to cookie and localStorage during singin

// Access user info from localStorage
