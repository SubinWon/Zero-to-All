import Nav from "./Nav.jsx";
import PageHeading from "./PageHeading.jsx";
import AnimatedCardGrid from "./AnimatedCardGrid.jsx";
import { progress } from "../data/site.js";

// 时间线每条记录是一个 <li>，并且带 .card：
// AnimatedCardGrid 只给 .card 做入场动画，逐条错开 120ms。
// 外层容器故意不加 .card/.panel——避免"卡里套卡"和动画叠加。
export default function ProgressView() {
  return (
    <AnimatedCardGrid className="dashboard-grid">
      <article className="hero-stage panel-full">
        <Nav />
        <PageHeading title={progress.heroTitle} subtitle={progress.heroSubtitle} />
      </article>

      <section className="panel-full progress-panel">
        <ol className="progress-timeline" aria-label="开发记录">
          {progress.entries.map((entry) => (
            <li className="progress-item card" key={`${entry.date}-${entry.title}`}>
              <time className="progress-date" dateTime={entry.date}>
                {entry.date}
              </time>
              <span className="progress-dot" aria-hidden="true" />
              <article className="progress-entry">
                <h3 className="progress-entry-title">{entry.title}</h3>
                <ul className="progress-changes">
                  {entry.changes.map((change) => (
                    <li key={change}>{change}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </AnimatedCardGrid>
  );
}
