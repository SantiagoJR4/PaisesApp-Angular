import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones:string[]=[ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string='';

  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){

    if(region===this.regionActiva) return;

    this.regionActiva=region;
    this.paises=[];

    this.paisService.buscarRegion(region)
    .subscribe(paises=>this.paises=paises);
  }

  getClaseCSS(region:string):string{
    return (region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

}
