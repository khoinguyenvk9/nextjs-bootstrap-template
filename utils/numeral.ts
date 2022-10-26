import _numeral from 'numeral'

if (!(_numeral as any).vie) {
  _numeral.register('locale', 'vie', {
    ordinal: (num: number) => num.toString(),
    delimiters: {
      thousands: ',',
      decimal: '.',
    },
    abbreviations: {
      thousand: ',000',
      million: ',000,000',
      billion: ',000,000,000',
      trillion: ',000,000,000,000',
    },
    currency: {
      symbol: '',
    },
  });
  (_numeral as any).vie = true
}

_numeral.locale('vie')

export const numeral = _numeral

