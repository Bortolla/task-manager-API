const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}, '-__v');
        res.status(200).json({ tasks });
    }
    catch (error) {
        res.status(500).json({ 'Nome do Erro': error.name, "Causa do Erro": error.message });
    }
}

const getTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOne({ _id: taskId }, '-__v');

        if (!task) {
            return res.status(404).json({ msg: `No task with the ID of: ${taskId}` });
        }

        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).json({ 'Nome do Erro': error.name, "Causa do Erro": error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ 'Nome do Erro': error.name, "Causa do Erro": error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findOneAndDelete({ _id: taskId });

        if (!task) {
            return res.status(404).json( {msg: `No task found with the ID of: ${taskId}`} );
        }

        res.status(200).json({ msg: 'Task deleted', task });
    }
    catch (error) {}
}

const updateTask = (req, res) => {
    try {
        const taskId = req.params.id;
        
        res.status(200).json({});
    }
    catch (error) {}
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}