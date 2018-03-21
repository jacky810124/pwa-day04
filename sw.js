const APP_ASSETS_CACHE_NAME = `app-assets-cache-v0.0.1`

self.addEventListener('install', event => {
  console.log('[Service Worker] - install event')

  event.waitUntil(
    self
      .caches
      .open(APP_ASSETS_CACHE_NAME)
      .then(cache => {
        return cache.addAll([
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          'https://cdn.jsdelivr.net/npm/vue@2.5.15/dist/vue.js',
          'https://unpkg.com/vue-router@3.0.1/dist/vue-router.js',
          'https://code.jquery.com/jquery-3.2.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
          '/app.js',
          '/manifest.json',
          '/',
        ])
      })
  )
})
