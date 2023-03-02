import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Cadastrar  Pontos de Coleta",
    path: "/create",
    icon: <AiIcons.AiOutlinePlusSquare />,
    cName: "nav-text",
  },
  {
    title: "Cadastrar Parametros",
    path: "/createParameter",
    icon: <AiIcons.AiOutlinePlusSquare />,
    cName: "nav-text",
  },
  {
    title: "Listar Pontos",
    path: "/read",
    icon: <FaIcons.FaThList />,
    cName: "nav-text",
  },
  {
    title: "Listar Parametros",
    path: "/readParameter",
    icon: <FaIcons.FaThList />,
    cName: "nav-text",
  },
  {
    title: "Listar Todos",
    path: "/listAll",
    icon: <FaIcons.FaRegFileAlt />,
    cName: "nav-text",
  },

  {
    title: "Critérios de Violação",
    path: "/critery",
    icon: <FaIcons.FaExclamationCircle />,
    cName: "nav-text",
  },
];
