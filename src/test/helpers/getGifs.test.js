import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 10 elementos', async () => {

        const gift = await getGifs('One punch');
        expect(gift.length).toBe(10);
    })

    test('Debe de traer 0 elementos', async () => {

        const gift = await getGifs('');
        // console.log(gift)
        expect(gift.length).toBe(0);
    })

})
