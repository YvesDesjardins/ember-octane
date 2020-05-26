import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  // teams
  this.route('teams', function () {
    // teams/(team)
    this.route(
      'team',
      {
        path: ':teamId',
      },
      function () {
        // teams/(team)/(channel)
        this.route('channel', {
          path: ':channelId',
        });
      }
    );
  });
  this.route('login');
});

export default Router;
