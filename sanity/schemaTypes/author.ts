import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author', title: 'Autor', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome público', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Endereço', type: 'slug', options: { source: 'name', maxLength: 80 }, validation: (rule) => rule.required() }),
    defineField({ name: 'bio', title: 'Biografia e qualificação', type: 'text', rows: 4, validation: (rule) => rule.required().min(40) }),
    defineField({ name: 'photo', title: 'Foto (opcional)', type: 'image', options: { hotspot: true } }),
  ],
});
