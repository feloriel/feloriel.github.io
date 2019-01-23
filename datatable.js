webix.i18n.pager = {
  next: 'Next', // the next button
  prev: 'Prev' // the previous button
};

const datatable = webix.ui({
  id: 'datatable',
  view: 'datatable',
  container: 'datatable',
  autowidth: true,
  autoheight: true,
  select: 'row',
  multiselect: true,
  // blockselect: true,
  editable: true,
  footer: true,
  math: true,
  drag: true,
  leftSplit: 1,
  rightSplit: 1,
  scheme: {
    $change: oddLines
  },
  pager: {
    template: '{common.prev()} {common.pages()} {common.next()}',
    size: 3,
    container: 'pager_box1'
  },
  columns: [
    {
      id: 'title',
      template: '<b>#title#</b> (<i>#director#</i>)',
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
      template: votesRating,
      header: ['Votes', { content: 'textFilter', compare: startCompare }],
      width: 150,
      footer: { content: 'summColumn' },
      sort: 'int'
    },
    {
      id: 'average',
      header: ['+/- the average', { content: 'textFilter', compare: startCompare }],
      math: '[$r,:3]-([:0,:3]+[:1,:3]+[:2,:3]+[:3,:3])/4',
      width: 150,
      sort: 'int'
    },
    {
      id: 'details',
      template:
        '<a href="#link#" target="_blank"><input type="button" value="Details" class="detailsBtn"></a>',
      header: ['Details'],
      width: 100
    }
  ],
  datatype: 'json',
  data: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      year: 1994,
      votes: 678790,
      category: 'Thriller',
      link: 'https://www.imdb.com/title/tt0111161/?ref_=nv_sr_1'
    },
    {
      id: 2,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      year: 1972,
      votes: 511495,
      category: 'Crime',
      link: 'https://www.imdb.com/title/tt0068646/?ref_=nv_sr_1'
    },
    {
      id: 3,
      title: 'The Godfather: Part II',
      director: 'Francis Ford Coppola',
      year: 1974,
      votes: 319352,
      category: 'Crime',
      link: 'https://www.imdb.com/title/tt0071562/?ref_=nv_sr_1'
    },
    {
      id: 4,
      title: 'Pulp fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      votes: 533848,
      category: 'Crime',
      link: 'https://www.imdb.com/title/tt0110912/?ref_=nv_sr_1'
    }
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

function votesRating(obj) {
  if (obj.votes > 500000) {
    return "<span style='color:green;'>" + obj.votes + '</span>';
  } else {
    return "<span style='color:red;'>" + obj.votes + '</span>';
  }
}

function oddLines(item) {
  if (item.id % 2 != 0) {
    item.$css = 'oddLines';
  }
}
