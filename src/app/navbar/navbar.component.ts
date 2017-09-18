import { Component, AfterViewInit } from "@angular/core";
import * as $ from 'jquery';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})

export class NavbarComponent implements AfterViewInit {
  
  constructor() { 

  }

  ngAfterViewInit() {
    $(document).ready(function(){
      var scrollTop = 0;
      $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        
        if (scrollTop >= 200) {
          $('#nav').addClass('bg-danger');
        } else if (scrollTop < 200) {
          $('#nav').removeClass('bg-danger');
        } 
        
      }); 
      
    });

  }
}
