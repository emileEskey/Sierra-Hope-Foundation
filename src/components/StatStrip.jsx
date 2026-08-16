import './StatStrip.css';

export default function StatStrip({ stats }) {
  return (
    <ul className="stat-strip">
      {stats.map((s) => (
        <li key={s.label}>
          <span className="stat-strip__num">{s.value}</span>
          <span className="stat-strip__label">{s.label}</span>
        </li>
      ))}
    </ul>
  );
}
