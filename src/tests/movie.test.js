const request = require('supertest');
const app = require('../app');
require('../models')

let movieId;

test("POST /movie should create one movie", async() => {
    const newMovie =  {
        name: 'StarWars',
        image: "https://www.latercera.com/resizer/kq4Mv90RVNqF6LjHKToOIs8ESNU=/900x600/filters:focal(452x472:462x462)/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/EBD4GHCKDRFDJII4KJLMF2PHJQ.jpg",
        synopsis: 'bla bla bla..',
        releaseYear: 1980
    }

    const res = await request(app).post('/movie').send(newMovie);
    movieId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(newMovie.name)
    expect(res.body.image).toBe(newMovie.image)
    expect(res.body.synopsis).toBe(newMovie.synopsis)
    expect(res.body.releaseYear).toBe(newMovie.releaseYear)
});

test("GET /movie should get one movie", async() => {
    
    const res = await request(app).get('/movie');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].actors).toBeDefined();
    expect(res.body[0].directors).toBeDefined();
    expect(res.body[0].genres).toBeDefined();
    
});


test('PUT /movie/:id should update one movie', async() =>{
    const body = {
        name: "StarWars x2"
    }

    const res = await request(app)
        .put(`/movie/${movieId}`)
        .send(body);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe(body.name);
});


test('DELETE /movie/:id should delete one movie', async()=> {
    const res = await request(app).delete(`/movie/${movieId}`);
    expect(res.status).toBe(204);
} )

