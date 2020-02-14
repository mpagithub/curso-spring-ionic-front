import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

}

// se vc omite o modificador public, por default, já é public
// Método de login, que por enquanto vai chamar a página de categoria
login() {
   this.navCtrl.setRoot('CategoriasPage');  // vamos usar o setRoot, que abre uma página sem empilhar
}
/* Para chamar categoria, vamos usar o navController que já está injetado logo acima
     No Ionic e no Angular, quando vc quer injetar uma instância de um objeto, em uma classe,
     basta vc declarar este objeto como parâmetro do construtor.
         
     o método push, impilha uma página em cima da outra, muito usado em aplicativos de dispositivos móveis.
     this.navCtrl.push('CategoriasPage');
*/
 
ionViewDidLoad() {
  this.menu.swipeEnable(false);
}
ionViewDidLeave() {
  this.menu.swipeEnable(true);
}
/* Aula 113 : Desabilitando o menu na página home. Quando queremos executar uma ação quando entra na página
   ou quando sai da página, devemos utilizar o “ionic lifecycle events”. Busque isso no google e entre no 
   link do NavController e procure os eventos. */


}
