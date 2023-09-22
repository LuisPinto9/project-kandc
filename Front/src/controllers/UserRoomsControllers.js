import Axios from "axios";
import { Swal } from "sweetalert2";

export const getRooms = async () => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/get-habitaciones/${localStorage.getItem(
        "id"
      )}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const getComponents = async () => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/get-componentes/${localStorage.getItem(
        "id"
      )}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const getZona = async () => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/get-zona/${localStorage.getItem("id")}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const findHabitacion = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/find-habitaciones/${localStorage.getItem(
        "id"
      )}/${nombreBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const findComponentes = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/find-componentes/${localStorage.getItem(
        "id"
      )}/${nombreBuscar}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};

export const findZona = async (idZona) => {
  try {
    const response = await Axios.get(
      `https://edificiokandc-7a4a0d2f7cde.herokuapp.com/user-rooms/find-zona/${localStorage.getItem(
        "id"
      )}/${idZona}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al obtener los datos",
      text: "Por favor intente ingresar más tarde.",
      icon: "error",
      showCancelButton: false,
      confirmButtonText: "Aceptar",
    });
    return null;
  }
};
