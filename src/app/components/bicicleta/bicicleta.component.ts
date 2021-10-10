import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { ActivatedRoute, Params } from '@angular/router';

export class Bicicleta {
  "id": number;
  "NUMEROSERIE_BICICLETA": string;
  "IDENTIFICACION_USUARIO": string;
  "MARCA_BICICLETA": string;
  "MODELO_BICICLETA": string;
  "CATEGORIA_BICICLETA": string;
  "TIPOBICICLETA_BICICLETA": string;
  "TAMANIO_BICICLETA": string;
  "COMBCOLORES_BICICLETA": string;
  "ESPEC_BICICLETA": string;
  "FOTOFRONTAL_BICICLETA": string;
  "FOTOCOMPLETA_BICICLETA": string;
  "FOTONUMSERIE_BICICLETA": string;
  "FOTOCOMP_BICICLETA": string;
  "APODERADO_BICICLETA": string;
  "RAZONSOCIAL_BICICLETA": string;
  "RUC_BICICLETA": string;
  "FOTOFACTURA_BICICLETA": string; 
  "DESCUSADA_BICICLETA": string;
  "NOMBUSADA_BICICLETA": string;
  "ACTIVAROBADA_BICICLETA": number;
  "FOTODENUNCIA_BICICLETA": string;
  "CODREGISTRO_BICICLETA": string;
  "ESTADO_BICICLETA": number;
}

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.css']
})
export class BicicletaComponent implements OnInit {
  DataBicicleta: Bicicleta | undefined;
  errors: null | undefined;

  constructor( public authService: AuthService, private rutaActiva: ActivatedRoute) {
    this.authService.getBicicleta( this.rutaActiva.snapshot.params.id ).subscribe((data: any) => {
      this.DataBicicleta = data;
    },
    error => {
      this.errors = error.console.errors;
      
    }
    )
  }

  ngOnInit(): void {
  }

}
