Package.describe({
  summary: "Provides an easy way to integrate social auth mechanism"
});

Package.on_use(function (api) {
  api.use(['session', 'handlebars', 'accounts-password', 'accounts-base', 'templating'], 'client');


  api.add_files([], 'client');
});
