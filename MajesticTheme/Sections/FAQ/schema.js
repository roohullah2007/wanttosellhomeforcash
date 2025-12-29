/**
 * FAQ Section Schema - MajesticBuyerTheme
 */
import { createSectionSchema, commonVariations } from '@/themes/shared/schemas';

export const faqSchema = createSectionSchema({
    name: 'FAQ',
    key: 'faq',
    description: 'Split layout with title/CTA left and accordion-style FAQs right',
    variations: commonVariations.faq,
});

export default faqSchema;
