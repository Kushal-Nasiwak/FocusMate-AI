// export default function TaskInput() {
//   return <div>Task Input Coming Soon...</div>;
// }

import { useState } from 'react';

export default function TaskInput() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (input.trim() === '') return;
        setTasks([...tasks, { text: input, done: false }]);
        setInput('');
    };

    const toggleDone = (index) => {
        const updated = [...tasks];
        updated[index].done = !updated[index].done;
        setTasks(updated);
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return (
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <h3>Today's Focus Tasks</h3>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your task"
                style={{ padding: '5px', width: '60%' }}
            />
            <button onClick={addTask}>Add</button>

            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {tasks.map((task, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                        <span
                            onClick={() => toggleDone(index)}
                            style={{
                                textDecoration: task.done ? 'line-through' : 'none',
                                marginRight: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(index)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
