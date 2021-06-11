// Async - Await
// - async/await funciona obrigatoriamente no protocolo de promises
// - async é uma palavra chave usada no início de uma função
// - await é usado para avisar a função para esperar o resultado da promise
// - await só pode ser usado para uma função com async
// - async/await já está funcionando em quase todos os browsers e nodeJs

// Vantagens de usar o async/await

// - O codigo fica mais simplificado
// - Mais fácil de debugar por ter menos callbacks
// - A conversão de uma promise para async/await é bem simples
// - O código fica com menos encadeamentos

// async function getPosts() {
//   try {
//     const response = await fetch('https://willianjusten.com.br/search.json');
//     const data = await response.json();

//     return data.map((post) => {
//       console.log(post.title);
//     });
//   } catch (err) {
//     console.error('Nooooo, we got an error!', err);
//   }
// }

// getPosts();

// Varias promises
// async function getUsers(users) {
//   const promises = users.map((user) =>
//     fetch(`https://api.github.com/users/${user}`).then((r) => r.json())
//   );

//   const people = await Promise.all(promises);
//   console.log(people.map((p) => p.name));
// }

// getUsers(['CristianoSantan', 'Willianjusten', 'guilouro']);
