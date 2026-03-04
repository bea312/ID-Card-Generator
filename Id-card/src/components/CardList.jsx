import IdCard from "./IdCard";

function CardList({ people }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <IdCard
          key={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          idNumber={person.id}
          avatar={person.avatar}
        />
      ))}
    </div>
  );

export default CardList;
