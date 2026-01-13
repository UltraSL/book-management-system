import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private darkTheme = false

  constructor() {
    if(typeof window !== 'undefined' && localStorage.getItem('dark-theme')){
      this.darkTheme = localStorage.getItem('dark-theme') === 'true'
    }

    this.applyTheme();
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    if (typeof window !== 'undefined') {
      localStorage.setItem('dark-theme', this.darkTheme.toString());
    }
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof document !== 'undefined') {
      const body = document.body;
      body.classList.toggle('dark-theme', this.darkTheme);
    }
  }

  isDark(): boolean {
    return this.darkTheme;
  }
  
}
