// src/modules/formHandler.js
import { getData, setData, getNextId } from './storage';

export function initForm() {
  const form = document.querySelector('form');
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (id) {
    // Edit mode
    const dataIbu = getData();
    const item = dataIbu.find(i => i.id === +id);
    if (item) {
      ['nik','nama','tempat','tanggal','tinggi','berat','alamat']
        .forEach(field => form[field].value = item[field]);
      form.querySelector('button').textContent = 'UPDATE';
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      const updated = dataIbu.map(i => 
        i.id === +id 
          ? { 
              ...i,
              nik: form.nik.value,
              nama: form.nama.value,
              tempat: form.tempat.value,
              tanggal: form.tanggal.value,
              tinggi: form.tinggi.value,
              berat: form.berat.value,
              alamat: form.alamat.value
            }
          : i
      );
      setData(updated);
      window.location.href = 'dataibu.html';
    });
  } else {
    // Create mode
    form.addEventListener('submit', e => {
      e.preventDefault();
      const dataIbu = getData();
      const newItem = {
        id: getNextId(),
        nik: form.nik.value,
        nama: form.nama.value,
        tempat: form.tempat.value,
        tanggal: form.tanggal.value,
        tinggi: form.tinggi.value,
        berat: form.berat.value,
        alamat: form.alamat.value
      };
      dataIbu.push(newItem);
      setData(dataIbu);
      window.location.href = 'dataibu.html';
    });
  }
}