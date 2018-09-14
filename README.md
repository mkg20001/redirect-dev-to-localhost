# redirect-dev-to-localhost

This is an extension with one simple purpose: Turn `http(s)://*.dev` urls into `http://*.localhost` ones

## Whats the fuzz all about?

Google has bought `.dev` as part of it's 100+ shopping trip accross the vast landscape of unregistered gTLDs.

Aside from preventing others from registering domains on .dev, Google also forced HSTS preload for that domain.

Thus it became somewhat useless for development.

So, back to `.localhost`

This extension makes your life easier by simply redirecting `**://*.dev` domains to `http://*.localhost`
