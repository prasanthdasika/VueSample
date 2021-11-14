import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NewsDisplay from '@/components/learning-resources/NewsDisplay.vue'

describe('NewsDisplay.vue', () => {
  it('renders props.msg when passed', () => {
    const newsItem = { title: 'cnn', description: 'cnn news', url: 'http://cnn.com' }
    const wrapper = shallowMount(NewsDisplay, {
      props: { newsItem }
    })
    expect(wrapper.text()).to.include(newsItem.title)
  })
})
