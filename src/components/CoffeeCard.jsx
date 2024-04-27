import starIcon from "../design/Star.svg";
import starFill from "../design/Star_fill.svg";

const CoffeeCard = ({ data }) => {
  return (
    <div className="rounded-lg flex flex-col gap-[10px] pb-9">
      <img src={data.image} alt={data.name} className="w-full object-cover rounded-lg overflow-hidden" />
      <div className="flex justify-between items-center">
        <h2>{data.name}</h2>
        <span className="text-price rounded-md bg-green text-n-2 py-[6px] px-2">{data.price}</span>
      </div>
      <div className="flex">
        <img src={data.rating ? starFill : starIcon} alt="Rating" className="mr-[6px]"/>
        {data.rating ? <span className="mr-1">{data.rating}</span> : 'No rating'}
        {(data.votes > 0) ? <span className="text-n-3">({data.votes + " votes"})</span> :null} 
        {!data.available && <span className="text-red ml-auto">Sold Out</span>}
      </div>
    </div>
  );
};

export default CoffeeCard;
