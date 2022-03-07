import React from 'react'
import { shallow } from "enzyme";
import NavBar from "../Components/NavigationBar/NavBar"

const setup = () => {
    return shallow(<NavBar/>);
  };
test('renders correctly', () => {
    const wrapper = setup();
    expect(wrapper).toBeTruthy();
});
test("li home text test", ()=> {
    const wrapper = setup();
    expect(wrapper.find('[test-attr="nav-bar-li-home"]').text()).toBe("Home")
})
test('li units text test', ()=> {
    const wrapper = setup();
    const textControl = expect(wrapper.find('[test-attr="nav-bar-li-units"]').text())
    textControl.toBe("Units")
})

