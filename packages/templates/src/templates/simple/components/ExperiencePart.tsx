import { Fragment } from "react";

export type ExperiencePartProps = {
  time: string;
  position: string;
  company: string;
  location: string;
  projects: { description: string; listItems: string[] }[];
};

const ExperiencePart: React.FC<ExperiencePartProps> = (props) => {
  return (
    <div className="grid grid-cols-14 mb-3">
      <div className="font-bold col-span-3">{props.time}</div>
      <div className="col-span-11">
        <h4 className="font-bold">{props.position}</h4>
        <h5>
          <strong>{props.company}</strong> － {props.location}
        </h5>
        {props.projects.map((project, index) => {
          return (
            <Fragment key={"P_" + index}>
              <p>{project.description}</p>
              <ul className="list-disc ml-7">
                {project.listItems.map((item, index) => (
                  <li key={"li_" + index}>{item}</li>
                ))}
              </ul>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default ExperiencePart;
