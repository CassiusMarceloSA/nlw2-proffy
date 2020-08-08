import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

import "./styles.css";

interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: string;
  whatsapp: string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    style: "currency",
  }).format(value);

const TeacherItem: React.FC<Teacher> = ({
  id,
  avatar,
  name,
  subject,
  bio,
  cost,
  whatsapp,
}) => {
  const createNewConnection = () => {
    api.post("connections", {
      user_id: id,
    });
  };
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço por hora
          <strong>{formatCurrency(+cost)}</strong>
        </p>
        <a
          onClick={createNewConnection}
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};
export default TeacherItem;
