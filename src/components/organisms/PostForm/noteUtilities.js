export const queryEmojis = async (query, callback) => {
  const url = new URL('https://emoji.getdango.com/api/emoji');
  url.searchParams.append('q', query);
  // eslint-disable-next-line no-undef
  const { results } = await fetch(url).then((res) => res.json());
  callback(results.map(({ text }) => ({ id: text })));
};

export const hashTags = [
  {
    id: 1,
    display: 'H3',
  },
  {
    id: 2,
    display: 'EU4',
  },
];
