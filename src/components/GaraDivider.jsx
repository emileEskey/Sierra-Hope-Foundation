// Signature element: a hand-drawn-style diamond band echoing the
// resist-dye diamond motifs common in Sierra Leonean gara cloth.
// Used as a section seam instead of a plain rule or gradient fade.
export default function GaraDivider({ tone = 'sand' }) {
  const stroke = tone === 'ink' ? '#F3E9D7' : '#16303D';
  const fillA = tone === 'ink' ? '#D9A441' : '#C1552C';
  const fillB = tone === 'ink' ? '#45684F' : '#D9A441';

  const diamonds = Array.from({ length: 22 });

  return (
    <div className="gara-divider" aria-hidden="true">
      <svg viewBox="0 0 880 28" preserveAspectRatio="none" width="100%" height="28">
        {diamonds.map((_, i) => {
          const x = i * 40 + 20;
          const fill = i % 2 === 0 ? fillA : fillB;
          return (
            <polygon
              key={i}
              points={`${x},2 ${x + 12},14 ${x},26 ${x - 12},14`}
              fill={fill}
              stroke={stroke}
              strokeWidth="1"
              opacity="0.9"
            />
          );
        })}
      </svg>
    </div>
  );
}
