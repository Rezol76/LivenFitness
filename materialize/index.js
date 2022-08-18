

function(id) {
    return 'a[href="#' + id + '"]';
  }
        
var instance = M.ScrollSpy.getInstance(elem);

/* jQuery Method Calls
  You can still use the old jQuery plugin method calls.
  But you won't be able to access instance properties.

  $('.scrollspy').scrollSpy('methodName');
*/