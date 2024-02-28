import "./index.css";
import './App.css';
import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: 100%;
  height: fit-content;
  flex-grow: 1;
`;

const ColumnC = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  flex-grow: 0;
  width: 50%;
  height: fit-content;
  flex-grow: 1;
`;

const Row = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  gap: 18px;
  flex-grow: 1;
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 48px 48px 48px 48px;

  @media (min-width: 1024px) {
    padding: 48px 120px 48px 120px;
  }

  @media (min-width: 1536px) {
    padding: 48px 240px 48px 240px;
  }
`;

function App() {

  return (
    <div>
    <Container>
      <h1>I'm Fabian Winandi,</h1>
      <h2 className="card">...still learning to be Web Developer!</h2>
      <img className="logo:hover" width="40%" height="auto" src="/fiw.jpg" />
    <div className="card">
    <Row>
      <Row>
        <ColumnC>
        <h2>Profile</h2>
        </ColumnC>
        <hr />
        
      </Row>
        <Row>
          <Column>
            <h2>About me</h2>
            <p>
            Musician - Urban Planner, turned Web Developer. What a ride! After long journey all over Indonesia, as Urban & Regional Planner, or as Musician, I decided to hop aboard a new ship : coding ship. Hope I can go all over the world this time, with this ship, meeting many friends and new family along the way. Wish us luck!
            </p>
          </Column>
        </Row>
    </Row>
      
    <Row>
      <Row>
        <ColumnC>
        <h2>Details</h2>
        </ColumnC>
        <hr />
      </Row>
      <Row>
        <Column>
          <h2>Full Name</h2>
          <p>Fabian Indra Winandi</p>
        </Column>
        <Column>
          <h2>Age</h2>  
          <p>32</p>
        </Column>
      </Row>
    </Row>
    </div>
      
      <h1 className="card">hi!</h1>
      <h3>Looking forward to be working with you all!</h3>
   
      <a href="https://github.com/fabianindra"><img className="logo" src="GitHub_Logo_White.png"></img></a>
      <a href="https://instagram.com/fabianwinandi"><img className="logo" src="Instagram_logo.png" ></img></a>
      <a href="https://id.linkedin.com/in/fabian-winandi-a7711b105"><img className="logo" src="Linkedin_logo.png" ></img></a>
    

      </Container>
    </div>
  )
}

export default App