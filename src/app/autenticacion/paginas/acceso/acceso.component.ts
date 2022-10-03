import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styles: [],
})
export class AccesoComponent implements OnInit {
  public Nombre: string = '';
  public Pass: string = '';
  constructor(private _logearseService: AutenticacionService) {}

  Log = {
    Nombre: '',
    Pass: '',
  };

  ngOnInit(): void {}
  logearse(e: Event) {
    this._logearseService
      .logearse(this.Log.Nombre, this.Log.Pass)
      .subscribe((res) => {
        if (res.succeeded) {
          alert(res.data.nombreCompleto);
        } else {
          alert('Datos login incirrectos');
        }
      });
  }
}
