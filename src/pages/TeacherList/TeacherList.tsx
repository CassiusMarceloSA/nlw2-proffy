import React, { useState, useEffect, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";

const TeacherList = () => {
  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");
  const [teachers, setTeachers] = useState([]);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();
    const { data: teachers } = await api.get("classes", {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    setTeachers(teachers);
  };

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={(e) => searchTeachers(e)}>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>
      <main>
        {teachers.map(
          ({ id, avatar, name, subject, bio, cost, whatsapp }, index) => (
            <TeacherItem
              avatar={avatar}
              name={name}
              subject={subject}
              cost={cost}
              bio={bio}
              whatsapp={whatsapp}
              id={id}
              key={index}
            />
          )
        )}
      </main>
    </div>
  );
};

export default TeacherList;
