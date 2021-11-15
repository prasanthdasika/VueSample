import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import NewsDisplay from '@/components/learning-resources/NewsDisplay.vue'
import App from 'App.vue'

describe('NewsDisplay.vue', () => {
  it('renders props when passed', () => {
    const newsItem = { title: 'cnn', description: 'cnn news', url: 'http://cnn.com' }
    const wrapper = shallowMount(NewsDisplay, {
      props: { newsItem }
    })
    expect(wrapper.text()).to.contain(newsItem.title)
  })
})

describe('AppLoadingScreen', () => {
  let component

  beforeEach(() => {
    component = shallowMount(App)
  })

  it('should render Spinner on mount', () => {
    expect(component.find(NewsDisplay).exists()).to.be.true
  })
})
