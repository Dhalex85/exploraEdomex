export function Chapter({
  number,
  name,
  end,
}: {
  number: string;
  name: string;
  end?: string;
}) {
  return (
    <div className="chapter">
      <span className="chapter__num">{number}</span>
      <span className="chapter__name">{name}</span>
      {end && <span className="chapter__end">{end}</span>}
    </div>
  );
}
