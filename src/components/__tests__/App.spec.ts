import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain("Free Games Catcher");
    expect(wrapper.text()).toContain("Email");
    expect(wrapper.text()).toContain("Name");
    expect(wrapper.text()).toContain("Subscribe");
  });
});
