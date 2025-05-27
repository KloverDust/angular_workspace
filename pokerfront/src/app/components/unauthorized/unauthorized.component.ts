import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div class="unauthorized">
      <h2>Accesso non autorizzato</h2>
      <p>Non hai i permessi necessari per accedere a questa pagina.</p>
    </div>
  `,
  styles: [`
    .unauthorized {
      text-align: center;
      padding: 2rem;
    }
  `]
})
export class UnauthorizedComponent {}