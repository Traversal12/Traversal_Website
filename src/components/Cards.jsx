import Card from './Card';

function Cards() {
  return (
    <div className="flex flex-wrap justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      {/* Add more Card components as needed */}
    </div>
  );
}

export default Cards;
