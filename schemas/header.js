export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'logoText',
            title: 'Main logo text',
            type: 'string',
        },
        {
            name: 'motto',
            title: 'Motto text',
            type: 'string',
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            description: 'Images should ideally be 400px by 400px, but it is not mandatory.',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
        },
    ],
};
