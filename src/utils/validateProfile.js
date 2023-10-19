const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const validateMail = (target, name, value) => {
  if (name === "email" && value.length === 0) {
    target.setCustomValidity("");
    return false;
  } else if (name === "email" && !re.test(value)) {
    target.setCustomValidity("Email введен неверно");
    return false;
  } else if (name === "email" && re.test(value)) {
    target.setCustomValidity("");
    return true;
  }
};

const validateName = (target, name, value) => {
  if (name === "name" && value.length <= 2) {
    target.setCustomValidity("Имя должно быть больше 2 символов");
    return false;
  } else if (name === "name" && value.length > 30) {
    target.setCustomValidity("Имя должно быть меньше 30 символов");
    return false;
  } else {
    target.setCustomValidity("");
    return true;
  }
};

export { validateMail, validateName };
