import { IonApp, IonButton, IonCol, IonGrid, IonHeader, IonIcon, IonInput,IonCard, IonCardContent, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {calculatorOutline, refreshOutline} from 'ionicons/icons';
import {useRef, useState} from "react";

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

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [calculatedBMI, setCalculatedBMI] = useState<number>();
  const[evaluasi, setevaluasi] = useState<string>();
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;

    if (!enteredHeight || !enteredWeight) return;
    

    const bmi = +enteredWeight / (+enteredHeight/100 * +enteredHeight/100);

    setCalculatedBMI(bmi);
    if (bmi<=18.5) {
      setevaluasi("kurus")
    } else if (bmi<=24.9) {
      setevaluasi("normal")
    } else if (bmi<=29.9) {
      setevaluasi("gemuk")
    } else if (bmi>30) {
      setevaluasi("obesitas")
    }

  };
  


  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
  };

  return(
<IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
 <IonGrid>
   <IonRow>
     <IonCol>
       <IonItem>
         <IonLabel position="floating">Tinggi Badan (cm)</IonLabel>
         <IonInput ref={heightInputRef}></IonInput>
       </IonItem>
     </IonCol>
   </IonRow>
   <IonRow>
     <IonCol>
       <IonItem>
         <IonLabel position="floating">Berat Badan (kg)</IonLabel>
         <IonInput ref={weightInputRef}></IonInput>
       </IonItem>
     </IonCol>
     </IonRow>
   <IonRow>
     <IonCol className="ion-text-left">
      <IonButton onClick={calculateBMI}>
        <IonIcon slot="Start" icon={calculatorOutline}></IonIcon>
        calculate
      </IonButton>
     </IonCol>
    <IonCol className ="ion-text-right">
      <IonButton onClick={resetInputs}>
        <IonIcon slot="Start" icon={refreshOutline}></IonIcon>
        Reset
      </IonButton>
    </IonCol>
    </IonRow>

    {calculatedBMI && (
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardContent className="ion-text-center">
                    <h2>{calculatedBMI}</h2>
                  </IonCardContent>
                  <IonCardContent className="ion-text-center">
                    <h1>{evaluasi}</h1>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          )}
   </IonGrid>  
</IonApp>
  )
  };

export default App;

