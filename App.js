import './App.css';
import porsche from './componentes/porsche.png';
import peugeot from './componentes/peugeot.png';
import tesla from './componentes/tesla2.png';
import car1 from './componentes/car-card 1.png';
import jeepC from './componentes/jeep2.png';
import land from './componentes/land.png';
import civic from './componentes/civic.png';
import toyota from './componentes/toyota.png';
import kia from './componentes/kia.png';
import benz from './componentes/benz.png';
import about from './componentes/about.png';
import planet from './componentes/planet.png';
import instagram from './componentes/instagram.png';
import facebook from './componentes/facebook.png';


function App() {
  return (
    <body>
      <header>
        <div className='content'>
          <nav>
            <p class='brand'><strong>Star</strong> Importados</p>
            <ul>
              <li><a href='#catalog'>Catálogo</a></li>
              <li><a href='#about'>Historia</a></li>
              <li><a href='#features'>Curiosidades</a></li>
              <button>Login</button>
            </ul>
          </nav>
          <div class='header-block'>
            <div class='text'>
              <h2>O futuro da mobilidade</h2>
              <p>
                Onde alguns veem um novo carro, nós vemos uma nova era.
              </p>
            </div>
            <img src={porsche}/>
          </div>
        </div>
      </header>

      <section class='catalog' id='catalog'>
        <div class='content'>
          <div class="title-wrapper-catalog">
          <h1> Conheça nosso cátalogo</h1>
          </div>
          <div class='filter-card'>
            <input 
            type="text" 
            class="search-input"
            placeholder='Qual modelo você deseja?'>
            </input>
            <button class="search-button">Buscar</button>
          </div>
          <div class="card-wrapper">
            <div class="card-item">
            <img src={tesla}></img>
            <div class="card-content">
              <h3> Tesla Model X</h3>
              <p>
              100% Elétrico.
              Velocidade Max: 250(Km/h).
              Autonomia: 480Km.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={car1}></img>
            <div class="card-content">
              <h3> Audi R8</h3>
              <p>
              Motorização: 5.2.
              Potencia: 620Cv.
              Velocidade Max: 330(Km/h).
              Combustível: Gasolina.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={benz}></img>
            <div class="card-content">
              <h3>Toyota FCV</h3>
              <p>
              100% elétrico.
              Velocidade Max: 210(Km/h).
              Autonomia: 600Km.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={peugeot}></img>
            <div class="card-content">
              <h3>Peugeot 3008</h3>
              <p>
              Motorização: 1.6 Turbo.
              Potencia: 165Cv.
              Velocidade Max: 206(Km/h).
              Combustível: Gasolina.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={jeepC}></img>
            <div class="card-content">
              <h3> Jeep Compass</h3>
              <p>
              Motorização: 1.3 Turbo.
              Potencia: 185Cv.
              Velocidade Max: 190(Km/h).
              Combustível: Flex.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={land}></img>
            <div class="card-content">
              <h3> Land Rover Evoque</h3>
              <p>
              Motorização: 2.0 Turbo.
              Potencia: 240Cv.
              Velocidade Max: 217(Km/h).
              Combustível: Gasolina.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={civic}></img>
            <div class="card-content">
              <h3>Honda Civic</h3>
              <p>
              Motorização: 1.5 Turbo.
              Potencia: 155Cv
              Velocidade Max: 220(Km/h).
              Combustível: Flex.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={kia}></img>
            <div class="card-content">
              <h3> Kia Sportage</h3>
              <p>
              Motorização: 2.0
              Potencia: 167Cv.
              Velocidade Max: 182(Km/h).
              Combustível: Flex. 
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
            <div class="card-item">
            <img src={toyota}></img>
            <div class="card-content">
              <h3>Toyota Corolla</h3>
              <p>
              Motorização: 2.0
              Potencia: 177Cv.
              Velocidade Max: 198(Km/h).
              Combustível: Flex.
                </p>
              <button type="button">Efetuar pedido</button>
            </div>
            </div>
           
            </div>
            </div>
            
      </section>

      <section class="about" id="about">
        <div class="content">
        <div class="title-wrapper-about">
          <h3>Nossa identidade no mundo</h3>
         </div> 
         <div class="about-content">
           <div class="left">
             <img src={about}></img>
           </div>
           <div class="right">
             <h3>Sustentabilidade e tecnologia.</h3>
             <p>A Responsabilidade Corporativa e a Sustentabilidade fazem parte do DNA da nossa marca, que investe em processos produtivos e produtos cada vez mais sustentáveis, além de desenvolver e apoiar iniciativas em benefício de seus empregados e da comunidade.
Através do Anuário de Sustentabilidade relatamos as atividades da empresa relevantes aos públicos de interesse nas esferas econômica, social e ambiental. A 9ª edição do Anuário da Star Importados lança sobre 2020 uma análise pela ótica da gestão financeira, do modelo de negócio, da relação com os stakeholders, da produção operacional, da sustentabilidade e os desafios da pandemia. Este documento reúne os principais indicadores econômicos, sociais e ambientais de forma transparente, mantendo o compromisso da empresa com a responsabilidade corporativa. </p>
           </div>
         </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="content">
          <div class="title-wrapper-features">
            <h3>Curiosidades</h3>
            <div class="feature-card-block">
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Carros no mundo</h3>
                  <p>O número de carros no mundo aumenta em um ritmo duas vezes maior que o da população.
                     A previsão é de que existirão pelo menos 2 bilhões de carros em todo o mundo até 2030.</p>
                </div>
              </div>
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Alto Valor</h3>
                  <p>O carro mais caro de todos os tempos custou 7,8 milhões de dólares: 
                    é um Bugatti Royale Kellner Coupe de 1931.</p>
                </div>
              </div>
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Trânsito</h3>
                  <p> Na China, o trânsito supera a imaginação. 
                    O maior engarrafamento conhecido aconteceu numa estrada chinesa: 
                    o trânsito ficou parado por um mês.</p>
                </div>
              </div>
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Veículos de guerra</h3>
                  <p> Entre 1942 e 1945 a indústria de carros dos EUA não fabricou veículos civis, apenas de guerra.</p>
                </div>
              </div>
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Engenharia Francesa</h3>
                  <p> Os primeiros carros eram conduzidos por meio de uma alavanca,como um joy stick. 
                    Quem descobriu a maior eficiência da direção circular foi o francês Alfred Vacheron, em 1894.</p>
                </div>
              </div>
              <div class="feature-card-item">
                <img src={planet}></img>
                <div class="feature-text-content">
                  <h3>Ferrari</h3>
                  <p> A Ferrari é modelo industrial menos fabricado no mundo: quatro carros por dia, no máximo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="main">
          <div class="content footer-links">
            <div class="footer-company">
              <h4>Company</h4>
              <h6>about</h6>
              <h6>Contact</h6>
            </div>
            <div class="footer-rental">
              <h4>Serviços</h4>
              <h6>Self-Drive</h6>
              <h6>Chauffer-Driven</h6>
              <h6>Help</h6>
            </div>
            <div class="footer-social">
              <h4>Redes Sociais</h4>
              <div class="social-icons">
                <img src={instagram} alt="instagram"></img>
                <img src={facebook} alt="facebook"></img>
              </div>
            </div>
            <div class="footer-contact">
              <h4>Nossos Contatos</h4>
              <h6>+55 83 986113504</h6>
              <h6>Themax0909@gmail.com</h6>
              <h6>Antonia fernandes, João Pessoa PB</h6>
            </div>
          </div>
        </div>
        <div class="last">
          Thiago pê Borges, 2022
        </div>
      </footer>
    </body>
  );
}

export default App;
