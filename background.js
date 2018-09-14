'use strict'

/* eslint-env webextensions */

function listener (details) {
  const {hostname, pathname} = new URL(details.url)
  return {redirectUrl: 'http://' + hostname.replace(/\.dev$/, '.localhost') + pathname}
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ['*://*.dev/*'], types: ['main_frame']},
  ['blocking']
)
