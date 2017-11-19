import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Section } from "../../../class/section";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  private sections: Section[] = [
    {key_en: "About",key_es: "Acerca de",value: "about"},
    {key_en: "Expirience",key_es: "Experiencia",value: "expirience"},
    {key_en: "Education",key_es: "Educación",value: "education"},
    {key_en: "Projects",key_es: "Proyectos",value: "projects"},
    {key_en: "Blog",key_es: "Blog",value: "blog"},
    {key_en: "Contact",key_es: "Contacto",value: "contact"}
  ];

  private change_lenguage: boolean = true;

  constructor() {

  }

  ngOnInit() {
  }

}
