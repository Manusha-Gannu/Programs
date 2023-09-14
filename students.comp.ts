import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students: any[] = [
    { 
      name: 'A', 
      email: 'a@gmail.com', 
      marks: 85 
    },
    { 
      name: 'B', 
      email: 'b@gmail.com', 
      marks: 90
    },
    {
       name: 'C', 
       email: 'c@gmail.com', 
       marks: 78 
    },
    { 
      name: 'D', 
      email: 'd@gmail.com', 
      marks: 55 
    },
    { 
      name: 'E', 
      email: 'e@gmail.com', 
      marks: 35 
    },
    { 
      name: 'F', 
      email: 'f@gmail.com', 
      marks: 78
    },
    { 
      name: 'G', 
      email: 'g@gmail.com', 
      marks: 97 
    },
    { 
      name: 'H', 
      email: 'h@gmail.com', 
      marks: 82 
    },
    { 
      name: 'I', 
      email: 'i@gmail.com', 
      marks: 48 
    },
    { 
      name: 'J', 
      email: 'j@gmail.com', 
      marks: 74 
    },
    
  ];

  filteredStudents: any[] = [];
  students1: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredStudents = this.students;
    this.students1 = this.students;
  }

  greaterThan80() {
    this.students1 = this.students.filter(student => student.marks > 80);
    console.log(this.students)
    
  }

  between50To100() {
    this.students1 = this.students.filter(student => student.marks >= 50 && student.marks <= 100);
    console.log(this.students)
  }
}
