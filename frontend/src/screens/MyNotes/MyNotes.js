import React, { useEffect, useState } from "react";
import {
  Accordion,
  useAccordionButton,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
//import notes from "../../data/notes.js";
import MainScreen from "../../components/MainScreen";
import axios from "axios";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <span
      style={{
        color: "black",
        textDecoration: "none",
        flex: 1,
        cursor: "pointer",
        alignSelf: "center",
        fontSize: 18,
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </span>
  );
}

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  console.log("Print useState");
  console.log(notes);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
      console.log("Print fetch");
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Lei !">
      <Link to="createNote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card>
            <Card.Header style={{ display: "flex" }}>
              <CustomToggle eventKey="0"> {note.title}</CustomToggle>

              <div>
                <Button href={`/note/${note._id}`}>Edit</Button>
                <Button
                  variant="secondary"
                  className="mx-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge bg="success" text="light">
                    Category - {note.category}
                  </Badge>
                </h4>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer class="blockquote-footer">Created on - date</footer>
                  </blockquote>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
