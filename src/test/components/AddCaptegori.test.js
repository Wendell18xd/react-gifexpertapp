import { shallow } from "enzyme";
import AddCaptegori from "../../components/AddCaptegori";

describe('Pruebas en AddCaptegori', () => {

    const setCategories = jest.fn()
    let wrapper = shallow(<AddCaptegori setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCaptegori setCategories={setCategories} />);
    });

    test('Debe de mostrase correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text()).toBe(value);
    })

    test('NO debe de postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategoris y limpiar la caja de texto', () => {
        const value = 'Hola xd';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe("")
    })


})
