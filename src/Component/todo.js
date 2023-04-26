import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Modal, Button } from 'react-bootstrap';

function EditTodoTask({ show, onHide, taskEdit, setTaskEdit, tasks, setTasks }) {
    const [updated, setUpdated] = useState(false);

    const updateTask = () => {
        const newTasks = tasks.map((t) => {
            if (t.id === taskEdit.id) {
                t.title = taskEdit.title;
            }
            return t;
        });
        setTasks(newTasks);
        localStorage.setItem("localTasks", JSON.stringify(newTasks));
        setUpdated(true);
        onHide();
    };

    // useEffect(() => {
    //     onHide();
    // }, [updated]);

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={taskEdit.title}
                        onChange={(e) => setTaskEdit({ ...taskEdit, title: e.target.value })}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onHide={onHide}>
                    Close
        </Button>
                <Button variant="primary" onClick={updateTask}>
                    Update
        </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function Todo() {
    const [task, setTask] = useState({ id: "", title: "" });
    const [taskEdit, setTaskEdit] = useState({ id: "", title: "" });
    const [tasks, setTasks] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("localTasks")) {
            setTasks(JSON.parse(localStorage.getItem("localTasks")));
        }
    }, []);

    const addTask = () => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task };
            setTasks([...tasks, newTask]);
            localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
            setTask("");
        }
    };

    const handleDelete = (task) => {
        const deleted = tasks.filter((t) => t.id !== task.id);
        setTasks(deleted);
        localStorage.setItem("localTasks", JSON.stringify(deleted))
    };

    const handleEdit = (task) => {
        setTaskEdit(task)
        setModalShow(true);
    };

    const handleClear = () => {
        setTasks([]);
        localStorage.removeItem("localTasks");
    };
    return (
        <>
         <div className="row justify-content-center mt-3">
            <div className="card">
                <div className="card-header">
                    <h1 className="mt-3 text-black text-center">To-Do App</h1>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-8">
                            <input name="task" type="text" value={!task ? task : null} placeholder="Write Your Task..." className="form-control" onChange={(e) => setTask(e.target.value)} />
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary form-control material-icons" onClick={addTask} > Add </button>
                        </div>
                    </div>
                    <div className="row">
                        <div><span className="badge-secondary"> You have {!tasks.length ? " no tasks" : tasks.length === 1 ? " 1 task" : tasks.length > 1 ? ` ${tasks.length} tasks` : null}
                        </span></div>
                    </div>
                    <div className="row">
                        { tasks ? tasks.map((task) => (
                            <React.Fragment key={task.id}>
                                <div className="col-10">
                                    <span className="form-control bg-white btn mt-2" style={{ textAlign: "left", fontWeight: "bold" }}> {task.title} </span>
                                </div>
                                <div className="col-2">
                                    <div className="button_group">
                                        <div className="btn-group btn-group-sm">
                                            <button className=" mt-2 btn btn-warning material-icons" id="editmodal" onClick={() => handleEdit(task)}>  Edit </button>
                                            <button className=" mt-2 btn btn-danger material-icons " onClick={() => handleDelete(task)} >delete </button>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ) ): null}
                        {!tasks.length ? null : (
                            <div className="col-1">
                                <button className="btn btn-secondary  mt-4 mb-4" onClick={() => handleClear()}>  Clear </button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
            <EditTodoTask
                show={modalShow}
                onHide={() => setModalShow(false)}
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
                tasks={tasks}
                setTasks={setTasks}
            />
        </>
    );
}