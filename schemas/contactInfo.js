export default {
    name: 'contactInfo',
    title: 'Contact Info',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            description: 'This is the email address that will show up on the contact page.',
            type: 'string',
            validation: Rule => Rule.required().min(6),
        },
        {
            name: 'phone',
            title: 'Phone number',
            description: 'This is the phone numberthat will show up on the contact page (in xxx-xxx-xxxx format). If left blank, there will be no mention of a phone number on the contact page.',
            type: 'string',
        },
    ],
};
