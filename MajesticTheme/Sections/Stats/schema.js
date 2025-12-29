/**
 * Stats Section Schema - MajesticBuyerTheme
 */
import { createSectionSchema, commonVariations } from '@/themes/shared/schemas';

export const statsSchema = createSectionSchema({
    name: 'Stats',
    key: 'stats',
    description: 'Split layout with content left and 2x2 stat cards grid right',
    variations: commonVariations.stats,
});

export default statsSchema;
