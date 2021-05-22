import { shallow } from "enzyme";
import GiftExpertApp from "../GiftExpertApp";

describe('Provando GiftExpertApp', () => {

    test('Renderizando GiftExpertApp', () => {

        const wrapper = shallow(<GiftExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragonball']
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })


})
