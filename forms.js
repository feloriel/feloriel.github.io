const fruit = [
  { id: 1, value: 'Apple' },
  { id: 2, value: 'Banana' },
  { id: 3, value: 'Kiwi' },
  { id: 4, value: 'Pineapple' },
  { id: 5, value: 'Grapes' },
  { id: 6, value: 'Pear' }
];

const gender = [{ id: 1, value: 'Female' }, { id: 2, value: 'Male' }, { id: 3, value: 'Other' }];

const countries = [
  { id: 1, value: 'Russia' },
  { id: 2, value: 'Estonia' },
  { id: 3, value: 'Colombia' },
  { id: 4, value: 'Denmark' },
  { id: 5, value: 'Germany' },
  { id: 6, value: 'Moldova' }
];

const forms = webix.ui({
  view: 'layout',
  type: 'space',
  container: 'forms',
  rows: [
    {
      view: 'tabbar',
      multiview: true,
      options: [
        { id: 'View1', value: 'First Tab' },
        { id: 'View2', value: 'Second Tab' },
        { id: 'View3', value: 'Third Tab' },
        { id: 'View4', value: 'Fourth Tab' }
      ]
    },
    {
      cells: [
        {
          id: 'View1',
          rows: [
            {
              view: 'toolbar',
              elements: [
                { view: 'button', value: 'Click Me', width: 150 },
                {
                  view: 'toggle',
                  value: true,
                  offLabel: 'Press Me',
                  onLabel: 'I am pressed',
                  width: 150
                },
                { view: 'checkbox', value: 1, width: 40 },
                { view: 'checkbox', width: 40 },
                { view: 'segmented', width: 300, options: ['First Segment', 'Second Segment'] }
              ]
            },
            {
              view: 'form',
              elements: [
                { view: 'text', placeholder: 'Type here..', label: 'Name' },
                { view: 'text', placeholder: 'Type here..', label: 'Name', labelWidth: 80 },
                {
                  view: 'text',
                  placeholder: 'Type here..',
                  label: 'Address',
                  labelPosition: 'top'
                },
                { view: 'combo', options: gender, label: 'Gender', labelAlign: 'left' },
                {
                  cols: [
                    {
                      view: 'counter',
                      value: 21,
                      min: 10,
                      max: 100,
                      label: 'Age',
                      labelPosition: 'top'
                    },
                    { view: 'checkbox', labelRight: 'Married' }
                  ]
                },
                { view: 'button', value: 'Sumbit', inputWidth: 100 }
              ]
            }
          ]
        },
        {
          id: 'View2',
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
            { view: 'counter', min: 1, max: 1000, value: 30, step: 10 }
          ]
        },
        {
          id: 'View3',
          view: 'form',
          padding: 10,
          elements: [
            { type: 'section', template: 'Datepickers' },
            { view: 'datepicker' },
            { view: 'datepicker', value: new Date(2008, 9, 15), format: '%d/%M/%Y' },
            {
              view: 'datepicker',
              timepicker: true,
              value: new Date(2019, 0, 31, 14, 00),
              format: '%d  %M %Y at %H:%i'
            },
            { type: 'section', template: 'Colorpickers' },
            { view: 'colorpicker' },
            { view: 'colorpicker', value: '#AC00AC' }
          ]
        },
        {
          id: 'View4',
          view: 'form',
          elements: [
            { view: 'text', label: 'Login' },
            { view: 'text', type: 'password', label: 'Password' },
            { view: 'text', suggest: 'mylist', label: 'Country', suggest: countries },
            {
              view: 'button',
              type: 'iconButtonTop',
              icon: 'wxi-download',
              label: 'print',
              height: 60
            }
          ]
        }
      ]
    }
  ]
});
