import { WORDS } from "../constants/words"
import { getRandomIndex } from "../utils/utils"

export function getWord(){
  const randomIndex = getRandomIndex(WORDS.length)

  return WORDS[randomIndex]
}