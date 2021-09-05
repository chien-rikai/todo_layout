import logo from './logo.svg';
import './App.css';
import { Modal } from 'react-bootstrap';
import { Button, Badge} from 'react-bootstrap';
import {useState} from "react";


function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="main">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create TO-DO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Task Name</label>
              <div className="col-md-8">
                <input type="text" className="form-control" placeholder="task name"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-md-3 col-form-label">Status</label>
              <div className="col-md-6">
                <select defaultValue="1" className="form-control mt-10">
                  <option value="1">New</option>
                  <option value="2">Doing</option>
                  <option value="3">Done</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            <i className="bi bi-x-square"></i> Close
          </Button>
          <Button variant="outline-primary" onClick={handleClose}>
            <i className="bi bi-save"></i> Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="main-content">
        <div className="row">
          <h3 className="mt-10">
            TO-DO List app
          </h3>
        </div>
        <div className="row"> 
          <div className="d-flex justify-content-end">
            <Button variant="outline-primary" onClick={handleShow}>
              <i className="bi bi-file-earmark-plus"></i> New
            </Button>
          </div>
          <div className="input-group">
            <div className="form-outline">
              <input type="search" className="form-control" placeholder="Search Name"/>
            </div>
            <button type="button" className="btn btn-outline-success">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Task Name</th>
                <th scope="col">Status</th>
                <th scope="col">Edit</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Hoc Javascript</td>
                <td>
                  <Badge bg="primary">New</Badge>
                </td>
                <td>
                  <button type="button" className="btn btn-outline-warning">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Hoc ReactJS</td>
                <td>
                  <Badge bg="info">Doing</Badge>
                </td>
                <td>
                  <button type="button" className="btn btn-outline-warning">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </td>
                <td>
                  <button type="button" className="btn btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
