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
  }
}
