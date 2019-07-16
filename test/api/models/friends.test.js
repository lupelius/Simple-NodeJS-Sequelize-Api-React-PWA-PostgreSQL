let expect = require('chai').expect;
const Friend = require('../../../app/models').Friend;

describe('MODEL Friend', () => {
  it('should create a Friend record', done => {
    Friend.create({
      firstName: 'John',
      lastName: 'Doe',
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(friendData => {
        Friend.all()
          .then(data => {
            expect(data[data.length - 1].dataValues.id).to.eq(
              friendData.dataValues.id
            );
            done();
          })
          .catch(error => {
            throw new Error(error);
          });
      })
      .catch(error => {
        throw new Error(error);
      });
  });
});
