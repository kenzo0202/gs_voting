'use strict';

angular.module('gsVotingApp.auth', ['gsVotingApp.constants', 'gsVotingApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
