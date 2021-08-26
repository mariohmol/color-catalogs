import COLORS from './src/colors'
import {
  findByColor, findColorByName,
  colorDistance, HEXtoRGB
} from './src/utils'
import LANGUAGES, { translateByColor, translateByName } from './src/languages'

export {

  // Colors
  COLORS,
  findByColor,
  findColorByName,
  colorDistance,

  // i18n
  LANGUAGES,
  translateByColor,
  translateByName,

  // Conversions
  HEXtoRGB
}