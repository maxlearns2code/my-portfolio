import Icon from "./Icons";

interface SkillsitemsProps {
  name: string;
}

const Skillsitems: React.FC<SkillsitemsProps> = ({ name }) => {
  return (
    <div className="p-6 shadow-md shadow-gray-400 rounded-xl">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Icon name={name} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skillsitems;
