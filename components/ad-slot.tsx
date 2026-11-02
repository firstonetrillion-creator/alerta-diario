'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

declare global { interface Window { adsbygoogle?: Record<string, never>[] } }

const approved = process.env.NEXT_PUBLIC_ADSENSE_APPROVED === 'true'
  && process.env.NEXT_PUBLIC_ADSENSE_CONSENT_READY === 'true'
  && Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT);

export function AdSlot({ placement }: { placement: 'home' | 'article' | 'rail' }) {
  const [scriptReady, setScriptReady] = useState(false);
  const slot = placement === 'article' ? process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE : process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME;
  const sizeClass = placement === 'article' ? 'ad-article' : placement === 'rail' ? 'ad-rail' : 'ad-wide';
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!approved || !slot || !scriptReady) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch { /* AdSense may be unavailable in a blocked browser. */ }
  }, [slot, scriptReady]);

  if (!approved || !slot) return <div className={`ad-slot ${sizeClass}`} aria-label="Espaço reservado para publicidade"><span>PUBLICIDADE</span><strong>Espaço reservado para anúncio</strong><small>Anúncios só serão ativados após aprovação e configuração de consentimento.</small></div>;

  return <div className={`ad-slot ad-live ${sizeClass}`} aria-label="Publicidade">
    <span>PUBLICIDADE</span>
    <Script id="adsense-script" async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`} crossOrigin="anonymous" strategy="afterInteractive" onReady={() => setScriptReady(true)} />
    <ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
  </div>;
}
