class APIHandler {
  constructor (baseURL) {
    this.api = axios.create({ baseURL })
  }

  getFullList = () => {
    return this.api.get("/characters");
  }

  getOneRegister = (id) => this.api.get("/characters/" + id);
  

  createOneRegister = (newCharacter) => this.api.post("/characters", newCharacter);


  updateOneRegister = (updatedCharacter, id) => this.api.put("/characters/"+ id, updatedCharacter);


  deleteOneRegister = (id) => this.api.delete("/characters/" + id);

}
