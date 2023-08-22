export const setCookie = (name, value) => {
  if (document.cookie.indexOf(name) >= 0) {
    const expD = new Date();
    expD.setTime(expD.getTime() + -1 * 24 * 60 * 60 * 1000);
    const uexpires = `expires=${expD.toUTCString()}`;
    document.cookie = `${name}=${value}; ${uexpires};`;
  }
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires};`;
};

export const getCookie = (cookieName) => {
  const targetCookie = document.cookie.replace(
    new RegExp(
      "(?:(?:^|.*;)\\s*" +
      encodeURIComponent(cookieName) +
      "\\s*\\=\\s*([^;]*).*$)|^.*$"
    ),
    "$1"
  );
  return targetCookie;
};

