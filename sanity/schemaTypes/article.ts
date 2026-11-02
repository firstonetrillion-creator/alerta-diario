import { defineField, defineType } from 'sanity';

export const article = defineType({
  name: 'article', title: 'Matéria', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required().min(20).max(110) }),
    defineField({ name: 'slug', title: 'Endereço', type: 'slug', options: { source: 'title', maxLength: 100 }, validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'Resumo', type: 'text', rows: 3, validation: (rule) => rule.required().min(60).max(220) }),
    defineField({ name: 'category', title: 'Editoria', type: 'reference', to: [{ type: 'category' }], validation: (rule) => rule.required() }),
    defineField({ name: 'location', title: 'Local ou abrangência', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Autor responsável', type: 'reference', to: [{ type: 'author' }], validation: (rule) => rule.required() }),
    defineField({ name: 'readingTime', title: 'Tempo de leitura (minutos)', type: 'number', validation: (rule) => rule.required().min(1).integer() }),
    defineField({ name: 'body', title: 'Texto', type: 'array', of: [{ type: 'block' }], validation: (rule) => rule.required().min(4) }),
    defineField({ name: 'keyPoints', title: 'Em resumo', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.min(2).max(5) }),
    defineField({ name: 'sources', title: 'Fontes e documentos', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Nome da fonte', type: 'string', validation: (rule) => rule.required() },
      { name: 'url', title: 'Link', type: 'url', validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }) },
    ] }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'coverImage', title: 'Imagem de capa', type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', title: 'Texto alternativo', type: 'string', validation: (rule) => rule.required() },
    ] }),
    defineField({ name: 'imageRights', title: 'Crédito e licença da imagem', type: 'string', description: 'Informe o fotógrafo, autoria ou licença. Não publique imagens sem direito de uso.' }),
    defineField({ name: 'reviewedAt', title: 'Última checagem factual', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'aiAssistance', title: 'Uso de IA registrado', type: 'boolean', initialValue: true, validation: (rule) => rule.required() }),
    defineField({ name: 'seoTitle', title: 'Título para busca (opcional)', type: 'string', validation: (rule) => rule.max(65) }),
    defineField({ name: 'seoDescription', title: 'Descrição para busca (opcional)', type: 'text', rows: 2, validation: (rule) => rule.max(170) }),
    defineField({ name: 'publishedAt', title: 'Publicar em', type: 'datetime', description: 'Só preencha depois da revisão humana final.' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', publishedAt: 'publishedAt' },
    prepare({ title, subtitle, publishedAt }) {
      return { title, subtitle: publishedAt ? `${subtitle || 'Sem editoria'} · publicado` : `${subtitle || 'Sem editoria'} · rascunho` };
    },
  },
});
