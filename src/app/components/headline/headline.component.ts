import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeadlineComponent implements OnInit {

  private employment_in:boolean = true;
  private employment:string[] = ['SysAdmin','DevOps','AWS Engineer'];
  private employment_display:string = "SysAdmin";
  public num:number = 0;

  constructor() {
    setInterval(() => {
      this.employment_display = this.employment[this.num.valueOf()];
      this.employment_in = true;
      setTimeout(() => {
        this.employment_in = false;
      }, 1000);
      if (this.num == this.employment.length - 1 ) {
          this.num = -1;
      }
      this.num += 1;
    }, 2000);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

}
