require('dotenv').config();
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = (event, context, callback) => {
  console.log('Function `timeslot-read-all` invoked');
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_timeslot'))))
    .then((response) => {
      const timeslotRefs = response.data;
      console.log('Timeslot refs', timeslotRefs);
      console.log(`${timeslotRefs.length} timeslot found`);
      // create new query out of timeslot refs. http://bit.ly/2LG3MLg
      const getAllTimeslotDataQuery = timeslotRefs.map((ref) => {
        console.log(ref);
        return q.Get(ref);
      });
      // then query the refs
      return client.query(getAllTimeslotDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret),
        });
      });
    })
    .catch((error) => {
      console.log('error', error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
