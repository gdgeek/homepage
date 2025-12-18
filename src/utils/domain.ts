export const getRootDomain = (): string => {
  const hostname = window.location.hostname;

  // For localhost or development, use default
  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return "3dugc.com";
  }

  // Strip www. prefix if present
  // e.g., www.3dugc.com -> 3dugc.com, xiading.hxgxonline.com -> xiading.hxgxonline.com
  if (hostname.startsWith("www.")) {
    return hostname.substring(4);
  }

  return hostname;
};
