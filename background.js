'use strict'

/* const PROTO_RE = 'https?://'
const DOMAIN_RE = '((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\\.(xn--)?([a-z0-9\\-]{1,61}|[a-z0-9-]{1,30}\\.[a-z]{2,})'

const DEV_TLD = 'dev'
const LOCAL_TLD = 'localhost'

const RE = new RegExp('^' + PROTO_RE + DOMAIN_RE + '\\.' + DEV_TLD + '\\/.+', 'i')

function listener (details) {
  const m = details.url.match(RE)
  if (m) {
    return {redirect: 'http://' + RE[1].replace('.dev')}
  }
}  */

function listener (details) {
  const {hostname, pathname} = new URL(details.url)
  console.log(hostname, pathname)
  if (hostname.endsWith('.dev')) {
    return {redirectUrl: 'http://' + hostname.replace(/\.dev$/, '.localhost') + pathname}
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ['*://*.dev/*'], types: ['main_frame']},
  ['blocking']
)
