class Tarea {
    constructor(public titulo: string, public estado: 'completado' | 'pendiente') {}
  }
  
  // Crear una lista de tareas
  const listaTareas: Tarea[] = [
    new Tarea('Hacer la compra', 'pendiente'),
    new Tarea('Terminar el informe', 'pendiente'),
    new Tarea('Pasear al perro', 'completado'),
    new Tarea('Preparar la cena', 'pendiente'),
  ];
  
  // Mostrar los títulos y estados de las tareas
  console.log('Lista de Tareas:');
  listaTareas.forEach((tarea, indice) => {
    console.log(`Tarea ${indice + 1}: ${tarea.titulo} - Estado: ${tarea.estado}`);
  });
  