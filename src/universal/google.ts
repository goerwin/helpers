export function getAnalyticsScript(trackingId: string) {
  if (trackingId === '') return '';

  return `
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=${trackingId}"></script>
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${trackingId}');
      </script>
  `;
}

export function getAdSenseScript(clientId: string) {
  if (clientId === '') return '';

  return `<script data-ad-client="${clientId}" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>`;
}
