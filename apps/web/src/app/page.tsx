import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <span className={styles.badge}>Capstone monorepo</span>

        <div className={styles.intro}>
          <h1 className={styles.title}>Build the product, not the plumbing.</h1>
          <p className={styles.subtitle}>
            Capstone combines a FastAPI backend with a Next.js frontend so your team can iterate
            quickly on a production-ready stack.
          </p>
        </div>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="http://localhost:8000/health"
            target="_blank"
            rel="noreferrer"
          >
            Check API health
          </a>
          <a
            className={styles.secondary}
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            View repository
          </a>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>Frontend</h2>
            <p>Next.js app shell with a clean, responsive layout for customer-facing work.</p>
          </article>
          <article className={styles.card}>
            <h2>Backend</h2>
            <p>FastAPI service for business logic, data access, and health monitoring.</p>
          </article>
          <article className={styles.card}>
            <h2>Developer workflow</h2>
            <p>Shared tooling, dev containers, and containerized services for local consistency.</p>
          </article>
        </div>
      </main>
    </div>
  );
}
