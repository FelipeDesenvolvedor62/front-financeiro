import { InMemoryDbService } from "angular-in-memory-web-api";
import { Categoria } from "./pages/categorias/shared/categoria.model";


export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categorias: Categoria[] = [
      { id: 1, nome: 'Lazer', descricao: 'Cinema' },
      { id: 2, nome: 'Energia', descricao: 'Luz e eletro domesticos' },
      { id: 2, nome: 'Água', descricao: 'Saneamento' },
      { id: 2, nome: 'Limpeza', descricao: 'Sabão' },
    ]

    return { categorias };
  }
}
