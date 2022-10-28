import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Country;

  constructor(private activatedRoute:ActivatedRoute,
    private paisService:PaisService) { }

  ngOnInit(): void {

    //Se utilizó para sacar el id del url y mandarlo por parametro

    this.activatedRoute.params
    .pipe(
      switchMap( ({id} )=>this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe(pais=>this.pais=pais[0])


    // this.activatedRoute.params
    // .subscribe(({id})=>{
    //   console.log(id);

    //   this.paisService.getPaisPorAlpha(id)
    //   .subscribe(pais=>{
    //     console.log(pais);
    //   })

    // });
  }

}
