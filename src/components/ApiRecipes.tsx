import React, { useState, useEffect } from 'react';

// Shape of a recipe item returned by dummyjson.com/recipes
interface ApiRecipeItem {
  id: number;
  name: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  rating: number;
  image: string;
  tags: string[];
}

const ApiRecipes: React.FC = () => {
  const [items, setItems] = useState<ApiRecipeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // useEffect cannot itself be async — declare the function inside
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('https://dummyjson.com/recipes?limit=10');
        // fetch does NOT throw on 4xx/5xx — check manually
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setItems(data.recipes); // data is nested under .recipes
      } catch (e) {
        setError((e as Error).message ?? 'Unknown error');
      } finally {
        // always runs — disables the spinner whether success or error
        setLoading(false);
      }
    }
    load();
  }, []); // empty array → runs once on mount

  return (
    <section className="api-recipes-section">
      <h2 className="api-recipes-title">✨ Recipe Suggestions</h2>
      <p className="api-recipes-subtitle">Sourced live from DummyJSON API</p>

      {loading && (
        <p className="api-status api-loading">Loading suggestions…</p>
      )}

      {error && (
        <p className="api-status api-error">⚠️ {error}</p>
      )}

      {!loading && !error && (
        <div className="api-recipes-grid">
          {items.map(item => (
            <article key={item.id} className="api-recipe-card">
              <img
                src={item.image}
                alt={item.name}
                className="api-recipe-img"
                loading="lazy"
              />
              <div className="api-recipe-body">
                <h3 className="api-recipe-name">{item.name}</h3>
                <div className="api-recipe-meta">
                  <span>🌍 {item.cuisine}</span>
                  <span>⏱️ {item.prepTimeMinutes + item.cookTimeMinutes} min</span>
                  <span>⭐ {item.rating}</span>
                </div>
                <span className={`api-recipe-difficulty difficulty-${item.difficulty.toLowerCase()}`}>
                  {item.difficulty}
                </span>
                {item.tags.length > 0 && (
                  <div className="api-recipe-tags">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="api-recipe-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ApiRecipes;
