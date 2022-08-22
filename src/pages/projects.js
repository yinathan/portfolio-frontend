import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Projects({ URL }) {
  const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    .image {
      max-height: 300px;
    }

    .button {
      height: 30px;
      width: 100px;
      margin: 10px;
    }
  `;

  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch(URL + "projects");
    const data = await response.json();
    setProjects(data);
    console.log(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project) => (
      <StyledDiv>
        <h1>{project.name}</h1>
        <img src={project.image} className="image" />
        <a href={project.git}>
          <button className="button">Github</button>
        </a>
        <a href={project.live}>
          <button className="button">Live Site</button>
        </a>
      </StyledDiv>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}