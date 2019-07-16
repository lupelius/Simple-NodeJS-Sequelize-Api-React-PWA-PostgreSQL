process.env.NODE_ENV = 'test';

const Friend = require('../../../../app/models').Friend;

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../../../../app');

let expect = chai.expect;
chai.use(chaiHttp);

/*
* Test the GET /api/friends route
*/
describe('/GET api/friends', () => {
  beforeEach(done => {
    // Before each test we empty the database
    Friend.destroy({
      where: {},
      truncate: true
    }).then(() => done());
  });

  it('it should GET all the friends data', done => {
    chai
      .request(app)
      .get('/api/friends')
      .end((_, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

/*
 * Test the GET /api/friends/:id route
 */
describe('GET api/friends/:id', () => {
  it('should GET the friend record', done => {
    Friend.create({
      firstName: 'Borris',
      lastName: 'Johnson'
    }).then(record => {
      chai
        .request(app)
        .get(`/api/friends/${record.id}`)
        .end((_, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
