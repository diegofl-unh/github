import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
// funcion registro
function Register() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      console.log("Response:", response.data); // Log de respuesta
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redireccionando a la página de inicio de sesión");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error("Error:", error); // Log de error
      toast.error("Algo no salió bien");
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
