import { ExpertiseCard } from "./ExpertiseCard";
import type { ExpertiseCardProps } from "./ExpertiseCard";

type ExpertiseGridProps = {
  cards: ExpertiseCardProps[];
};

const ExpertiseGrid = ({ cards }: ExpertiseGridProps) => {
  return (
    <div className="grid gap-6 mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <ExpertiseCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ExpertiseGrid;
