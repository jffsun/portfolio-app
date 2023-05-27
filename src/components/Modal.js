const Modal = ({ project, closeModal }) => {
  const { screenshot, title, technologies, description } = project;

  return (
    <div className="modal">
      <h3>{title}</h3>
      {/* TO DO: Screenshot image from */}
      <img className="project-screenshot" 
      src={screenshot} 
      alt={`${title} screenshot`}/>
      <p>{technologies}</p>
      <p>{description}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  )
}

export default Modal;