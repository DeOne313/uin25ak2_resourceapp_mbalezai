const ResourceList = () => {
    // Function to render resources by category
    const renderResources = (category) => {
      return resources
        .filter((resource) => resource.category === category)
        .map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ));
    };
  
    return (
      <div>
        <h1>Resources</h1>
        <div>
          <h2>HTML</h2>
          <ul>{renderResources("html")}</ul>
        </div>
        <div>
          <h2>CSS</h2>
          <ul>{renderResources("css")}</ul>
        </div>
        <div>
          <h2>JavaScript</h2>
          <ul>{renderResources("javascript")}</ul>
        </div>
        <div>
          <h2>React</h2>
          <ul>{renderResources("react")}</ul>
        </div>
        <div>
          <h2>Headless CMS</h2>
          <ul>{renderResources("headless-cms")}</ul>
        </div>
      </div>
    );
  };
  
  export default ResourceList;