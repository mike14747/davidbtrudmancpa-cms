import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContentText from './blockContentText';
import webpageText from './webpageText';
import review from './review';
import header from './header';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        blockContentText,
        webpageText,
        review,
        header,
    ]),
});
