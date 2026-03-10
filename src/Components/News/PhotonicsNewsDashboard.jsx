import React, { useEffect, useState, useMemo } from "react";
import "./PhotonicsNewsDashboard.css";

const NEWS_TOPICS = [
  "photonics",
  "optics",
  "laser technology",
  "optical communication",
  "fiber optics",
];

const CATEGORY_KEYWORDS = {
  All: [],
  Photonics: ["photonics"],
  Optics: ["optic", "optics"],
  Laser: ["laser"],
  "Fiber Optics": ["fiber", "fibre", "fiber optics", "fibre optics"],
};

const PhotonicsNewsDashboard = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchNews = async () => {
      if (!apiKey) {
        setError(
          "News API key is missing. Please set VITE_NEWS_API_KEY in your environment."
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const query = encodeURIComponent(NEWS_TOPICS.join(" OR "));

        const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&pageSize=12&language=en&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();

        if (!data.articles) {
          throw new Error("No articles found");
        }

        const withFallbackImages = data.articles.map((article) => ({
          ...article,
          urlToImage:
            article.urlToImage ||
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        }));

        setArticles(withFallbackImages);
      } catch (err) {
        setError(
          "Unable to load the latest photonics news right now. Please try again in a little while."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey]);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const displayedArticles = useMemo(() => {
    let current = [...articles];

    if (activeCategory !== "All") {
      const keywords = CATEGORY_KEYWORDS[activeCategory] || [];
      if (keywords.length > 0) {
        current = current.filter((article) => {
          const text = `${article.title ?? ""} ${
            article.description ?? ""
          } ${article.content ?? ""}`.toLowerCase();
          return keywords.some((keyword) => text.includes(keyword));
        });
      }
    }

    if (normalizedSearch) {
      current = current.filter((article) => {
        const text = `${article.title ?? ""} ${
          article.description ?? ""
        } ${article.content ?? ""}`.toLowerCase();
        return text.includes(normalizedSearch);
      });
    }

    return current;
  }, [articles, activeCategory, normalizedSearch]);

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    try {
      return new Date(dateString).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Unknown date";
    }
  };

  return (
    <section className="photonics-news-dashboard">
      <div className="pnd-header">
        <h2 className="pnd-title">Latest Photonics News</h2>
        <p className="pnd-subtitle">
          Stay up to date with breakthroughs in photonics, optics, lasers, and
          optical communication.
        </p>
      </div>

      <div className="pnd-controls">
        <input
          type="text"
          className="pnd-search-input"
          placeholder="Search articles by title or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="pnd-category-buttons">
          {Object.keys(CATEGORY_KEYWORDS).map((category) => (
            <button
              key={category}
              type="button"
              className={`pnd-category-button ${
                activeCategory === category ? "pnd-category-button--active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="pnd-status pnd-status--loading">
          Loading latest photonics news…
        </div>
      )}

      {!loading && error && (
        <div className="pnd-status pnd-status--error">{error}</div>
      )}

      {!loading && !error && displayedArticles.length === 0 && (
        <div className="pnd-status">
          No articles match your filters right now. Try changing the category or
          search term.
        </div>
      )}

      {!loading && !error && displayedArticles.length > 0 && (
        <div className="pnd-grid">
          {displayedArticles.map((article, index) => (
            <article key={`${article.url}-${index}`} className="pnd-card">
              <div className="pnd-card-image-wrapper">
                <img
                  src={article.urlToImage}
                  alt={article.title || "News article image"}
                  className="pnd-card-image"
                  loading="lazy"
                />
              </div>

              <div className="pnd-card-body">
                <h3 className="pnd-card-title">{article.title}</h3>
                {article.description && (
                  <p className="pnd-card-description">{article.description}</p>
                )}

                <div className="pnd-card-meta">
                  <span className="pnd-card-source">
                    {article.source?.name || "Unknown source"}
                  </span>
                  <span className="pnd-card-date">
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                <button
                  type="button"
                  className="pnd-card-button"
                  onClick={() => {
                    if (article.url) {
                      window.open(article.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  Read Full Article
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default PhotonicsNewsDashboard;

