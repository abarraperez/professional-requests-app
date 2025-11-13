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
  const [errorMsg, setErrorMsg] = useState('');

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
        setErrorMsg( "Error, usuario o contraseña incorrectos!");
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
      <div style={{ background: '#ED8C2Bz ', position: 'relative', height: '100vh' }}>
        {/* SVG para la onda */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: -1 }}
        >

    <path
      fill="#ED8C2B"
      fill-opacity="1"
      d="M0,0L40,26.7C80,53,160,107,240,144C320,181,400,203,480,192C560,181,640,139,720,128C800,117,880,139,960,160C1040,181,1120,203,1200,192C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
      <IonContent fullscreen class='company-background' >
     
   
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
                { <p style={{ color: 'red', marginLeft: '60px' }}>{errorMsg}</p>}

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
      </div>
      
    </IonPage>
  );
};

export default Signin;
