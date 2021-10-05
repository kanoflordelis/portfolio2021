export const isSmartPhone = () => {
  const ua = window.navigator.userAgent.toLowerCase();

  if (ua.indexOf('iphone') >= 0 || ua.indexOf('android') >= 0 || ua.indexOf('mobile') >= 0) {
    return true;
  }

  return false;
};
