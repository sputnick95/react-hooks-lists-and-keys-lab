import React from "react";

function ProjectItem({ name, about, technologies, id }) {


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology, index) => <span name="SPAN" key={index}>{technology}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
