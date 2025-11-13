import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonMenuButton, IonButtons, IonButton, IonIcon, IonList, IonItem, IonLabel } from '@ionic/react';
import { call, storefront, mic } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  const voiceNotes = [
    { id: 1, title: 'Nota de voz 1', timestamp: '2023-10-01 10:00 AM' },
    { id: 2, title: 'Nota de voz 2', timestamp: '2023-10-02 11:30 AM' },
  ];

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
            <IonTitle>Bitacoras de Voz</IonTitle>
            <IonButton color="danger">
              <IonIcon slot="icon-only" md={call}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
  <div className="voice-notes-container">
    <div className="center-button">
      <IonButton shape="round" color="danger" size="large">
        <IonIcon slot="icon-only" icon={mic}></IonIcon>
      </IonButton>
    </div>
    <IonList>
      {voiceNotes.map((note) => (
        <IonItem key={note.id}>
          <IonLabel>
            <h2>{note.title}</h2>
            <p>{note.timestamp}</p>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  </div>
</IonContent>
    </IonPage>
  );
};

export default Tab1;