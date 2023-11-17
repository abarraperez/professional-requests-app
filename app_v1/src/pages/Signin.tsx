import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonRow, IonCol, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { personCircle } from 'ionicons/icons';

import './Tab1.css';

const Signin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Username:', username);
    console.log('Password:', password);
    // Agrega la lógica de autenticación aquí
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
     
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonRow>
        <IonCol>
            <IonIcon
                style={{ fontSize: "70px", color: "#0040ff", marginLeft: "40%" }}
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
               
                <IonButton expand="full" onClick={handleLogin}>
                    Iniciar sesión
                </IonButton>
                <p style={{ fontSize: "medium", marginLeft: "20%"  }}>
                    No tienes una cuenta? <a href="#">Registrate!</a>
                </p>
            </IonCol>
        </IonRow>       
      </IonContent>
    </IonPage>
  );
};

export default Signin;
