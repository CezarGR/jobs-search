import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('Home view test', () => {
    it('render view', () => {
        const wrapper = mount(HomeView)

        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('h1').text()).toBe('Jobs Search')
    })
})