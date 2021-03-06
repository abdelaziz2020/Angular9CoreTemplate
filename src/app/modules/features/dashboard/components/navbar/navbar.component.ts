
import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'features/dashboard/services/dashboard.service';
import { TranslationService } from 'core/services/localization/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private translateService: TranslationService
  ) { }
  isCollapsed = true;
  ngOnInit() {
  }

  toggleSidebarPin() {
    this.dashboardService.toggleSidebarPin();
  }
  toggleSidebar() {
    this.dashboardService.toggleSidebar();
  }
  setLanguage(lang: string): void {
    this.translateService.setLanguage(lang);
    console.log('language', this.translateService.lang);
  }

}
