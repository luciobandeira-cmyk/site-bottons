(function () {
  // Filtro de produtos (abas "Todos / Pins e bottons / Campanhas e segurança / Brindes corporativos")
  var tabs = document.querySelectorAll('button.bc-tab[data-filter]');
  var cards = document.querySelectorAll('[data-cat]');
  function applyFilter(f) {
    tabs.forEach(function (t) { t.setAttribute('aria-pressed', t.getAttribute('data-filter') === f ? 'true' : 'false'); });
    cards.forEach(function (c) {
      var ok = f === 'todos' || c.getAttribute('data-cat') === f;
      c.style.display = ok ? '' : 'none';
    });
  }
  tabs.forEach(function (t) {
    t.addEventListener('click', function () { applyFilter(t.getAttribute('data-filter')); });
  });

  // Formulário de orçamento: enquanto o endpoint (Formspree) não estiver configurado, avisa e não envia
  document.querySelectorAll('form[action*="SEU_ID_AQUI"]').forEach(function (form) {
    var notice = document.createElement('p');
    notice.setAttribute('role', 'status');
    notice.style.cssText = 'margin:0;padding:12px 14px;border-radius:10px;background:#fff8e6;color:#5b4300;font-size:14px;display:none';
    notice.textContent = 'Formulário ainda não configurado. Enquanto isso, use o WhatsApp ou o e-mail atendimento@botonsecia.com.br.';
    form.appendChild(notice);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      notice.style.display = 'block';
    });
  });
})();
