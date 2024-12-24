//function for setting the cookie
function setThemeCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//function for getting the cookie
function getThemeCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//function to toggle between light and dark themes and set the cookie for 14 days
function toggleTheme() {
  setTimeout(() => {
    const currentTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
    document.body.classList.toggle("dark-theme", currentTheme === "dark");
    document.body.classList.toggle("light-theme", currentTheme === "light");
    setThemeCookie("theme", currentTheme, 14); 
}, 1000); // Delay of 1000 milliseconds (1 second)
}

//function to load thme to page
function loadTheme() {
    const savedTheme = getThemeCookie("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme + "-theme");
    } else {
        document.body.classList.add("light-theme");
    }
}

/**
 * Code security is vital in using cookies in websites. In my use case
 * I used it for setting the theme for my website, but cookies are used a
 * lot in collecting data to personalize ads and other things like that. 
 * Secuirty is important because we are dealing with individuals personnal
 * data and we do not want that private information leaking or ending up 
 * a person with malicous intent. My cookie could be vulnerable through 
 * cross site scripting where a individual could inject malicous code to read
 * the cookie and gain a users information. One way to protect this could be
 * incrypting the cookies so that they cannot be read if somone accesss them.
 */