import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Profile } from "../../interface/textinfo";
import { LanguageSelectionService } from '../../services/language-selection.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

  private profile: Profile =
  {
    value_en: "I was working as SysAdmin for two years and one year involved in DevOps projects, I am a AWS architect designer and a Linux diffuser and promoter, using technologies like NGINX, Apache, PHP, Puma, NodeJS, Ruby, Docker, CircleCI, Jenkins, Google Cloud and Amazon AWS, I help to build cloud-native applications faster, agile, secure, with high performance, high scalability, and high availability.",
    value_es: "He trabajado como SysAdmin por dos años y el último año estuve involucrado en proyectos para DevOps, Soy un diseñador de arquitecturas en Amazon AWS y un difusor y promotor de los Sistemas Operativos Linux, usando tecnologías como NGINX, Apache, PHP, Puma, NodeJS, Ruby, Docker, CircleCI, Jenkins, Google Cloud y Amazon AWS, con la finalidad de construir aplicaciones nativas en la nube de forma rápida, ágil, segura, altamente eficiente, escalable y con alta disponibilidad."
  };

  private skills: any[] =
  [
    {
      name: "Linux",
      value: 75
    },
    {
      name: "Amazon Web Service",
      value: 60
    },
    {
      name: "NGINX",
      value: 70
    },
    {
      name: "Docker",
      value: 50
    },
    {
      name: "CircleCI",
      value: 85
    },
    {
      name: "Bash Shell",
      value: 80
    }
  ];

  constructor( private _languageSelection: LanguageSelectionService ) {

  }

  ngOnInit() {

  }

}
