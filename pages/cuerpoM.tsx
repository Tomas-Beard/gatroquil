import react from "react";
import Image from "next/image";

const cuerpoM = () => {
  return (
    <>
      <Image
        src="/002.png"
        height={500}
        width={1600}
        className="wall-image"
        alt="perrito"
      />
      <div className="Main-container">
        <div id="cont1" className="container">
          <div className="row">
            <h1>DIRECCIÓN</h1>
            <div id="titlecol" className="col-12 main">
              <h3>Dr. Edgardo Daniel Giménez</h3>
              <div className="row">
                <div className="col-6">Medico UNLP 1982</div>
                <div className="col-6">
                  Especialista en Gastroenterología y Endoscopia Digestiva. SAGE
                  1987
                </div>
                <div className="col-6">
                  Hospital de Gastroenterología Dr. Carlos Bonorino Udaondo{" "}
                </div>
                <div className="col-6">
                  Hospital Gral. de Agudos Dr. Juan A. Fernandez
                </div>
                <div className="col-6">
                  Hospital Interzonal Gral. de Agudos Dr. Pedro Fiorito
                </div>
                <div className="col-6">
                  Hospital Zonal Gral. de Agudos Dr. Isidoro Iriarte
                </div>
                <div className="col-6">Hepatología</div>
                <div className="col-6">
                  Maestría en Investigación Clinica y Farmacológica. UAI 2005
                </div>
              </div>
            </div>
            <h2> ESPECIALIDADES</h2>
            <div id="titlecol" className="col-6">
              <h4>Gastroenterologia</h4>
              <p>
                Dr. Gimenéz Edgardo Daniel <br />
                Dr. Espinoza Fernando <br />
                Dr. Miños Mariano <br />
                Dr. Zanocco Sergio <br />
                Dra. Diaz Estefania <br />
                Dr. Andrade Aldo <br />
                Dr. Pepa Pablo <br />
                Dr. Valderrama Andres <br />
              </p>
            </div>
            <div id="titlecol" className="col-6">
              <h4>Nutrición</h4>
              <p>Lic. Oxoby Guadalupe</p>
            </div>
            <div className="col-6">
              <h4>Gastroenterologia Pediatrica</h4>
              <p> Dra. Ursino Florencia</p>
            </div>
            <div className="col-6">
              <h4>Hepatologia</h4>
              <p>Dr. Amor Eduardo</p>
            </div>
            <div className="col-6">
              <h4>Proctologia</h4>
              <p>Dra. Coraglio Mariana</p>
            </div>
            <div className="col-6">
              <h4>Ciguria Gral y Reflujo Gastroesofagico</h4>
              <p>Dr. Perez Firpo Martín</p>
            </div>
            <div className="col-6">
              <h4>Cardiologia</h4>
              <p>
                Dr. Wachs Adolfo <br />
                Dr. Rocha Guillermo
              </p>
            </div>
            <div className="col-6">
              <h4>Dermatologia</h4>
              <p>Dra. Lagiola Silvina</p>
            </div>
            <div className="col-6">
              <h4>Homeopatía Unicista</h4>
              <p>Dr. De Luca Carlos</p>
            </div>
            <div className="col-6">
              <h4>Clinica Medica</h4>
              <p>
                Dr. Rocha Guillermo <br />
                Dr. Wachs Adolfo
              </p>
            </div>
            <div className="col-12">
              <h4>Kinesiología y Fisiatria</h4>
              <p>Lic. Gimenéz Germán</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cuerpoM;
