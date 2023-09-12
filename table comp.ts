import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'feapp';
  constructor(){
    this.getData();
  }

  array:any = [
    {
      Name:"A",
      Address:"Add1",
      Email:"a@gmail.com"
    },
    {
      Name:"B",
      Address:"Add2",
      Email:"b@gmail.com"
    },
    {
      Name:"C",
      Address:"Add3",
      Email:"c@gmail.com"
    },
    {
      Name:"D",
      Address:"Add4",
      Email:"d@gmail.com"
    },
    {
      Name:"E",
      Address:"Add5",
      Email:"e@gmail.com"
    },
  ];
  tabKey:any = [];
  tabValue:any = [];
  getData(){
   this.array.forEach((element:any) =>{
    console.log(element)
   
   });

  }
}
