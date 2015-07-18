Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('admin', {
  name: 'admin',
  controller: 'AdminController',
  action: 'action',
  where: 'client'
});