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
  const result = targetCookie === 'true' ? true : targetCookie === 'false' ? false : targetCookie
  return result;
};

export const deleteCookie = (name) => {
  // 設定 cookie 的過期時間為過去的時間，即可刪除 cookie
  document.cookie = name + '=; Max-Age=0; path=/';
}
