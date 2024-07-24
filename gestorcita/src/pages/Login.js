import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const navigate = useNavigate();

  const onFinish = async(values) => {
    // console.log('valores recibido del formulario:', values);
    try {
      const response = await axios.post('/api/user/login', values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redireccionando a la pagina de principal");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Algo no salio bien");
    }

  }
  return (
    <div className='authentication'>
     <div className='authentication-form card p-2'> 
      <h1 className='card-title'>Iniciar sesión</h1>
      <Form layout='vertical' onFinish={onFinish}>

        <Form.Item label='Email' name ='email'>
          <Input placeholder='Email' type='email'/>
        </Form.Item>
        <Form.Item label='Contraseña' name ='password'>
          <Input placeholder='Password' type='password'/>
        </Form.Item>

        <Button className='primary-button my-2' htmlType ='submit'>Login</Button>

        <Link to='/Registro' className='anchor mt-2'>Clic aqui para crear una cuenta </Link>

      </Form>
     </div>
    </div>  
)
}

export default Login