import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

//appConfig fa riferimento alla configurazione principale del progetto -> verrà iniettato dentro index.html
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
