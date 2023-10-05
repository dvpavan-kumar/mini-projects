const ProjectCard = ({
  project,
  sourceCodeHref,
  sourceCode,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  skills,
}) => {
  const imageStyle = {
    width: "350px",
    height: "250px",
    objectFit: "cover",
  };
  return (
    <>
      {/*  */}
      <div className="overflow-hidden bg-white rounded-lg m-5 hover:ring-4 ring-orange-300 transition duration-1000 ease-in-out hover:shadow-lg">
        <img
          src={`/images/${project.image}`}
          alt={`Project: ${project.title}`}
          style={imageStyle}
          className="bg-gray-500"
        />
        <div className="p-8 text-left sm:p-9 md:p-7 xl:p-5">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-3 block text-xl font-extrabold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-relaxed mb-3 text-body-color max-w-[300px]">
            {CardDescription}
          </p>

          {Button && (
            <>
              <a
                href={btnHref ? btnHref : "/tml"}
                className="inline-block rounded border border-[#E5E7EB] mr-2 text-base font-medium text-body-color transition hover:border-primary hover:text-white  hover:bg-primary  p-2 "
              >
                {Button}
              </a>
              <a
                href={
                  sourceCodeHref ? sourceCodeHref : "https://www.google.com/"
                }
                className="inline-block rounded border border-[#E5E7EB] text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white p-2 "
              >
                {sourceCode}
              </a>
            </>
          )}

          {/* Display skills as badges */}
          {skills && (
            <div className="mt-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-orange-400 rounded px-3 py-1 text-sm font-bold text-white mr-2 mb-2"
                >
                  <strong>{skill}</strong>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default ProjectCard;
