const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
  host: 'localhost:8080',
  log: 'error'
});

export default {
  searchWikiByTitle: function (model, title, offset, cb) {
    let body = {
      query: {
        match: {
          [model]: {
            query: title,
          }
        }
      }
    };
    esClient.search({
        index: 'wikipedia',
        body: body,
        size: 15,
        from: offset
      })
      .then(results => {
        cb(results)
      })
      .catch(console.error);
  },

  getSuggest: function (queryString, cb) {
    let suggests = [];
    let body = {
      text: queryString,
      bodySuggester: {
        phrase: {
          field: 'title'
        }
      }
    }
    esClient.suggest({
        index: 'wikipedia',
        body: body
      })
      .then(results => {
        // cb(results.bodySuggester[0].options.forEach())
        if (results.bodySuggester[0].options.length > 0) {
          results.bodySuggester[0].options.forEach(option => {
            suggests.push({
              value: option.text
            });
          })
          console.log(suggests)
          cb(suggests);
          return;
        }
        cb([]);
      })
      .catch(console.error);
  },

  getWikipediaById(id, cb) {
    esClient.get({
      index: 'wikipedia',
      type: 'page',
      id: id
    }, function (error, response) {
      cb(response)
    })
  }
}
