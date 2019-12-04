const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};
const listar = {
    demand: true,
    alias: 'n',
    desc: "Lista las tareas si estan hechas o no"
};
const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        listar
    })
    .help()
    .argv;

module.exports = {
    argv
}
