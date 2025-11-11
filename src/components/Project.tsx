import "../assets/styles/Project.scss";
import { useLanguage } from "../hooks/useContextLanguage";
import useProjectsHook from "../hooks/useProjectsHook";

function Project() {
  const { data, status } = useProjectsHook();
  const { language ,t} = useLanguage();

  return (
    <div className="projects-container" id="projects">
      <h1>{t.projects.title}</h1>
      <div className="projects-grid">
        {status === "loading" ? (
          <div>cargando....</div>
        ) : (
          data.map((doc) => {
            return (
              <div className="project" key={doc.NO_ID_FIELD}>
                <a
                  href={doc.urlRepository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={
                     doc.url
                    }
                    className="zoom"
                    alt="thumbnail"
                    width="100%"
                  />
                </a>
                <a
                  href={doc.urlRepository}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2>{doc.name}</h2>
                </a>
                <p>
                 {doc.description[language]}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Project;
