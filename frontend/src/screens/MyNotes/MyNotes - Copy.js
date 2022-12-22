import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import {Button,Card,Badge, Accordion} from "react-bootstrap";

import notes from "../../data/notes";



function MyNotes () {
    const deleteHandler = (id) => {
        if(window.confirm("Are you sure you want to delete this note?")){
        }  
    };
  return (
    <MainScreen title='Welcome back WeiWu11'>
      <Link to ="createnote">
        <Button style ={{marginLeft:10, marginBottom:6}} size="lg">Create New Note</Button>       </Link>
        {notes.map((note) => (
          <Accordion>
<Card style={{margin:20}}>
            <Card.Header style={{display:"flex"}}>
              <span style={
                {
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: "18px",
                }
              }>
               {/* <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    > */}
                      {note.title}
                    {/* </Accordion.Toggle> */}
                  </span>
            <div> 
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(note._id)}>Delete</Button>
                </div>
                
            </Card.Header>
            <Accordion.Collapse eventKey="0">
    
            <Card.Body>
              <h4>
                <Badge variant = "success">Category - {note.category}</Badge>
              </h4>
              <blockquote className="blockquote mb-0">
              <p> {note.content} </p>
              <footer className="blockquote-footer">Create on -date</footer>
        </blockquote>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
          </Accordion>
            

        ))
        }
                

    </MainScreen>
  );
}

export default MyNotes;
