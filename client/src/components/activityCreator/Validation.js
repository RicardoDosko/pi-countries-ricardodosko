export const Validation = ({ name, duration }) => {
  const errors = {};

  if (!name) {
    errors.name = "Este campo no puede estar vacío";
  }
  if (name.length > 25) {
    errors.name =
      "El nombre de la actividad no puede superar los 25 caracteres";
  }
  if (name && !/^[A-Za-z0-9\s]+$/g.test(name)) {
    errors.name =
      "El nombre de la actividad no puede contener carácteres especiales";
  }
  // ? --------------------------------------------------------------------
  if (!duration) {
    errors.duration = "Este campo no puede estar vacío";
  }

  if (duration.length > 15) {
    errors.duration = "La duración no puede contener más de 15 caracteres";
  }

  if (duration && !duration.includes("horas")) {
    errors.duration = "Ingrese una duración en horas";
  }

  if (duration && !/^[A-Za-z0-9\s]+$/g.test(duration)) {
    errors.duration =
      "La duración de la actividad no puede contener carácteres especiales";
  }

  // ? --------------------------------------------------------------------

  return errors;
};
