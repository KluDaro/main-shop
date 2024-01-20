export default {
    name: 'StrawElement',
    type: 'document',
    title: 'Клубника',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Название сорта'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Фото клубники',
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
            title: 'Тег клубники',
            options : {
                source: 'name'
            }
        },
        {
            name: 'price',
            type: 'number',
            title: 'Цена',
        },
        {
            name: 'price_id',
            title: 'Индикатор',
            type: 'string',
        },
        {
            name: 'category',
            title: "Категория клубники",
            type: 'reference',
            to: [
                {
                    type: 'category'
                }
            ]
        }
    ]
}