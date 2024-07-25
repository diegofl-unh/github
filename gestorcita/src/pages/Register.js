import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
// funcion registro
function Register() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redireccionando a la pagina de inicio de sesión");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Algo no salio bien");
    }
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-2">
        <h1 className="card-title">Bienvenido - Ingrese sus datos </h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Nombre" name="name">
            <Input placeholder="Name" type="text" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button className="primary-button my-2" htmlType="submit">
            Registrarse
          </Button>

          <Link to="/login" className="anchor mt-2">
            Clic aqui si tienes una cuenta{" "}
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
