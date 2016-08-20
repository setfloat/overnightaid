'use strict';

exports.seed = function(knex) {
  return knex('items').del()
    .then(() => knex('items').insert([
      {
        id: 1,
        item_name: 'mens_clothes',
        display_name: 'Men\'s Clothes',
        description: 'One week\'s clothing for an adult male',
        category: 'clothing',
        img_url: 'http://ep.yimg.com/ay/yhst-67636109930145/flat-clothing-photography-kit-42.jpg',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 2,
        item_name: 'womens_clothes',
        display_name: 'Women\'s Clothes',
        description: 'One week\'s clothing for an adult female',
        category: 'clothing',
        img_url: 'http://www.1tshirtsworld.com/wp-content/uploads/2009/09/coast-clothing-uk.jpg',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 3,
        item_name: 'infant_pack',
        display_name: 'Infant Pack',
        description: 'One week\'s supplies for an infant. Includes diapers, clothing, formula, and whatever else an infant is supposed to need',
        category: 'optionables',
        img_url: 'http://paydayloansusadsd.com/wp-content/uploads/2016/07/11336047-rev-shea-blessed-the-collection-of-baby-supplies.jpg',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 4,
        item_name: 'dog_pack',
        display_name: 'Dog Pack',
        description: 'One week\'s supplies for a dog',
        category: 'optionables',
        img_url: 'http://www.aldoo.org/wp-content/uploads/2015/01/dog-image.jpg',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      },
      {
        id: 5,
        item_name: 'cat_pack',
        display_name: 'Cat Pack',
        description: 'One week\'s supplies for a cat',
        category: 'optionables',
        img_url: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC')
      }
      ])
  )
  .then(() knex.raw(
    "SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));"
      )
    );
};
