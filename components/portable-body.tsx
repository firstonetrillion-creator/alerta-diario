export function PortableBody({ paragraphs }: { paragraphs: string[] }) {
  return <div className="article-body">{paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>)}</div>;
}
