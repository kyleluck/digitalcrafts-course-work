
// Immediately-invoked function
(function() {

  function Elements(elms) {
    this.elms = elms;
  }

  Elements.prototype.click = function(callback) {
    for (var i = 0; i < this.elms.length; i++) {
      this.elms[i].addEventListener('click', callback);
    }
  };

  function jQuery(cssSelector) {
    var elms = document.querySelectorAll(cssSelector);
    return new Elements(elms);
  }

  window.$ = jQuery;

})();
