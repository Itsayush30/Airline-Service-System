const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crud Repo : create ");
      throw error;
    }
  }

  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crud Repo : get ");
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crud Repo : getAll ");
      throw error;
    }
  }

  async update(id, data) {
    // data -> {col: value, ...}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in Crud Repo : update ");
      throw error;
    }
  }
}

module.exports = CrudRepository;

/*The error parameter in the catch block is automatically populated with the exception object,
providing information about the error.*/
