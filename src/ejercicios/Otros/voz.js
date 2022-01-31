import React, { Fragment, useState, useRef } from "react";

import voz from "../../assets/img/voz.jpg";
import goog from "../../assets/img/google.gif";

//css
import styles from "../../paginas/Paginas.module.css";

const Voz = () => {
  const [setActivo, guardarActivo] = useState("");
  const [setAlto, guardarAlto] = useState("0px");
  // const [mensaje, guardarMensaje] = useState("");

  const contenedor = useRef(null);

  // efecto desplegable
  const accordion = () => {
    guardarActivo(setActivo === "" ? "active" : "");
    guardarAlto(
      setActivo === "active" ? "0px" : `${contenedor.current.scrollHeight}px`
    );
  };

  let SpeechRecognition =
    window.webkitSpeechRecognition || window.SpeechRecognition;
  let SpeechGrammarList =
    window.SpeechGrammarList || window.webkitSpeechGrammarList;

  let moods = ["feliz", "triste", "sueño", "enojado"];
  let grammar =
    "#JSGF V1.0; grammar moods; public <moods> = " + moods.join(" | ") + ";";

  let recognition = new SpeechRecognition();
  let recognitionList = new SpeechGrammarList();
  recognitionList.addFromString(grammar, 1);
  recognition.grammars = recognitionList;

  recognition.lang = "es";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const renderSpeech = () => {
    recognition.start();
    recognition.onresult = (event) => {
      document.getElementById("transcript").value =
        event.results[0][0].transcript;
      recognition.stop();
      document.getElementById("labnol").submit();
      //   let word = event.results[0][0].transcript;
      //   switch (word) {
      //     case "feliz":
      //       guardarMensaje({
      //         emoji: "😄",
      //         wordSpoken: word,
      //       });
      //       break;
      //     case "sueño":
      //       guardarMensaje({
      //         emoji: "😴",
      //         wordSpoken: word,
      //       });
      //       break;
      //     case "triste":
      //       guardarMensaje({
      //         emoji: "😢",
      //         wordSpoken: word,
      //       });
      //       break;
      //     case "enojado":
      //       guardarMensaje({
      //         emoji: "😡",
      //         wordSpoken: word,
      //       });
      //       break;
      //     default:
      //       guardarMensaje({
      //         emoji: "🧐",
      //         wordSpoken: `Sorry, I do not recognize the mood ${word}.`,
      //       });
      //   }
    };
  };

  // const limpiarForm = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   guardarMensaje(false);
  // };

  return (
    <Fragment>
      <button
        className={`${styles.card} ${styles.accordion} ${setActivo}`}
        onClick={accordion}
      >
        <div className={styles.contenedor_img}>
          <img src={voz} alt="" />
        </div>

        <div className={styles.card_info}>
          <p>
            1. Realizar el programa de interfaz de voz.
            <br />
            Este programa busca en Google lo que digas.
          </p>
        </div>
      </button>
      <div className={styles.panel}>
        <div
          className={styles.container}
          ref={contenedor}
          style={{ maxHeight: `${setAlto}` }}
        >
          <div className={styles.container__form}>
            {/* <div>
              <h2>{mensaje.emoji}</h2>
              <h2>{mensaje.wordSpoken}</h2>
            </div> */}
            {/* <button className={styles.btn} onClick={renderSpeech}>
              Precione y Hable
            </button> */}

            {/* <button className={styles.btn} onClick={(e) => limpiarForm(e)}>
              Limpiar
            </button> */}
            <div className={styles.buscar}>
              <img src={goog} style={{ maxWidth: 400, marginTop: 16 }} alt="" />
              <form
                target="_blank"
                id="labnol"
                method="get"
                action="https://www.google.com/search"
              >
                <div className={styles.speech}>
                  <input
                    type="text"
                    name="q"
                    id="transcript"
                    placeholder="Buscar..."
                  />
                  <img
                    onClick={renderSpeech}
                    src="https://monophy.com/media/WQZOJnVgueGfOKO6JL/monophy.gif"
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Voz;
