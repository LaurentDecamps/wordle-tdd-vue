import { mount } from '@vue/test-utils'
import WordleBoard from '../WordleBoard.vue'
import { VICTORY_MESSAGE } from '@/settings'

const wordOfTheDayToTest = "TESTS"
describe('WordleBoard', () => {
  test("A victory message appears when the user makes a guess taht matches the word of the day", async () => {
    const wrapper = mount(WordleBoard, { props: { wordOfTheDay: wordOfTheDayToTest } })

    const guessInput = wrapper.find('input[type="text"]')
    await guessInput.setValue(wordOfTheDayToTest)
    await guessInput.trigger('keydown.enter')

    expect(wrapper.text()).toContain(VICTORY_MESSAGE)
  })
})

