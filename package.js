Package.describe({
  summary: "bootstrap progressbar for meteor",
  version: "0.0.1",
  name: "bootstrap-progressbar",
  git: "https://github.com/xc8tlik/meteor-bootstrap-progressbar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['templating'], 'client');
  api.addFiles([
    'lib/bootstrap-progressbar.js',
    'bootstrap-progressbar-template.html',
    'bootstrap-progressbar-template.js',
  ], 'client');
});
