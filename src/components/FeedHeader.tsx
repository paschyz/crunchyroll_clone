import { FeedHeaderProps } from "../models/FeedHeaderProps";

export default function FeedHeader(props: FeedHeaderProps) {
  return (
    <div className=" flex justify-center text-white ">
      <div className="mt-14 w-full h-14">
        <h2 className="text-3xl font-lexend">{props.title}</h2>

        <h5 className="font-light font-lexend mt-1">{props.subtitle}</h5>

        <div className={`bg-${props.color}-500 h-1 mt-3`}></div>
      </div>
    </div>
  );
}
