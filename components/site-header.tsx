'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { categories } from '@/lib/categories';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { setMenuOpen(false); setSearchOpen(false); }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = `/noticias/?q=${encodeURIComponent(query.trim())}#materias`;
  }

  return <header className="site-header">
    <div className="header-inner">
      <Link className="brand" href="/" aria-label="Alerta Diário, início">
        <span className="brand-mark">A<span>•</span></span><span>ALERTA<span className="brand-light">DIÁRIO</span></span>
      </Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Editorias">
        <Link href="/noticias/" onClick={() => setMenuOpen(false)}>Últimas</Link>
        {categories.map((item) => <Link key={item.slug} href={`/editoria/${item.slug}/`} onClick={() => setMenuOpen(false)}>{item.title}</Link>)}
      </nav>
      <button className="search-toggle" aria-label={searchOpen ? 'Fechar busca' : 'Buscar matérias'} aria-expanded={searchOpen} onClick={() => setSearchOpen(!searchOpen)}>⌕</button>
    </div>
    {searchOpen && <form className="search-panel" onSubmit={submitSearch} role="search">
      <label htmlFor="site-search">Buscar no Alerta Diário</label>
      <input id="site-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: Inhumas, economia, política" />
      <button type="submit">Buscar</button>
    </form>}
  </header>;
}
