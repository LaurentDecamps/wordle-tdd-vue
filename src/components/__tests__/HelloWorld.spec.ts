import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from '@/settings'

const WORD_OF_THE_DAY_TO_TEST = "TESTS"
const WRONG_WORD_TO_TEST = "WRONG"
let wrapper;

beforeEach(() => {
  wrapper = mount(WordleBoard, { props: { wordOfTheDay: WORD_OF_THE_DAY_TO_TEST } })
  
})

describe('WordleBoard', () => {
  test("A victory message appears when the user makes a guess taht matches the word of the day", async () => {
    const guessInput  = wrapper.find('input[type="text"]');
    
    await guessInput.setValue(WORD_OF_THE_DAY_TO_TEST)
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })

  test("a defeat message appears if the user makes a guess that is incorrect", async () => {

    const guessInput  = wrapper.find('input[type="text"]');
    
    await guessInput.setValue(WRONG_WORD_TO_TEST)
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(DEFEAT_MESSAGE)
  })

  test("no end-of-game message appears if the user has not yet made a guess", async () => {
    const guessInput  = wrapper.find('input[type="text"]');
    
    await guessInput.setValue(WRONG_WORD_TO_TEST)

    expect(wrapper.text()).not.toContain(VICTORY_MESSAGE)
    expect(wrapper.text()).not.toContain(DEFEAT_MESSAGE)
  })

})

