const request = require('supertest');
const app = require('../app');

let genreId;

test("POST /genres should create one genre", async() => {
    const newGenre =  {
        name: 'fantasy'
    }

    const res = await request(app).post('/genre').send(newGenre);
    genreId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(newGenre.name)
});

test("GET /genres should get one genre", async() => {
    
    const res = await request(app).get('/genre');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT /genres/:id should update one genre', async() =>{
    const body = {
        name: "fantasy x2"
    }

    const res = await request(app)
        .put(`/genre/${genreId}`)
        .send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});


test('DELETE /genre/:id should delete one genre', async()=> {
    const res = await request(app).delete(`/genre/${genreId}`);
    expect(res.status).toBe(204);
} )











