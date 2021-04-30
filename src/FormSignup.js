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
          <input id="username" type="text" name="username" className="form-input" placeholder="Masukkan username" value={values.username} onChange={handleChange} />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="nim" className="form-label">
            NIM
          </label>
          <input id="nim" type="text" name="nim" className="form-input" placeholder="Masukkan NIM" value={values.nim} onChange={handleChange} />
          {errors.nim && <p>{errors.nim}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input id="email" type="email" name="email" className="form-input" placeholder="Masukkan email ITERA" value={values.email} onChange={handleChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Nomor HP
          </label>
          <input id="phone" type="text" name="phone" className="form-input" placeholder="ex/: 080011112222" value={values.phone} onChange={handleChange} />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="address" className="form-label">
            Alamat
          </label>
          <input id="address" type="text" name="address" className="form-input" placeholder="Masukkan alamat" value={values.address} onChange={handleChange} />
          {errors.address && <p>{errors.address}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input id="password" type="password" name="password" className="form-input" placeholder="Masukkan password" value={values.password} onChange={handleChange} />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Konfirmasi Password
          </label>
          <input id="password2" type="password" name="password2" className="form-input" placeholder="Masukkan konfirmasi password" value={values.password2} onChange={handleChange} />
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
