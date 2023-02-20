import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi currículum</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Experiencia</a>
            </li>
            <li>
              <a href="#">Educación</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Resumen profesional</h2>
          <p>
            Soy un desarrollador web con experiencia en React, Angular y
            Node.js.
          </p>
        </section>
        <section>
          <h2>Experiencia laboral</h2>
          <ul>
            <li>
              <p>
                <strong>Desarrollador web senior</strong>
              </p>
              <p>ABC Company</p>
              <p>Octubre 2018 - presente</p>
            </li>
            <li>
              <p>
                <strong>Desarrollador web junior</strong>
              </p>
              <p>XYZ Company</p>
              <p>Enero 2017 - Septiembre 2018</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Educación</h2>
          <ul>
            <li>
              <p>
                <strong>Licenciatura en Informática</strong>
              </p>
              <p>Universidad Nacional Autónoma de México</p>
              <p>2012 - 2016</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Derechos reservados © 2023</p>
      </footer>
    </div>
  );
}

export default App;
