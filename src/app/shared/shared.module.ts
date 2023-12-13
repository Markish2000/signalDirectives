// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives
import { CustomLabelDirective } from './directives/custom-label.directive';

@NgModule({
  declarations: [CustomLabelDirective],
  imports: [CommonModule],
  exports: [CustomLabelDirective],
})
export class SharedModule {}
