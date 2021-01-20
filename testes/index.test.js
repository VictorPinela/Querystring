const { input } = require('../crud/input');
const { search } = require('../crud/search');
const { searchNewest } = require('../crud/search');
const { edit } = require('../crud/edit');
const { delet } = require('../crud/delet');


test('delete', () => {
  const info = [];

  let a = delet("5", info);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Banco de dados vazio");

  info.push({ "id": "5", "name": "Danilo", "age": "23" });

  let b = delet("1", info);
  expect(b.isValid).toBeFalsy();
  expect(b.msg).toEqual("ID invalido");

  let c = delet(undefined, info);
  expect(c.isValid).toBeFalsy();
  expect(c.msg).toEqual("Busca sem parametros");

  let d = delet("5", info);
  expect(d.isValid).toBeTruthy();
  expect(d.msg).toEqual("Cadastro deletado com sucesso");
  expect(search("5", info, true).isValid).toBeFalsy();
});


test('search object', () => {
  const info = [];

  let a = search("5", info, true);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Banco de dados vazio");

  info.push({ "id": "5", "name": "Danilo", "age": "23" });
  info.push({ "id": "de57", "name": "victor", "age": "20" });

  let b = search("1", info, true);
  expect(b.isValid).toBeFalsy();
  expect(b.msg).toEqual("ID invalido");

  let c = search(undefined, info, true);
  expect(c.isValid).toBeFalsy();
  expect(c.msg).toEqual("Busca sem parametros");

  let d = search("5", info, true);
  expect(d.isValid).toBeTruthy();
  expect(d.msg).toEqual({ "id": "5", "name": "Danilo", "age": "23" });

  let f = search("de57", info, true);
  expect(f.isValid).toBeTruthy();
  expect(f.msg).toEqual({ "id": "de57", "name": "victor", "age": "20" });
});


test('search index', () => {
  const info = [];

  let a = search("5", info, false);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Banco de dados vazio");

  info.push({ "id": "5", "name": "Danilo", "age": "23" });
  info.push({ "id": "de57", "name": "victor", "age": "20" });

  let b = search("1", info, false);
  expect(b.isValid).toBeFalsy();
  expect(b.msg).toEqual("ID invalido");

  let c = search(undefined, info, false);
  expect(c.isValid).toBeFalsy();
  expect(c.msg).toEqual("Busca sem parametros");

  let d = search("5", info, false);
  expect(d.isValid).toBeTruthy();
  expect(d.msg).toEqual(0);

  let f = search("de57", info, false);
  expect(f.isValid).toBeTruthy();
  expect(f.msg).toEqual(1);
});


test('search Newest', () => {
  const info = [];

  let a = searchNewest(info);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Banco de dados vazio");

  info.push({ "id": "5", "name": "Danilo", "age": "23" });
  info.push({ "id": "de57", "name": "victor", "age": "20" });
  info.push({ "id": "0", "name": "renato", "age": "32" });

  let b = searchNewest(info);
  expect(b.isValid).toBeTruthy();
  expect(b.msg).toEqual({ "id": "de57", "name": "victor", "age": "20" });
});

test('edit', () => {
  let mod;
  const info = [];

  let a = edit("5", mod, info);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Banco de dados vazio");

  info.push({ "id": "5", "name": "Danilo", "age": "23" });
  info.push({ "id": "de57", "name": "victor", "age": "20" });

  let b = edit("1", mod, info);
  expect(b.isValid).toBeFalsy();
  expect(b.msg).toEqual("ID invalido");

  let c = edit(undefined, mod, info);
  expect(c.isValid).toBeFalsy();
  expect(c.msg).toEqual("Busca sem parametros");

  mod = { "name": "", "age": "" };
  let d = edit("5", mod, info);
  expect(d.isValid).toBeFalsy();
  expect(d.msg).toEqual("Campo nome vazio");

  mod = { "name": "Vaic09321", "age": "" };
  let e = edit("5", mod, info);
  expect(e.isValid).toBeFalsy();
  expect(e.msg).toEqual("Campo nome não deve conter numeros ou caracteres especiais");

  mod = { "name": "Vaictor", "age": "" };
  let f = edit("5", mod, info);
  expect(f.isValid).toBeFalsy();
  expect(f.msg).toEqual("Campo idade vazio");

  mod = { "name": "Vaictor", "age": "anos 15" };
  let g = edit("5", mod, info);
  expect(g.isValid).toBeFalsy();
  expect(g.msg).toEqual("Idade deve conter somente numeros");

  mod = { "name": "Vaictor", "age": "15" };
  let h = edit("5", mod, info);
  expect(h.isValid).toBeFalsy();
  expect(h.msg).toEqual("Idade deve ser maior de 18 anos");

  mod = { "name": "Vaictor", "age": "23" };
  let i = edit("5", mod, info);
  expect(i.isValid).toBeTruthy();
  expect(i.msg).toEqual("Cadastro alterado com sucesso");
});

test('input', () => {
  const info = [];

  let mod = { "name": "", "age": "" };
  let a = input(mod, info);
  expect(a.isValid).toBeFalsy();
  expect(a.msg).toEqual("Campo nome vazio");

  mod = { "name": "Vaic09321", "age": "" };
  let b = input(mod, info);
  expect(b.isValid).toBeFalsy();
  expect(b.msg).toEqual("Campo nome não deve conter numeros ou caracteres especiais");

  mod = { "name": "Vaictor", "age": "" };
  let c = input(mod, info);
  expect(c.isValid).toBeFalsy();
  expect(c.msg).toEqual("Campo idade vazio");

  mod = { "name": "Vaictor", "age": "anos 15" };
  let d = input(mod, info);
  expect(d.isValid).toBeFalsy();
  expect(d.msg).toEqual("Idade deve conter somente numeros");

  mod = { "name": "Vaictor", "age": "15" };
  let e = input(mod, info);
  expect(e.isValid).toBeFalsy();
  expect(e.msg).toEqual("Idade deve ser maior de 18 anos");

  mod = { "name": "Vaictor", "age": "23" };
  let f = input(mod, info);
  expect(f.isValid).toBeTruthy();
  expect(f.msg).toEqual(info[0].id);

});
