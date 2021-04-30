const validateInfo = (values) => {
  let errors = {};
  let usernameDummy = ["angsaputih", "fahriskroepp", "dewakipas"];
  let emailDummy = ["angsa.118140901@student.itera.ac.id", "fahri.118140832@student.itera.ac.id", "dewa.120140469@student.itera.ac.id"];
  let nimDummy = ["118140901", "118140832", "120140469"];
  let phoneDummy = ["081372459090", "089790210212", "081988668080"];

  if (!values.username.trim()) {
    errors.username = "Username tidak boleh kosong";
  } else if (values.username) {
    for (const uDummy of usernameDummy) {
      if (uDummy === values.username) {
        errors.username = "Username sudah dipakai";
      }
    }
  }

  if (!values.email) {
    errors.email = "Email tidak boleh kosong";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email tidak valid";
  } else if (values.email.substring(values.email.indexOf("@") + 1) !== "student.itera.ac.id") {
    errors.email = "Email harus menggunakan email ITERA";
  } else if (values.email) {
    for (const eDummy of emailDummy) {
      if (eDummy === values.email) {
        errors.email = "Email sudah dipakai";
      }
    }
  }

  if (!values.nim) {
    errors.nim = "NIM tidak boleh kosong";
  } else if (!/^[0-9]*$/i.test(values.nim)) {
    errors.nim = "NIM tidak valid";
  } else if (values.nim) {
    for (const nDummy of nimDummy) {
      if (nDummy === values.nim) {
        errors.nim = "NIM sudah dipakai";
      }
    }
  }

  if (!values.phone) {
    errors.phone = "Nomor HP tidak boleh kosong";
  } else if (!/^[0-9]*$/i.test(values.phone)) {
    errors.phone = "Nomor HP tidak valid";
  } else if (values.phone) {
    for (const pDummy of phoneDummy) {
      if (pDummy === values.phone) {
        errors.phone = "Nomor HP telah dipakai";
      }
    }
  }

  if (!values.password) {
    errors.password = "Password tidak boleh kosong";
  } else if (values.password.length < 8) {
    errors.password = "Password harus terdiri dari 8 karakter atau lebih";
  }

  if (!values.password2) {
    errors.password2 = "Confirmation password tidak boleh kosong";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Confirmation password tidak cocok";
  }

  return errors;
};

export default validateInfo;
