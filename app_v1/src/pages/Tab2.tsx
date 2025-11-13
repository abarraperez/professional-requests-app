import { useState, useEffect } from 'react';
import {IonRow, IonGrid ,IonContent, IonSegment, IonThumbnail,IonSegmentButton ,IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonButton,IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonBadge, IonItem, IonLabel, IonList,  IonInfiniteScroll,
  IonInfiniteScrollContent,
  
  IonAvatar,
  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import  {call,  storefront}  from 'ionicons/icons';
const Tab2: React.FC = () => {

  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      if(i % 2 === 0)
        newItems.push(`Entrada de blog Aprende a preparar comida saludable ${1 + items.length + i}`);
      else if(i % 3 === 0)
        newItems.push(`Nueva guia de como levantar un adulto mayor pesado ${1 + items.length + i}`);
      else
        newItems.push(`Noticia nueva acerca de nuevos estudios acerca del alzhaimer, ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
        <IonButtons >
              <IonMenuButton></IonMenuButton>
          <IonTitle>Home</IonTitle>
        <IonButton color="danger"> <IonIcon slot="icon-only"  md={call}></IonIcon> </IonButton>

            </IonButtons>
        </IonToolbar>

      </IonHeader>
      <IonContent fullscreen>

      <IonCard>
      <img alt="Silhouette of mountains" src="https://media1.tenor.com/m/1nvJLGt5JsgAAAAC/disability-elderly.gif" />
      <IonCardHeader>
        <IonCardTitle>Recuerda hoy será un gran día!</IonCardTitle>
        <IonCardSubtitle>Hoy tienes lo siguiente agendado:</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent style={{ height: '200px', overflowY: "scroll" }}>
    
    <IonList>
    <IonItem> 
        <IonBadge slot="start" color="warning">09:30</IonBadge>
        <IonLabel> Sesion de Yoga 1 </IonLabel>
        <IonLabel slot="end" color="success" > Ver Guia</IonLabel>

      </IonItem> 

      <IonItem>
        <IonBadge slot="start">11:30</IonBadge>
        <IonLabel>Reunion con especialista 1 
        </IonLabel>
        <IonLabel slot="end" color="success" > <a href="https://meet.google.com/yqn-mbzv-qef">Ir</a></IonLabel>
       
      </IonItem>

      <IonItem>
        <IonBadge slot="start" color="danger">13:00</IonBadge>
        <IonLabel>Almuerzo 👵</IonLabel>
      </IonItem>

      <IonItem>
        <IonBadge slot="start" >15:00</IonBadge>
        <IonLabel>Reunion con especialista 2 </IonLabel>
        <IonLabel slot="end" color="success" > <a href="https://meet.google.com/yqn-mbzv-qef">Ir</a></IonLabel>

      </IonItem>

      <IonItem>
        <IonBadge slot="start" color="warning">17:00</IonBadge>
        <IonLabel> Tu hora personal </IonLabel>
      </IonItem>

      <IonItem>
        <IonBadge slot="start" color="danger">19:00</IonBadge>
        <IonLabel>Pildora Ejemplo - una cada 8hrs 💊 👵</IonLabel>
      </IonItem>
    </IonList>

      </IonCardContent>
    </IonCard>

    <IonToolbar>
          <IonTitle>
        <IonIcon icon={storefront}></IonIcon>
        Productos Recomendados 
          </IonTitle>
        </IonToolbar>
    <IonSegment scrollable={true} value="heart">
      <IonSegmentButton value="home">
      <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfz8t9vkj31jyUh7gwjkEgH8-iNjlejw4EA&s" />
            </IonThumbnail>
            <IonLabel> Producto 1, $1.000</IonLabel>
          </IonItem>

      </IonSegmentButton>
      <IonSegmentButton value="home">
      <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://m.media-amazon.com/images/I/816MwBIIO-L.jpg" />
            </IonThumbnail>
            <IonLabel> Producto 1, $1.000</IonLabel>
          </IonItem>

      </IonSegmentButton>
      <IonSegmentButton value="home">
      <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3H8QYoAEK63CrlAhKO-eddgIh_O_RrTd0Q&s" />
            </IonThumbnail>
            <IonLabel> Producto 1, $1.000</IonLabel>
          </IonItem>

      </IonSegmentButton>
    </IonSegment>

    <IonGrid>
        <IonRow>
        <IonList>

    <IonTitle>
        <IonIcon icon={storefront}></IonIcon>
        Ultimas Novedades 
          </IonTitle>
        {items.map((item, index) => (
          <IonItem key={item}>
            
            <IonThumbnail slot="start">
              <img alt="avatar"  src={'https://picsum.photos/80/80?random=' + index}/>
            </IonThumbnail>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>

        </IonRow>
      </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
