const model = require("@cornerstone-erp/model");
const LRU = require("lru-cache");

module.exports = class Session {
  constructor(driver, options) {
    this.cache = new LRU(options.cache);
    this.pending = {};
    setInterval(this.resolve.bind(this), 2);
  }

  /**
   * Creates an entry
   * @param {*} trx
   * @param {*} model
   * @param {*} values
   */
  create(trx, model, values) {}

  /**
   * Gets the specified entry from the cache
   * @param {*} trx
   * @param {*} model
   * @param {*} id
   */
  read(trx, model, id) {
    const entry = this.cache.get(model + "@" + id);
    if (entry !== undefined) {
      return Promise.resolve(entry);
    }
    if (!this.pending.hasOwnProperty(model)) {
      this.pending[model] = {};
    }
    if (!this.pending[model].hasOwnProperty(id)) {
      this.pending[model][id] = [];
    }
    return new Promise(function (resolve, reject) {
      this.pending[model][id].push(resolve, reject);
    });
  }
  /**
   * Sets a list of entries
   * @param {*} trx
   * @param {*} model
   * @param {*} id
   * @param {*} values
   */
  update(trx, model, id, values) {}

  delete(trx, model, id) {}

  request(trx, model, filter, orders, offset, limit) {}

  commit(trx) {}

  rollback(trx) {}

  /**
   * Resolves pending requests
   */
  resolve() {
    for (let model in this.pending) {
      let indexes = this.pending[model];
      let ids = [];
      for (let id in indexes) {
        ids.push(id);
      }
      if (ids.length > 0) {
      }
    }
  }
};
