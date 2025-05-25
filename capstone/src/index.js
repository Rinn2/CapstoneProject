// src/index.js
import './style.css';
import { initForm } from './modules/formHandler';
import { renderTable } from './modules/tableRenderer';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.endsWith('dashboard.html')) {
    const dashboardSection = document.querySelector('.dashboard-content');
    if (dashboardSection) {
      dashboardSection.innerHTML += '<p>Dashboard aktif!</p>';
    }
  }
  
  if (document.querySelector('form')) {
    initForm();
  }
  if (document.querySelector('#ibu-table')) {
    renderTable();
  }
});
