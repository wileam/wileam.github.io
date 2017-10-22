(function() {
  if (navigator.userAgent.indexOf('iPhone') > -1) {
    return;
  }
  var isMobile = false;
  var speed = 250;
  var easing = mina.easeinout;

  [].slice.call(document.querySelectorAll('#grid > a')).forEach(function(el) {
    var s = Snap(el.querySelector('svg'));
    var path = s.select('path');
    var pathConfig = {
      from: path.attr('d'),
      to: el.getAttribute('data-path-hover')
    };

    function adjust(param) {
      if (!isMobile) {
        path.animate({ 'path': param }, speed, easing);
      }
    }

    el.addEventListener('mouseenter', function() {
      adjust(pathConfig.to)
    });
    el.addEventListener('mouseleave', function() {
      adjust(pathConfig.from)
    });
  });

  function calcDevice() {
      isMobile = document.documentElement.clientWidth <= 425;
  }

  calcDevice();
  window.addEventListener('resize', calcDevice);
})();