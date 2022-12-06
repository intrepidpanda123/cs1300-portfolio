import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="App">
      <header className="App-header" style={{display: 'flex', flexDirection: 'column'}}>
        <p>
          Work in Progress...
        </p>
        <Link to='/uiux/personas-storyboarding'> Personas and Storyboarding </Link>
        <Link to='/uiux/responsive-redesign'> Responsive Redesign </Link>
      </header>
    </div>
  );
}

export default Work;
