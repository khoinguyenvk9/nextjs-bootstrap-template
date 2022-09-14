import { get } from 'lodash'
import { numeral } from './numeral'

export const formatMoneyVN = (amount: number | string): string => {
  amount = +amount
  return numeral(amount).format(',0$')
}

export const displayNumber = (number: string | number) => {
  const num = number + ''
  if (num.length > 1 || num === '0') return num
  return `0${num}`
}

export const srcSet = (item: any): string => {
  const breakpoints: string[] = ['300w', '576w', '768w', '992w']

  const url: string[] = [
    get(item, 'formats.thumbnail.url'),
    get(item, 'formats.small.url'),
    get(item, 'formats.medium.url'),
    get(item, 'formats.large.url'),
  ]

  let res: string = ''

  for (let i = 0; i < url.length; i++) {
    if (url[i]) res += `${url[i]} ${breakpoints[i]}, `
  }

  return res
}

