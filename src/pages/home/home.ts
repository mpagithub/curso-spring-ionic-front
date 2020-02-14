import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

}

  // se vc omite o modificador public, por default, já é public
  // Método de login, que por enquanto vai chamar a página de categoria
  login() {
      /* Para chamar categoria, vamos usar o navController que já está injetado logo acima
         No Ionic e no Angular, quando vc quer injetar uma instância de um objeto, em uma classe,
         basta vc declarar este objeto como parâmetro do construtor.
         
         o método push, impilha uma página em cima da outra, muito usado em aplicativos de 
         de dispositivos móveis.
         this.navCtrl.push('CategoriasPage');
     */
     
     this.navCtrl.setRoot('CategoriasPage');  // vamos usar o setRoot, que abre uma página sem empilhar
   
  }
 


}
