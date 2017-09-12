import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contatos:any[];

  constructor(public navCtrl: NavController, public service: ServiceProvider) {  }

  ngOnInit() {
    this.getDadosContatos();
  }

  getDadosContatos() {
    this.service.getContatos().subscribe(
      data=>this.contatos=data,
      err=>console.log(err)
    );
  }
}
