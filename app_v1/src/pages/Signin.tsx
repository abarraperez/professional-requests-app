import React, { useState , useEffect  } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonRow, IonCol, IonIcon, IonImg  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { personCircle, push } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Signin.css';

const Signin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('null');

  const history = useHistory();

  useEffect(() => {
    console.log('ErrorMsg actualizado:', errorMsg);
  }, [errorMsg]); // Se ejecutará cada vez que errorMsg cambie
  useEffect(() => {
    console.log('Username:', username);
    console.log('Password:', password);
  }, [username, password]);
  const handleLogin = (e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {  
    // Aquí puedes agregar la lógica de autenticación
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);  
    axios.post('http://localhost:8080/auth', { 'usr':username, 'pwd':password })
      .then((res) => {
        console.log('Respuesta del servidor:', res.data);
        // Guarda el token en el local storage
        localStorage.setItem('token', res.data.token);
        // Redirecciona a la página de tab2
        history.push('/tab2');
      })
      .catch((err) => {
        console.log('Error:', err.response.data.mensaje);
        setErrorMsg( err.response.data.mensaje);
        //setErrorMsg(err.response.data.message);
      });


  };

  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen class='company-background' >
     
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Logo de la aplicación */}
        <IonRow>
            <IonCol>
                <h1 style={{ fontSize: "xx-large", marginLeft: "10%" }}>Bienvenida Cuidadora!</h1>
            </IonCol>
        </IonRow>   
        {/* Logo de la aplicación */} 
 


        <IonRow style={{ marginBottom: '80px' }}>
        <IonCol>
            <IonIcon
                style={{ fontSize: "70px",  marginLeft: "40%", color: "#ED8C2B"}}
                icon={personCircle}
               
            />
        </IonCol>
      </IonRow>
        {/* Formulario de inicio de sesión */}
        <IonInput
          type="text"
          placeholder="Usuario"
          value={username}
          onIonChange={(e) => setUsername(e.detail.value!)}
        />
         <IonInput
             type="password"
              placeholder="Contraseña"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
             />
        <IonRow>
            <IonCol>
                <p style={{ fontSize: "small", marginLeft: "15%" }}>
                    Haciendo click en LOGIN tu aceptas nuestra <a href="#">Politica</a>
                </p>
               
                <IonButton expand="full" onClick={handleLogin} color="warning" style={{background:"#ED8C2B", color: "#fff" }}>
                    Iniciar sesión
                </IonButton>
                { <p style={{ color: 'red' }}>{errorMsg}</p>}

                <p style={{ fontSize: "medium", marginLeft: "20%"  }}>
                    No tienes una cuenta? <a href="#">Registrate!</a>
                </p>
            </IonCol>
        </IonRow>     
        <IonRow>
            <IonCol>
                <IonImg src="assets/logo.png" style={{marginRight:"100px", marginLeft: "20%" }}/>
            </IonCol>
        </IonRow>  
      </IonContent>
    </IonPage>
  );
};

export default Signin;
