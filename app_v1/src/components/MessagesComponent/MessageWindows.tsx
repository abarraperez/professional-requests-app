import React, { useState } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonIcon,
  IonThumbnail,
} from '@ionic/react';
import { send } from 'ionicons/icons';
import './MessageWindows.css';

const MessageWindows: React.FC<{ setIsSeenMessage: (value: boolean) => void }> = ({ setIsSeenMessage }) => {
  // Mensajes iniciales
  const initialMessages = [
    { text: 'Hola, ¿cómo estás? ¡Tanto tiempo!', mine: false },
    { text: 'Estoy bien, gracias. ¿Y tú?', mine: true },
  ];
  const handleItemClick = () => {
    setIsSeenMessage(false);
  };
  const [messages, setMessages] = useState<{ text: string; mine: boolean }[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, mine: true }]);
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <p onClick={handleItemClick}  slot="start">🡐</p>  
          <IonThumbnail slot="end">
          <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="Profile" style={{ borderRadius: '50%' }} />
          </IonThumbnail>
          <IonTitle>Especialista de ejemplo 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {messages.map((message, index) => (
            <IonItem key={index} className={`chat-message ${message.mine ? 'mine' : 'other'}`}>
              <IonLabel>{message.text}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonInput
            value={newMessage}
            placeholder="Escribe un mensaje..."
            onIonChange={(e) => setNewMessage(e.detail.value!)}
          />
          <IonButton slot="end" onClick={handleSend}>
            <IonIcon icon={send} />
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default MessageWindows;
