'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('ippeventsApp', ['eventsServices','membersServices','eventUI','ui']));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of members to the scope', function () {
    expect(scope.team.length).toBe(3);
  });
});
