import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonFab, 
  IonFabButton,
  IonHeader,
  IonMenu, 
  IonMenuButton,
  IonPage, IonTitle, IonToolbar, IonContent, IonModal, IonButton, IonButtons,
  IonItem,
  IonList,
  IonBadge
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { ellipse, square, triangle, home, people, storefront, add, mail,  playCircle, calendar, mic,     } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Signin from './pages/Signin';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import MessagesListComponent from './components/MessagesComponent/MessagesListComponent';
import MessageWindows from './components/MessagesComponent/MessageWindows';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () =>{

 
const [isOpen, setIsOpen] = useState(false);
const [isSeenMessage, setIsSeenMessage] = useState(false);
return (
  
  <IonApp style={{backgroundColor:"#ED8C2B"}}>
    
    <IonReactRouter >
    
    <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content2</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent className="ion-padding">
       
        </IonContent>
      </IonMenu>
      <IonRouterOutlet >
          <Route path="/singin">
              <Signin />
          </Route>
          <Route exact path="/">
            <Redirect to="/singin" />
          </Route>

      <IonTabs>
        
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route path="/tab5">
            <Tab5 />
          </Route>
        </IonRouterOutlet>
        
        <IonTabBar slot="bottom">
          
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon aria-hidden="true" icon={calendar} />
            <IonLabel>Agenda</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={people} />
            <IonLabel>Especialistas</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
        
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={playCircle} />
            <IonLabel>Guias</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={mic} />
            <IonLabel>Bitacora</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      </IonRouterOutlet>
    </IonReactRouter>
    <IonFab  slot="fixed"  horizontal="end" style={{ marginTop: "700px" }}>
      <IonFabButton>
        <IonIcon icon={mail}  onClick={() => setIsOpen(true)}></IonIcon>
      </IonFabButton>
    </IonFab>
    <IonModal isOpen={isOpen} >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Mensajes</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {
              !isSeenMessage 
              ?
              <MessagesListComponent setIsSeenMessage={setIsSeenMessage}/>
              :
              <MessageWindows  setIsSeenMessage={setIsSeenMessage}/>

            }
          </IonContent>
        </IonModal>
  </IonApp>
)};

export default App;
