import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  filter: "all" | "active" | "done" = "all"; 

  allItems = [
    { description: "Desayunar", done: false },
    { description: "Revisar correo electrónico", done: false },
    { description: "preparar almuerzo", done: false },
    { description: "Trabajar un rato", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) => {
      return this.filter === "done" ? item.done : !item.done;
    });
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item: any) {
    const index = this.allItems.indexOf(item);
    if (index !== -1) {
      this.allItems.splice(index, 1);
    }
  }
}
