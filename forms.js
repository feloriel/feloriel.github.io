const fruit = [
  { id: 1, value: 'Apple' },
  { id: 2, value: 'Banana' },
  { id: 3, value: 'Kiwi' },
  { id: 4, value: 'Pineapple' },
  { id: 5, value: 'Grapes' },
  { id: 6, value: 'Pear' }
];

const forms = webix.ui({
  view: 'layout',
  type: 'space',
  container: 'forms',
  rows: [
    {
      view: 'toolbar',
      elements: [
        { view: 'button', value: 'Click Me', width: 150 },
        { view: 'toggle', value: true, label: 'Press Me', width: 150 },
        { view: 'checkbox', value: 1, width: 40 },
        { view: 'checkbox', width: 40 },
        { view: 'segmented', width: 300, options: ['First Segment', 'Second Segment'] }
      ]
    },
    {
      view: 'form',
      elements: [
        { view: 'text', placeholder: 'Type here..' },
        { view: 'text', type: 'password', placeholder: 'Type here..' },
        { view: 'textarea', placeholder: 'Type a long text here..' },
        { view: 'select', options: fruit, inputWidth: 150 },
        {
          view: 'combo',
          inputWidth: 150,
          value: '3',
          options: {
            yCount: 2,
            template: 'Fresh #value#',
            data: fruit
          }
        },
        { view: 'richselect', options: fruit, text: 'Kiwi', inputWidth: 150 },
        { view: 'radio', options: fruit, value: 2 },
        { view: 'counter', min: 1, max: 1000, value: 30, step: 10 },
        {}
      ]
    }
  ]
});
