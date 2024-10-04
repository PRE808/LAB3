const favoritesauces=['mustard','hot sauce', 'ketchup', 'pesto', 'hot honey'];
const listsauce = favoritesauces[0];
console.log(listsauce);
console.log(favoritesauces[3]);
favoritesauces[1]='dijon mustard';
console.log(favoritesauces);
favoritesauces[2]='sweet and spicy sauce';
console.log(favoritesauces);
favoritesauces[5]='honey';
console.log(favoritesauces);
console.log(favoritesauces.length);
favoritesauces.push('spicy ketchup','soy sauce');
console.log(favoritesauces);
favoritesauces.pop();
console.log(favoritesauces);
favoritesauces.shift();
console.log(favoritesauces);
for (let F = 0 ; F<favoritesauces.length; F++) {console.log('my favorite sauces are ${favoritesauces[F] }')
