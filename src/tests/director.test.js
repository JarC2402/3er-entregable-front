const request = require('supertest');
const app = require('../app');

let directorId;

test("POST /genres should create one director", async() => {
    const newDierector =  {
        firstName: 'Roberto',
        lastName: 'Gomez',
        nationality: 'Mex',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/330px-Harrison_Ford_by_Gage_Skidmore_3.jpg',
        birthday: '1946-10-04'
    }

    const res = await request(app).post('/director').send(newDierector);
    directorId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(newDierector.firstName)
    expect(res.body.lastName).toBe(newDierector.lastName)
    expect(res.body.nationality).toBe(newDierector.nationality)
    expect(res.body.image).toBe(newDierector.image)
    expect(res.body.birthday).toBe(newDierector.birthday)
});

test("GET /director should get one director", async() => {
    
    const res = await request(app).get('/director');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT /director/:id should update one director', async() =>{
    const body = {
        firstName: "Roberto chapulin"
    }

    const res = await request(app)
        .put(`/director/${directorId}`)
        .send(body);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});


test('DELETE /director/:id should delete one director', async()=> {
    const res = await request(app).delete(`/director/${directorId}`);
    expect(res.status).toBe(204);
} )

