describe('To test fetch data from youtube API', ()=> {
    let data;
    beforeAll(async function () {
        data = await fetchData('Javascript');
    });

    it('Type checking that data is JSON object or not', () => {

        expect(typeof data).toEqual(typeof {});
    });

    it("fetch Data from API using search text", () => {
        expect(data.items[0].kind).toEqual("youtube#searchResult");
        expect(data.items[1].id.kind).toEqual("youtube#video");
        expect(data.items[2].id.kind).toEqual("youtube#video");

    });

});

describe('To test displayvideos and pagination', () => {
    let data, pageDiv;
    beforeAll(async function () {
        data = await fetchData('Javascript');
        pageDiv = document.createElement("div");
        pageDiv.setAttribute('id', 'pageDiv');

    });

    it(' testing for request data method', async () => {
        spyOn(window, 'fetchData');
        spyOn(window, 'displayVideos');
        RequestData('javascript');
        await Promise.resolve();
        expect(fetchData).toHaveBeenCalled();
        expect(displayVideos).toHaveBeenCalled();

    });


    it(' display video testing ', async () => {
        spyOn(window, 'applyPagination');
        displayVideos(data);
        await Promise.resolve();
        expect(applyPagination).toHaveBeenCalled();

    });

    it(' applyparigantion test', () => {
        spyOn(window, 'createButton');
        applyPagination(data, pageDiv);
        expect(createButton).toHaveBeenCalled();
    });
});


