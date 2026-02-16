import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
