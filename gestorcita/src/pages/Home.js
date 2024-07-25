import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Home() {
  const getData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No se encontró el token en localStorage.");
        return;
      }

      const response = await axios.post(
        "/api/user/get-user-info-by-id",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
}

export default Home;
