export default class fetchMock {
    getMock() {
        fetch('http://mock-serve-edge.herokuapp.com/api/mock')
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    saveMock(payload) {
        fetch('https://mock-serve-edge.herokuapp.com/api/mock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
}
