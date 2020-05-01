"use strict";
function getAnalyticsScript(trackingId) {
    if (trackingId === '') {
        return '';
    }
    return "\n      <!-- Global site tag (gtag.js) - Google Analytics -->\n      <script async src=\"https://www.googletagmanager.com/gtag/js?id=" + trackingId + "\"></script>\n      <script>\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '" + trackingId + "');\n      </script>\n  ";
}
function getAdSenseScript(clientId) {
    if (clientId === '') {
        return '';
    }
    return "<script data-ad-client=\"" + clientId + "\" async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>";
}
module.exports = {
    getAnalyticsScript: getAnalyticsScript,
    getAdSenseScript: getAdSenseScript,
};
