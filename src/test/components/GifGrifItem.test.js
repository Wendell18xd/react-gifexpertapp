import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';


describe('Probando el componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title)
    })

    test('Debe de tener la imagen igual a url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.props().src)
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.hasClass('animate__fadeIn'))
        expect(div.hasClass('animate__fadeIn')).toBe(true)
    })




})
