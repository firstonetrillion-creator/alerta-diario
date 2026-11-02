import { defineField, defineType } from 'sanity';

export const category = defineType({
  name: 'category', title: 'Editoria', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Nome', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Endereço', type: 'slug', options: { source: 'title', maxLength: 80 }, validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Descrição', type: 'text', rows: 3, validation: (rule) => rule.required() }),
  ],
});
