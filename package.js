Package.describe({
  summary: "bootstrap progressbar for meteor",
  version: "0.0.1",
  name: "xc8tlik:bootstrap-progressbar",
  git: "https://github.com/xc8tlik/meteor-bootstrap-progressbar.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['templating'], 'client');
  api.addFiles([
    'css/bootstrap-progressbar-3.3.0.css',
    'lib/bootstrap-progressbar.js',
    'lib/bootstrap-progressbar-template.html',
    'lib/bootstrap-progressbar-template.js',
  ], 'client');
});
