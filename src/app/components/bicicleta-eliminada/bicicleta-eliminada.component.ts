import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export class BicicletaEliminada {
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
  selector: 'app-bicicleta-eliminada',
  templateUrl: './bicicleta-eliminada.component.html',
  styleUrls: ['./bicicleta-eliminada.component.css']
})
export class BicicletaEliminadaComponent implements OnInit {
  DataBicicletaEliminada: BicicletaEliminada | undefined;
  errors: null | undefined;

  constructor( public authService: AuthService, private rutaActiva: ActivatedRoute, public router: Router, private toastr : ToastrService) {
    this.authService.getBicicleta( this.rutaActiva.snapshot.params.id ).subscribe( (data: any) => {
      this.DataBicicletaEliminada = data;
    },
    error => {
      this.errors = error.console.errors;
    }
    )
  }

  ngOnInit(): void {
  }

  restaurarBicicleta(id: number | undefined): void {
    this.authService.putRestaurarBicicletaEliminada(Number(id)).subscribe(
      result => {
        this.router.navigate(['bicicletasEliminadas']).then(() => {
          this.toastr.success(result, 'Bicicleta Restaurada');
        });
      },
      error => {
        this.toastr.error("Error al Restaurar bicicleta", 'Error');
      },
    );
  }

}