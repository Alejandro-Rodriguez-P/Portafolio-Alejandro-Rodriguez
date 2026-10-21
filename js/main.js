// Filtros de la galería "Mi trabajo": por organización y por formato.
(function () {
  var state = { org: 'todos', type: 'todo' };
  var orgButtons = document.querySelectorAll('[data-filter-org]');
  var typeButtons = document.querySelectorAll('[data-filter-type]');
  var orgs = document.querySelectorAll('.org');

  function press(buttons, attr, value) {
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute(attr) === value ? 'true' : 'false');
    });
  }

  function apply() {
    orgs.forEach(function (org) {
      var orgMatch = state.org === 'todos' || org.dataset.org === state.org;
      var visible = 0;
      org.querySelectorAll('.piece').forEach(function (piece) {
        var show = orgMatch && (state.type === 'todo' || piece.dataset.type === state.type);
        piece.hidden = !show;
        if (!show) {
          var v = piece.querySelector('video');
          if (v && !v.paused) v.pause();
        } else {
          visible++;
        }
      });
      org.hidden = visible === 0;
    });
  }

  orgButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      state.org = b.getAttribute('data-filter-org');
      press(orgButtons, 'data-filter-org', state.org);
      apply();
    });
  });

  typeButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      state.type = b.getAttribute('data-filter-type');
      press(typeButtons, 'data-filter-type', state.type);
      apply();
    });
  });

  // Solo un video sonando a la vez.
  document.addEventListener('play', function (e) {
    document.querySelectorAll('.piece video').forEach(function (v) {
      if (v !== e.target) v.pause();
    });
  }, true);
})();
