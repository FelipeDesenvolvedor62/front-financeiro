import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categoria = [
      { id: 1, name: 'Lazer', descricao: 'Cinema' },
      { id: 2, name: 'Energia', descricao: 'Luz e eletro domesticos' },
      { id: 2, name: 'Água', descricao: 'Saneamento' }
    ]

    return { categoria };
  }
}
