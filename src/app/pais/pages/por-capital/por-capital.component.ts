import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino:string='';
  hayError:boolean=false;
  capitales:Country[]=[];

  constructor(private PaisService:PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.PaisService.buscarCapital(termino)
    .subscribe((capitales)=>{this.capitales=capitales},(err =>{
      this.hayError=true;
      this.capitales=[];
    }));
  }
}
