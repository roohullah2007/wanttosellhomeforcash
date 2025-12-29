/**
 * Testimonials Section Schema - MajesticBuyerTheme
 */
import { createSectionSchema, commonVariations } from '@/themes/shared/schemas';

export const testimonialsSchema = createSectionSchema({
    name: 'Reviews',
    key: 'reviews',
    description: 'Horizontal slider with quote cards and arrow navigation',
    variations: commonVariations.testimonials,
});

export default testimonialsSchema;
