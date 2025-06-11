document.getElementById('formOrcamento').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  form.reset();
  const msg = document.querySelector('.mensagem-sucesso');
  msg.style.display = 'block';
  msg.style.animation = 'fadeIn 1s';
  setTimeout(() => {
    msg.style.display = 'none';
  }, 4000);
});
