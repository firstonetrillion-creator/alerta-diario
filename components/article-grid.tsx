'use client';

import { useEffect, useMemo, useState } from 'react';
import { ArticleCard } from './article-card';
import type { Article } from '@/lib/types';

export function ArticleGrid({ articles, showFilters = true }: { articles: Article[]; showFilters?: boolean }) {
  const [filter, setFilter] = useState('Todas');
  const [query, setQuery] = useState('');
  const filterNames = ['Todas', ...Array.from(new Set(articles.map((item) => item.category.title)))];

  useEffect(() => {
    const search = new URLSearchParams(window.location.search).get('q') ?? '';
    setQuery(search);
  }, []);

  const visible = useMemo(() => articles.filter((article) => {
    const categoryMatches = filter === 'Todas' || article.category.title === filter;
    const queryMatches = !query || `${article.title} ${article.excerpt} ${article.category.title} ${article.location}`.toLocaleLowerCase('pt-BR').includes(query.toLocaleLowerCase('pt-BR'));
    return categoryMatches && queryMatches;
  }), [articles, filter, query]);

  return <>
    {showFilters && <div className="grid-tools">
      <div className="filters" aria-label="Filtrar matérias por editoria">
        {filterNames.map((name) => <button key={name} className={`filter ${filter === name ? 'active' : ''}`} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name}</button>)}
      </div>
      {query && <p className="search-result-label">Busca por “{query}” · <button onClick={() => { setQuery(''); window.history.replaceState({}, '', '/noticias/#materias'); }}>limpar</button></p>}
    </div>}
    <div className="news-grid" id="materias">{visible.map((article) => <ArticleCard key={article.slug} article={article} />)}</div>
    {visible.length === 0 && <p className="no-results">Nenhuma matéria encontrada. Tente outro termo ou editoria.</p>}
  </>;
}
