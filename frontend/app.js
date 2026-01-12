// Ejemplo de llamada a tu API Django
fetch('https://tu-django-api.onrender.com/upload_dataset/', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({data: 'tu_data'})
})
