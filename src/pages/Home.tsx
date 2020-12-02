import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';

import './Home.css';

const Home: React.FC = () => {


        
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bellwether Coffee</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Bellwether Coffee</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
