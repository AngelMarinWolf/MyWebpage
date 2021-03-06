import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LanguageSelectionService } from '../../services/language-selection.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  constructor( private _languageSelection: LanguageSelectionService ) { }

  ngOnInit() {
  }

}
