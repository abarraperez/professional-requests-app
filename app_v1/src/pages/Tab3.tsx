import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonList, IonItem, IonLabel, IonThumbnail, IonButton, IonIcon } from '@ionic/react';
import { star, chatbubbleEllipsesOutline } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Cómo usar la app',
      image: 'https://dummyimage.com/100x100/000/fff',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Consejos para cuidadores',
      image: 'https://dummyimage.com/100x100/000/fff',
      rating: 4.8,
    },
    {
      id: 3,
      title: 'Guía de primeros auxilios',
      image: 'https://dummyimage.com/100x100/000/fff',
      rating: 4.2,
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Tutoriales/Guías</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {tutorials.map((tutorial) => (
            <IonItem key={tutorial.id}>
              <IonThumbnail slot="start">
                <img src={tutorial.image} alt={tutorial.title} />
              </IonThumbnail>
              <IonLabel>
                <h2>{tutorial.title}</h2>
                <p>
                  {Array.from({ length: 5 }, (_, i) => (
                    <IonIcon
                      key={i}
                      icon={star}
                      color={i < Math.floor(tutorial.rating) ? 'warning' : 'medium'}
                    />
                  ))}
                  <span style={{ marginLeft: '8px' }}>{tutorial.rating.toFixed(1)}</span>
                </p>
              </IonLabel>
              <IonButton slot="end" color="primary" routerLink="/preguntar">
                <IonIcon slot="start" icon={chatbubbleEllipsesOutline}></IonIcon>
                Preguntar
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;