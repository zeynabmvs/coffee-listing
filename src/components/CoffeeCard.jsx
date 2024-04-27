import starIcon from "../design/Star.svg";
import starFill from "../design/Star_fill.svg";

const CoffeeCard = ({ data }) => {
  return (
    <div className="rounded-lg flex flex-col">
      <img src={data.image} alt={data.name} className="w-full object-cover" />
      <div>
        <h2>{data.name}</h2>
        <span>{data.price}</span>
      </div>
      <div>
        <img src={data.rating ? starFill : starIcon} alt="Rating" />
        {data.rating ? <span>{data.rating}</span> : 'No rating'}
        {(data.votes > 0) ? <span>{data.votes + " votes"}</span> :null} 
        {!data.available && 'Sold out'}
      </div>
    </div>
  );
};

export default CoffeeCard;
