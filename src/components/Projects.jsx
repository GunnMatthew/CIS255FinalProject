import Projects from "./Cards";

const ProjectPage = () => 
    {
        return (
            <div style={{textAlign: 'center' }}>
              <hr/>
              <h1>Please select a language to view its projects.</h1>
              <div>
                <Projects/>
              </div>
            </div>
          );
    };

export default ProjectPage;