import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfileImageDirective } from './directives/profile-image/profile-image.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserCardComponent, ProfileImageDirective],
  exports: [UserCardComponent]
})
export class SharedModule { }
