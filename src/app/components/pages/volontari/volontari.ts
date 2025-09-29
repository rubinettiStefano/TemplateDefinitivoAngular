import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Volontario} from '../../../../model/Volontario';
import { NgStyle} from '@angular/common';

@Component({
  selector: 'app-volontari',
  imports: [
    NgStyle
  ],
  templateUrl: './volontari.html',
  styleUrl: './volontari.css'
})
export class Volontari
{
  candidati:Volontario[] = [];
  volontario:Volontario | null = null;

  immaginiRuota:string[] =
    [
      "/ruotaFerma.png",
      "/ruotaFortuna.gif"
    ];

  ruotaGira:boolean=false;

  //@Autowired
  //HttpClient http;
  constructor(private http:HttpClient)
  {
    this.refresh();
  }

  chiamaVolontario()
  {
    this.ruotaGira=true;
    setTimeout(
      ()=>
      {
        this.ruotaGira=false;
      }
      ,10000
    );

    setTimeout(
      ()=>
      {

        if(confirm("È stato/a scelto/a "+this.volontario?.nominativo+", confermi?"))
          this.conferma();

        this.refresh();
      }
      ,15000
    );

    this.http.get<Volontario>("/api/volontario")
      .subscribe(
        resp=> {
          this.volontario = resp

          this.oscuraNonScelti();

        }

      );
  }

  conferma()
  {
    this.http.get("/api/volontario/"+this.volontario?.id).subscribe(()=>alert("CONFERMATO"));
  }

  refresh()
  {
    this.http.get<Volontario[]>("/api/candidati")
      .subscribe(
        resp=>
        {
          for(let v of resp)
            v.visible =true;
          this.candidati=resp;
        }


      );
  }



  oscuraNonScelti()
  {
    let indiceVolontario = this.candidati.findIndex(v=>v.nominativo==this.volontario?.nominativo);

    let indici = [];

    for(let i=0;i<this.candidati.length;i++)
      if(i!= indiceVolontario)
        indici.push(i);

    indici = indici.sort(() => Math.random() - 0.5);
    let counter = 0;
    setInterval(
      ()=>
      {
        this.candidati[indici[counter]].visible=false;
        //vai fino a che non termini array
        if(counter<indici.length-1)
          counter++;
      },10000/this.candidati.length
    );
  }
}
