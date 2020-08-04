import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Descassito"
      />
      <div>
        <strong>Descassito</strong>
        <span>Quimica</span>
      </div>
    </header>
    <p>
      Entusiasta das melhores fotografias do mundo!
      <br />
      <br />
      Apaixonado por cada clique em lugares totalmente exoticos, mais de 200.000
      fotos ja foram para seu site.
    </p>
    <footer>
      <p>
        Preço por hora
        <strong>R$ 20,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
