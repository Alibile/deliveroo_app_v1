import {defineType,defineField} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'image',
      title: 'Image of the Restaurant ',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of the Restaurant ',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address ',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a Rating from (1-5) Stars)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type:"reference",
      to:[{type: "category"}]
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      validation: (Rule) => Rule.required().min(1).max(5).error("Please enter a Value between 1 and 5"),
      of:[{type: "reference", to:[{type: "category"}]}]
    }),
   
  ],


})
