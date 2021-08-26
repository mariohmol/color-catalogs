import COLORS from './src/colors'
import {
  findByColor, findByName,
  colorDistance, HEXtoRGB, groupColors
} from './src/utils'
import LANGUAGES, { translateByColor, translateByName } from './src/languages'

export {

  // Colors
  COLORS,
  findByColor,
  findByName,
  colorDistance,
  groupColors,

  // i18n
  LANGUAGES,
  translateByColor,
  translateByName,

  // Conversions
  HEXtoRGB
}