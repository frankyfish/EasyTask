import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardModule } from "../shared/card.module";
import { TaskComponent } from "../task/task.component";
import { CreateComponent } from "./create/create.component";
import { TasksComponent } from "./tasks.component";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        CreateComponent
    ],
    imports: [CommonModule, FormsModule, CardModule],
    exports: [TasksComponent]
})
export class TasksModule{}