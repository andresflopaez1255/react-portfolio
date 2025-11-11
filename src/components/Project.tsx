import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/andresflopaez1255/manager_accounts"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://res.cloudinary.com/dwgww4t5i/image/upload/v1762882115/Disen%CC%83o_sin_ti%CC%81tulo_j4vq3p.png"
              }
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/andresflopaez1255/manager_accounts"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Accounts manager</h2>
          </a>
          <p>
            Flutter app designed for managing Netflix profiles, using libraries
            like Flutter Bloc, Shared Preferences, and Clean Architecture for
            efficient state management, data storage, and maintainable code
            structure.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/andresflopaez1255/manager_accounts"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/images%2FRecipesV2.png?alt=media&token=3ba342a1-dd6b-4fdc-bca2-2d72c3651674z"
              }
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/andresflopaez1255/recipes_appv2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>App recipes version 2</h2>
          </a>
          <p>
            Mobile recipe application developed in Flutter, featuring optimized
            state management with Riverpod, offline storage with SQLite, and
            integration with TheMealDB API to access a wide variety of
            international recipes.{" "}
          </p>
        </div>
        <div className="project">
          <a
            href="https://yachtservicesllc.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/images%2FYMS.png?alt=media&token=13664cbc-262c-4d29-af8b-acd41357443d"
              }
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://yachtservicesllc.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>YMS</h2>
          </a>
          <p>
            Mobile project developed in React Native, including both client and
            operator apps, utilizing state management, clean architecture, and
            SOLID principles for efficient and maintainable code.
          </p>
        </div>
        <div className="project">
          <a
            href="https://play.google.com/store/apps/details?id=io.ionic.ccbqa&hl=es_CO"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/portafolio-dd96b.appspot.com/o/images%2FCCB.png?alt=media&token=5ef4c46a-2e0e-4a7f-8dd4-6012ed6c30ae"
              }
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=io.ionic.ccbqa&hl=es_CO"
            target="_blank"
            rel="noreferrer"
          >
            <h2>App CCB movil</h2>
          </a>
          <p>
            App for CCB developed by SoftwareOne, where I actively participated
            in its development using Flutter, Firebase, and Flutter Bloc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
