import Axios from "axios";

export const getRooms = async () => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/get-habitaciones/${localStorage.getItem(
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
    console.error("Error al obtener los datos de las habitaciones:", error);
    return null;
  }
};

export const getComponents = async () => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/get-componentes/${localStorage.getItem(
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
    console.error("Error al obtener los datos de las habitaciones:", error);
    return null;
  }
};

export const getZona = async () => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/get-zona/${localStorage.getItem("id")}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener los datos de las habitaciones:", error);
    return null;
  }
};

export const findHabitacion = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/find-habitaciones/${localStorage.getItem(
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
    console.error("Error al obtener los datos de la habitacion", error);
    return null;
  }
};

export const findComponentes = async (nombreBuscar) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/find-componentes/${localStorage.getItem(
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
    console.error("Error al obtener los datos de la habitacion", error);
    return null;
  }
};

export const findZona = async (idZona) => {
  try {
    const response = await Axios.get(
      `http://localhost:4000/user-rooms/find-zona/${localStorage.getItem(
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
    console.error("Error al obtener los datos de la habitacion", error);
    return null;
  }
};
