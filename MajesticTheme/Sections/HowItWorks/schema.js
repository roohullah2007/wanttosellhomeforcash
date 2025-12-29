/**
 * How It Works Section Schema - MajesticBuyerTheme
 */
import { createSectionSchema, commonVariations } from '@/themes/shared/schemas';

export const howItWorksSchema = createSectionSchema({
    name: 'Process',
    key: 'process',
    description: '4-step process with badge, italic emphasis, and connector arrows',
    variations: commonVariations.howItWorks,
});

export default howItWorksSchema;
