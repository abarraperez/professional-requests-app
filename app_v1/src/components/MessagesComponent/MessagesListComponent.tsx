import {
    IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonRow,
  } from '@ionic/react';
 // import { Math } from 'ts-math';
const MessagesListComponent: 
    //React.FC = (setIsSeenMessage) => {
    React.FC<{ setIsSeenMessage: (value: boolean) => void }> = ({ setIsSeenMessage }) => {
    const numeroAleatorio =Math.floor( Math.random()  * 50) + 1;
    const handleItemClick = () => {
        setIsSeenMessage(true);
      };
    return (
        <div>
             <IonItem>
        <IonSelect label="Ordenar por" placeholder="Mas recientes">
          <IonSelectOption value="apple">Mas recientes primero</IonSelectOption>
          <IonSelectOption value="banana">Mas antiguos primero</IonSelectOption>
          <IonSelectOption value="orange">No leidos primero</IonSelectOption>
        </IonSelect>
      </IonItem>

          <IonCard>
      <IonCardHeader>
        <IonCardTitle>Ultimos mensajes recibidos</IonCardTitle>
        <IonCardSubtitle>Recuerda revisar tus mensajes!

        </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
        

        <IonItem color="success" onClick={handleItemClick}>
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                     <b>📌 Asistencia Inmediata</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem> 
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
           

            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>

            <IonItem>
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem>
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem>
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
            
            <IonItem >
                <IonThumbnail slot="start">
                    <img alt="Silhouette of mountains" src={"https://randomuser.me/api/portraits/women/"+(Math.floor( Math.random()  * 50) + 1)+".jpg"}
                />
                </IonThumbnail>
                <IonLabel>
                    <IonRow>
                        <b>Especialista Ejemplo Uno</b>
                    </IonRow>
                    <IonRow>
                        <p> {'>>'} "Hola recuerda que tienes Mensaje de ejemplo"</p>
                        <IonCardSubtitle>10:30 am</IonCardSubtitle>
                    </IonRow>
                </IonLabel>
            </IonItem>
         
        </IonList>
      </IonCardContent>
    </IonCard>
        </div>
    );
    };

    export default MessagesListComponent;