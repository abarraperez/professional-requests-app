import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonIcon, IonBadge, IonThumbnail } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
  const specialists = [
    {
      id: 1,
      name: 'Dr. Juan Pérez',
      career: 'Medicina General',
      specialty: 'Cardiología',
      appointments: 5,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      id: 2,
      name: 'Dra. Ana López',
      career: 'Psicología',
      specialty: 'Terapia Familiar',
      appointments: 3,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      id: 3,
      name: 'Dr. Carlos García',
      career: 'Medicina Interna',
      specialty: 'Endocrinología',
      appointments: 8,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      id: 4,
      name: 'Dra. María Fernández',
      career: 'Enfermería',
      specialty: 'Cuidados Intensivos',
      appointments: 2,
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Especialistas Disponibles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {specialists.map((specialist) => (
            <IonItem key={specialist.id}>
              <IonThumbnail slot="start">
                <img alt={`Foto de ${specialist.name}`} src={specialist.image} />
              </IonThumbnail>
              <IonLabel>
                <h2>{specialist.name}</h2>
                <p>Carrera: {specialist.career}</p>
                <p>Especialidad: {specialist.specialty}</p>
              </IonLabel>
              <IonBadge color="success" slot="end">
                {specialist.appointments} citas
              </IonBadge>
              <IonButton slot="end" color="primary" routerLink="/agendar">
                <IonIcon slot="start" icon={calendarOutline}></IonIcon>
                Agendar
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;