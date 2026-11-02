export function PreviewNotice() {
  if (process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true') return null;
  return <div className="preview-notice" role="status"><strong>PRÉVIA EDITORIAL</strong><span>Matérias em revisão humana. Este site ainda não está pronto para publicação pública ou indexação.</span></div>;
}
