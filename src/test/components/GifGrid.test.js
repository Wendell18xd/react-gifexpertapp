import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Tests en componente Gifgrid', () => {

    const categories = "Goku"

    test('Debe cargar el componente GifGrid correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid categories={categories} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://xxddxd.jpg',
            title: "cualquier cosa"
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })


})
