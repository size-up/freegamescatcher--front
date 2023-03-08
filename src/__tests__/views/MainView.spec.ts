import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import MainView from "../../views/MainView.vue"

describe("MainView", () => {
  it("renders properly", () => {
    const wrapper = mount(MainView)
    expect(wrapper.text()).toContain("Home page")
  })
})
