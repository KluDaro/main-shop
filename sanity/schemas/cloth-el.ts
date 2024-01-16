export default {
    name: 'clothEl',
    type: 'document',
    title: 'Вещи',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Имя вещи'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Фото вещей',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Описание'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug вещи',
            options : {
                source: 'name'
            }
        },
        {
            name: 'grade',
            type: 'number',
            title: 'Grade',
        },
        {
            name: 'price_id',
            title: 'Stripe price id',
            type: 'string',
        },
        {
            name: 'category',
            title: "Категория вещи",
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }
    ]
}