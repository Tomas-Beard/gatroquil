import Image from "next/image";
import MainBar from "../component/mainBar";
import styles from "../styles/Home.module.css";
import mainPageData from "../data/mainPageData";
import Script from "next/script";
import Map from "../component/map";
import { MdOutlinePlace } from "react-icons/md";
import { BsTelephoneInbound } from "react-icons/bs";
export default function Home() {
  return (
    <>
      <head>
        {" "}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </head>
      <Script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      ></Script>
      <div className={styles.container}>
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <Image
                src="/001.png"
                height={500}
                width={1600}
                className="d-block w-100"
                alt="perrito"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <Image
                src="/descarga.jpg"
                height={500}
                width={1600}
                className="d-block w-100"
                alt="ag"
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div> */}
            </div>
            <div className="carousel-item">
              <Image
                src="/001.png"
                height={500}
                width={1600}
                className="d-block w-100"
                alt="gatito"
              />
            </div>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.grid}>
            <MainBar
              Data={mainPageData}
              navcolor={"nav-link bg-secondary bg-opacity-50"}
              liidselect={"idbotons"}
            ></MainBar>
            <a className={styles.card}>
              <Image
                src={"/001.png"}
                height={100}
                width={300}
                className="card-img-top"
              ></Image>

              <h2 className="card-title">Mision &rarr;</h2>

              <p>
                Brindar un servicion de asistencia medica de vanguardia y la mas
                alta calidad, adecuandonos a las necesidades de nuestro
                pacientes
              </p>
            </a>

            <a className={styles.card}>
              <Image
                src={"/001.png"}
                height={100}
                width={300}
                className="card-img-top"
              ></Image>
              <h2>Vision &rarr;</h2>
              <p>
                Ser un centro medico comprometido con la prevencion y atencion
                de pacientes cons enfermedades digestivas, en constante
                capacitacion y actualizacion tecnologica, dentro de los
                parametros de etica y dignidad, tanto para los pacientes como
                para el personal de la institucion
              </p>
            </a>

            <a className={styles.card}>
              <Image
                src={"/001.png"}
                height={100}
                width={300}
                className="card-img-top"
              ></Image>
              <h2>Valores &rarr;</h2>
              <ul>
                <li>Servir con amor al projimo es nuestra prioridad</li>
                <li>Cuidar la vida y la condición humana</li>
                <li>
                  Entender y acompañar al paciente en su dolencia en un ambiente
                  calido y respetuoso
                </li>
              </ul>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <Map></Map>
          <ul className={styles.ulist}>
            <div className={styles.card}>
              <h3>
                <MdOutlinePlace />
                Brandsen 434
              </h3>
              <h4>Quilmes,Buenos Aires</h4>
              <h5>Horario de Atención: 8 a 18hs</h5>
            </div>
            <div className={styles.card}>
              <h3>
                <BsTelephoneInbound />
                Turnos
              </h3>
              <h4>(11)2080-0912</h4>
              <h4>(11)2083-2806</h4>
            </div>
          </ul>
        </footer>
      </div>
    </>
  );
}
