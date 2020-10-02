import picture from './img/cat.jpg';
import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from './classes/blocks';
import { css } from './utils';

export const model = [
  new TitleBlock('Сайт -конструктор на чистом JavaScript', {
    tag: 'h2',
    styles: css({
      'text-align': 'center', 
      margin: '20px 0'
    })
    }
  ),
  new TextBlock('Сайт реализован по методологии ООП. Добавьте контент и css стили в левой панели.',
    {
      styles: css({
        margin: '15px 60px',
        padding: '1rem 0',
        background: '#dee9f5a6', 
        'border-radius': '6px'
      })
    }
  ),
  new TextColumnsBlock(
    ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, dicta esse. Earum reprehenderit molestiae doloremque quibusdam maiores sit veritatis repellendus!'
    ],
    {
      styles: css({
        padding: '1rem',
        width: '90%',
        margin: '0 auto'
      })
    }
  ),
  new ImageBlock(picture,
    {
      styles: css({
        padding: '2rem 0', 
        display: 'flex',
        'justify-content': 'center',
      }),
      imageStyles: 'width: 300px; hight: auto;',
      alt: 'picture',
    }
  )
  
]