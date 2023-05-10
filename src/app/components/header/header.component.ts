import { AfterViewInit,AfterContentInit, OnInit,Component, ViewChild,HostListener ,Output ,EventEmitter} from '@angular/core';
import { ButtonService } from 'src/app/Services/button.service';
import {ElementRef,Renderer2} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('header', { static: true }) header!: ElementRef;
  @Output() SendHeaderHeight = new EventEmitter<string>();

  // header buttons
  buttons = [
    { icon: 'menu', isOpen: false ,menu_height : 0},
    { icon: 'shopping_cart', isOpen: false  ,menu_height : 0 },
    { icon: 'favorite', isOpen: false  ,menu_height : 0 },
    { icon: 'search', isOpen: false  ,menu_height : 0 },
    { icon: 'person', isOpen: false  ,menu_height : 0 },
    { icon: 'admin_desktop', isOpen: false  ,menu_height : 0 },
  ];

  // shopping cart mat badge
  hidden_mat_badge = false

  // REQUIREMENTS for toggle_buttons
  list_of_old_buttons : any[] = [];

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }
  ngAfterViewInit() {
    // get the header height and set it for all menus
    const header = this.el.nativeElement.querySelector('#FullHeader');
    if (header) {
      const headerHeight = header.offsetHeight;
      this.SendHeaderHeight.emit(`${headerHeight}px`);
    }
  }

  // toggle buttons algoritm
  toggle_button(button:any){

    // get the header height and set ti for all menues
    const header = this.el.nativeElement.querySelector('#header');
    const headerHeight = header.offsetHeight;
    this.buttons.forEach(button => {

      button.menu_height = window.innerHeight - headerHeight - 1
    });

    // toggle buttons
    this.list_of_old_buttons.push(button.icon)

    button.isOpen = !button.isOpen;

    if (button.isOpen){
      button.icon = 'close'
    }
    else{
      button.icon = this.list_of_old_buttons[0]
      this.list_of_old_buttons = []
    }
    if (this.list_of_old_buttons[1] != 'close' && this.list_of_old_buttons[1] ){
      this.buttons.forEach(buton => {
        if (buton.icon == "close"){
          buton.icon = this.list_of_old_buttons[0]
          buton.isOpen = false
        }

      });
      button.icon = 'close'
      button.isOpen = true
      var data = this.list_of_old_buttons[1]
      this.list_of_old_buttons = []
      this.list_of_old_buttons.push(data)
    }

    // mat badge toggle shopping cart
    if (this.buttons[1].icon == "close"){
      this.hidden_mat_badge = true
    }
    else{
      this.hidden_mat_badge = false
    }

    // for debugging
    console.log(this.list_of_old_buttons)

  }

  // newsletter dissapear on scroll
  display_newsletter = true

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollY = window.scrollY
    if (scrollY > 50){
      this.display_newsletter = false
    }
    else{
      this.display_newsletter = true
    }

  }

  // subscribe form toggle
  display_subscribe = false

  toggle_subs_form(){
    this.display_subscribe = !this.display_subscribe
    // get the header height and set it for all menus
    const header = this.el.nativeElement.querySelector('#FullHeader');
    if (header) {
      const headerHeight = header.offsetHeight;
      this.SendHeaderHeight.emit(`${headerHeight}px`);
    }
  }



}
