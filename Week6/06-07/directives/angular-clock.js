var clockModule = angular.module('clock', []);

clockModule.directive('clock', function($interval, dateFilter) {
  return {
    // link - "links" an Angular directive with some
    // DOM manipulation behaviour.
    // This link function will update the text of the element
    // with the clock display value every second
    link: function(scope, element, attr) {
      function update() {
        var dateStr = dateFilter(new Date(), 'h:mm:ss');
        element.text(dateStr);
      }
      element.css('font-size', '4em');
      update();
      $interval(update, 1000);
    }
  };
});
