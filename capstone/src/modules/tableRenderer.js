// src/modules/tableRenderer.js
import { getData, setData } from './storage';

export function renderTable() {
  const data = getData();
  const tbody = document.querySelector('#ibu-table tbody');
  tbody.innerHTML = '';

  data.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.nik}</td>
      <td>${item.nama}</td>
      <td>${item.tempat}</td>
      <td>${item.tanggal}</td>
      <td>${item.tinggi}</td>
      <td>${item.berat}</td>
      <td>${item.alamat}</td>
      <td>
        <button class="edit" data-id="${item.id}">Edit</button>
        <button class="delete" data-id="${item.id}">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // Hapus handler
  document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', e => {
      if (!confirm('Hapus data ini?')) return;
      const id = +e.target.dataset.id;
      const filtered = getData().filter(i => i.id !== id);
      setData(filtered);
      renderTable();
    });
  });

  // Edit handler
  document.querySelectorAll('.edit').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = e.target.dataset.id;
      window.location.href = `tambahdataibu.html?id=${id}`;
    });
  });
}