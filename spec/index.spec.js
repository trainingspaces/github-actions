const SERVICE_ENDPOINT = 'http://localhost:3000';

describe('Service integration tests: ', () => {

    it('should be ok', async () => {
        const jsonPayload = JSON.stringify({ type: 'test', content: 'dummy'});
        const response = await fetch(SERVICE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonPayload
        });

        expect(await response.text()).toEqual(jsonPayload);
    });
});
