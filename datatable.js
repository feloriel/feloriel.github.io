const datatable = webix.ui({
  view: 'datatable',
  container: 'datatable',
  autowidth: true,
  autoheight: true,
  select: 'row',
  multiselect: true,
  // blockselect: true,
  editable: true,
  footer: true,
  columns: [
    {
      id: 'title',
      header: ['Film title', { content: 'textFilter' }],
      editor: 'text',
      width: 400,
      footer: 'The total votes:',
      sort: textLength
    },
    {
      id: 'year',
      header: ['Year', { content: 'numberFilter' }],
      editor: 'inline-text',
      template: '<input type="text" value="#year#" style="width: 70px;">',
      width: 150,
      sort: 'int'
    },
    {
      id: 'category',
      header: ['Category', { content: 'selectFilter' }],
      width: 150,
      editor: 'select',
      options: ['', 'Crime', 'Thriller'],
      sort: 'string'
    },
    {
      id: 'votes',
      header: ['Votes', { content: 'textFilter', compare: startCompare }],
      width: 150,
      footer: { content: 'summColumn' },
      sort: 'int'
    }
  ],
  datatype: 'json',
  data: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      year: 1994,
      votes: 678790,
      category: 'Thriller'
    },
    { id: 2, title: 'The Godfather', year: 1972, votes: 511495, category: 'Crime' },
    { id: 3, title: 'The Godfather: Part II', year: 1974, votes: 319352, category: 'Crime' },
    { id: 4, title: 'Pulp fiction', year: 1994, votes: 533848, category: 'Crime' }
  ]
});

function textLength(a, b) {
  a = a.title.toString().length;
  b = b.title.toString().length;
  return a > b ? 1 : a < b ? -1 : 0;
}

function startCompare(value, filter) {
  value = value.toString();
  filter = filter.toString();
  return value.indexOf(filter) === 0;
}
