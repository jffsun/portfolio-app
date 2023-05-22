const Modal = ({ project, closeModal }) => {
  return (
    <div className="modal">
      <h3>{project.title}</h3>
      {/* TO DO: Different image from  */}
      <img className="project-screenshot" 
      src="image={require(`../images/${project.image}`)}" 
      alt={`${project.title} screenshot`}/>
      <p>{project.technologies}</p>
      <p>{project.description}</p>
    
      <button onClick={closeModal}>Close</button>
    </div>
  )
}