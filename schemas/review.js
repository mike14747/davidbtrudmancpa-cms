export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'reviewer',
            title: 'Reviewer',
            type: 'string',
            validation: Rule => Rule.required().min(1).max(80),
        },
        {
            name: 'date',
            title: 'Date of the review',
            type: 'date',
            validation: Rule => Rule.required(),
        },
        {
            name: 'review',
            title: 'Text for this review',
            type: 'blockContentText',
            validation: Rule => Rule.required(),
        },
    ],
};
