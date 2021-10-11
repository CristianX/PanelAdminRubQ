import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

// Interface de  bicicletas
export class BicicletasEliminadas {
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
  selector: 'app-bicicletas-eliminadas',
  templateUrl: './bicicletas-eliminadas.component.html',
  styleUrls: ['./bicicletas-eliminadas.component.css']
})
export class BicicletasEliminadasComponent implements OnInit {
  DataBicicletasEliminadas: BicicletasEliminadas[] | undefined;
  errors: null |  undefined;

  constructor( public authService: AuthService ) {
    this.authService.getBicicletasEliminadas().subscribe( ( data: any ) =>{
      this.DataBicicletasEliminadas = data;
    },
    error => {
      this.errors = error.error.errors;
    }
    )
  }

  ngOnInit(): void {
  }

}
