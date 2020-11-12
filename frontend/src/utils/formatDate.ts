import ruLang from 'date-fns/locale/ru';
import formatDistance from 'date-fns/formatDistance';

export const formatDate = (date: Date): string => {
    return formatDistance(
        date,
        new Date(),
        {locale: ruLang}
    )
}