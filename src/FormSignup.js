import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>REGISTRASI MAHASISWA ITERA</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input id="username" type="text" name="username" className="form-input" placeholder="Masukkan username" onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="nim" className="form-label">
            NIM
          </label>
          <input id="nim" type="text" name="nim" className="form-input" placeholder="Masukkan NIM" onChange={handleChange} />
          {errors.nim && <p>{errors.nim}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" type="text" name="email" className="form-input" placeholder="Masukkan email ITERA" onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Nomor HP
          </label>
          <input id="phone" type="text" name="phone" className="form-input" placeholder="ex/: 080011112222" onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="address" className="form-label">
            Alamat
          </label>
          <input id="address" type="text" name="address" className="form-input" placeholder="Masukkan alamat" onChange={handleChange} />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input id="password" type="password" name="password" className="form-input" placeholder="Masukkan password" onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Konfirmasi Password
          </label>
          <input id="password2" type="password" name="password2" className="form-input" placeholder="Masukkan konfirmasi password" onChange={handleChange} />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
