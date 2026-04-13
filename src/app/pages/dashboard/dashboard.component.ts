import { Component } from '@angular/core';
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { BaseCardComponent } from '../../components/base-card/base-card.component';
import { TheoryLessonsComponent } from '../../components/widgets/theory-lessons/theory-lessons.component';
import { DrivingLessonsComponent } from '../../components/widgets/driving-lessons/driving-lessons.component';
import { CalendarComponent } from '../../components/widgets/calendar/calendar.component';
import { ProgressComponent } from '../../components/widgets/progress/progress.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardLayoutComponent,
    BaseCardComponent,
    TheoryLessonsComponent,
    DrivingLessonsComponent,
    CalendarComponent,
    ProgressComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
