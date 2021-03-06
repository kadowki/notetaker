'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}', config: require('../definitions/static/angular')},
  {method: 'post',   path: '/register', config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',    config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',   config: require('../definitions/users/logout')},
  {method: 'get',    path: '/status',   config: require('../definitions/users/status')},
  {method: 'post',   path: '/notes',    config: require('../definitions/notes/create')},
  {method: 'get',   path: '/notes',    config: require('../definitions/notes/get_user_notes')},
  {method: 'get',   path: '/notes/read/{noteId}',    config: require('../definitions/notes/get_note')},
  {method: 'put',   path: '/notes/photo/add/{noteId}',    config: require('../definitions/notes/put_photo_note')}
];
