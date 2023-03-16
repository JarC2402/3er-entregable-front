const request = require('supertest');
const app = require('../app');

let actorId;

test("POST /genres should create actor", async() => {
    const newActor =  {
        firstName: 'Tom',
        lastName: 'Cruice',
        nationality: 'USA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harrison_Ford_by_Gage_Skidmore_3.jpg/330px-Harrison_Ford_by_Gage_Skidmore_3.jpg',
        birthday: '1942-06-13'
    }

    const res = await request(app).post('/actor').send(newActor);
    actorId = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(newActor.firstName)
    expect(res.body.lastName).toBe(newActor.lastName)
    expect(res.body.nationality).toBe(newActor.nationality)
    expect(res.body.image).toBe(newActor.image)
    expect(res.body.birthday).toBe(newActor.birthday)

});

test("GET /actor should get one actor", async() => {
    
    const res = await request(app).get('/actor');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
});

test('PUT /actor/:id should update one actor', async() =>{
    const body = {
        firstName: 'Tom x2'
    }

    const res = await request(app)
        .put(`/actor/${actorId}`)
        .send(body);
    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(body.firstName);
});


test('DELETE /actor/:id should delete one actor', async()=> {
    const res = await request(app).delete(`/actor/${actorId}`);
    expect(res.status).toBe(204);
} )

