import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { add, calendarOutline } from 'ionicons/icons';
import './Tab5.css';

const Tab5: React.FC = () => {
  const userAgenda = [
    {
      id: 1,
      title: 'Dar comida al paciente',
      type: 'Propio',
      time: '08:00 AM',
    },
    {
      id: 2,
      title: 'Poner insulina',
      type: 'Propio',
      time: '12:00 PM',
    },
    {
      id: 3,
      title: 'Revisión médica',
      type: 'Asignado',
      time: '03:00 PM',
    },
    {
      id: 4,
      title: 'Terapia física',
      type: 'Asignado',
      time: '05:00 PM',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Agenda</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {userAgenda.map((event) => (
            <IonItem key={event.id} className={`event-item ${event.type === 'Propio' ? 'own-event' : 'assigned-event'}`}>
              <IonLabel>
                <h2>{event.title}</h2>
                <p>Tipo: {event.type}</p>
                <p>Hora: {event.time}</p>
              </IonLabel>
              <IonIcon slot="end" icon={calendarOutline} />
            </IonItem>
          ))}
        </IonList>
        <div className="create-event-button">
          <IonButton expand="block" color="primary" routerLink="/crear-evento">
            <IonIcon slot="start" icon={add}></IonIcon>
            Crear Nuevo Evento
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;