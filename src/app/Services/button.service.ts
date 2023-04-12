import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  buttons = [
    { icon: 'menu', isMenuOpen: false },
    { icon: 'shopping_cart', isMenuOpen: false },
    // Add more buttons here as needed
  ];

  toggle_menu(button:any){

    if (button.isMenuOpen){
      button.icon = 'menu'
    }
    else{
      button.icon = 'close'
    }
    button.isMenuOpen = !button.isMenuOpen;
  }

}
