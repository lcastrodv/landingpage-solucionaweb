<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Landing page de serviço fictício focada em conversão.">
  <title>SolucionaWeb - Sites que vendem</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6;
    }

    .container {
      width: 90%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 2rem 0;
    }

    .hero {
      background: linear-gradient(135deg, #ff6a00, #ee0979);
      color: #fff;
      text-align: center;
      padding: 5rem 2rem;
      animation: fadeIn 1.5s ease-in;
    }

    .hero h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .hero span {
      color: #fff700;
    }

    .hero .btn {
      display: inline-block;
      margin-top: 1.5rem;
      background: #fff700;
      color: #000;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;
    }

    .hero .btn:hover {
      background: #ffe400;
    }

    .beneficios {
      background-color: #fff;
      padding: 4rem 2rem;
      text-align: center;
    }

    .beneficios h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #333;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .card {
      background: #fffbf5;
      padding: 2rem;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(255, 106, 0, 0.15);
      transition: transform 0.3s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .formulario {
      background: #fff3f8;
      padding: 4rem 2rem;
      text-align: center;
    }

    .formulario h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: #ee0979;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 500px;
      margin: 0 auto;
    }

    input, textarea {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 1rem;
    }

    button.btn {
      background: #ee0979;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background 0.3s;
    }

    button.btn:hover {
      background: #ff3c9b;
    }

    .mensagem-sucesso {
      color: green;
      margin-top: 1rem;
    }

    footer {
      background: #222;
      color: #fff;
      text-align: center;
      padding: 2rem 1rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>
  <header class="hero">
    <div class="container">
      <h1>Transforme sua presença online com a <span>SolucionaWeb</span></h1>
      <p>Desenvolvemos sites que convertem visitantes em clientes.</p>
      <a href="#contato" class="btn">Solicite seu orçamento</a>
    </div>
  </header>

  <section class="beneficios">
    <div class="container">
      <h2>Por que escolher a SolucionaWeb?</h2>
      <div class="cards">
        <div class="card">
          <h3>Design Estratégico</h3>
          <p>Sites personalizados com foco em UX e conversão.</p>
        </div>
        <div class="card">
          <h3>Performance Rápida</h3>
          <p>Sites otimizados para carregamento rápido e SEO.</p>
        </div>
        <div class="card">
          <h3>Suporte Dedicado</h3>
          <p>Acompanhamento próximo do início ao fim do projeto.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="formulario" id="contato">
    <div class="container">
      <h2>Solicite um orçamento gratuito</h2>
      <form id="formOrcamento">
        <input type="text" name="nome" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="mensagem" placeholder="Descreva sua necessidade" required></textarea>
        <button type="submit" class="btn">Enviar</button>
      </form>
      <p class="mensagem-sucesso" style="display: none;">Obrigado! Em breve entraremos em contato.</p>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2025 SolucionaWeb. Todos os direitos reservados.</p>
    </div>
  </footer>

  <script>
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
  </script>
</body>
</html>
