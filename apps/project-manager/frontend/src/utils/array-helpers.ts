export const groupBy = <T extends {}>(getKey: (item: T) => string, array: T[]) =>
    array.reduce<{ [key: string]: T[] }>((acc, item) => {
        const key = getKey(item);
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
    }, {});
