const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
  host: 'localhost:8080',
  log: 'error'
});

export default {
  searchWikiByTitle: function (title, cb) {
    let body = {
      query: {
        match: {
          title: {
            query: title,
          }
        }
      }
    };
    esClient.search({
        index: 'wikipedia',
        body: body
      })
      .then(results => {
        cb(results)
      })
      .catch(console.error);
  }
}
