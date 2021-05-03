export function getCookie(name) {
  const cookies = document.cookie.split(';');
  let result = null;
  cookies.forEach((cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      result = decodeURIComponent(cookieValue);
    }
  });
  return result;
}

export function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=315360000; path=/`;
}

export function loadSettings(callback) {
  const cookieDefaults = {
    scanSourcePriority: 'pt',
    includeCardBacks: 'true',
    PdfPageSize: 'Letter',
    fullCutLines: 'false',
    LmMpcPlacement: 'fit',
  };

  const savedCookies = Object.fromEntries(Object.keys(cookieDefaults)
    .map((name) => [name, getCookie(name)]));
  const anyCookiesMissing = Object.values(savedCookies).some((value) => (value == null));

  if (anyCookiesMissing) {
    callback();
    Object.entries(cookieDefaults).forEach(([name, value]) => (setCookie(name, value)));
    return cookieDefaults;
  }
  return savedCookies;
}

export function saveSettings(settings) {
  Object.entries(settings).forEach(([name, value]) => (setCookie(name, value)));
}
