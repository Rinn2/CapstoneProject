// src/modules/storage.js
export function getData() {
  return JSON.parse(localStorage.getItem('dataIbu') || '[]');
}

export function setData(data) {
  localStorage.setItem('dataIbu', JSON.stringify(data));
}

export function getNextId() {
  const last = parseInt(localStorage.getItem('ibuLastId') || '0', 10);
  const next = last + 1;
  localStorage.setItem('ibuLastId', next);
  return next;
}