let filmes = [];
for (let i = 0; i < 5; i++) {
let filme = prompt(`Digite o nome do filme ${i + 1}:`); 
    filmes.
push(filme);
}
console.log("Filmes informados:");
for (let i = 0; i < filmes.length; i++) {
    let filme = filmes[i]; 
console.log(filme); 
}