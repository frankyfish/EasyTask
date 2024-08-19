import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { CardModule } from "./shared/card.module";
import { UserComponent } from "./user/user.component";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, CardModule, TasksModule]
})
export class AppModule {}