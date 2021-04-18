export default {
    name: 'webpageText',
    title: 'Web Page Text',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Webpage',
            type: 'string',
        },
        {
            name: 'pageText',
            title: 'Text for this web page',
            description: 'This is what will appear on this webpage.',
            type: 'blockContentText',
            validation: Rule => Rule.required(),
        },
    ],
};
