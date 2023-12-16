import image from './assets/image.png'
import { TextBlock, ImageBlock, ColumnsBlock, TitleBlock } from './classes/blocks'

const text = `
УАААУ тут тожее какой-то текст!!! <a href="https://youtube.com" target="_blank">И ДАЖЕ ССЫЛКА</a>`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),

  new ColumnsBlock([
    'Приложение на чистом JS, без библиотек',
    'Вторая колонка с какой-то информацией',
    'Ну и 3 блок'], {
    styles: {
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      color: '#fff',
      padding: '2rem',
      'font-weight': 'bold'
    }
  }),

  new TextBlock(text, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
]