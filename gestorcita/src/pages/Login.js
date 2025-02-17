import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onFinish = async (values) => {
    // console.log('valores recibido del formulario:', values);
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redireccionando a la pagina de principal");
        localStorage.setItem("token", response.data.data);
        navigate("/");
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
        <h1 className="card-title">Iniciar sesión</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" type="email" />
          </Form.Item>
          <Form.Item label="Contraseña" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button className="primary-button my-2" htmlType="submit">
            Login
          </Button>

          <Link to="/register" className="anchor mt-2">
            Clic aqui para crear una cuenta{" "}
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
