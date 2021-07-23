const cats = ["Milo", "Otis", "Garfield"] ;
function destructivelyAppendCat( Jacob ) {
cats.push( Jacob ) 
}

function destructivelyPrependCat (Marvin) {
    cats.unshift (Marvin)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(Broom) {
   const moreCats = [...cats, Broom]
   return moreCats;
}

function prependCat(Arnold) {
    const evenmoreCats = [Arnold, ...cats ]
    return evenmoreCats;
 }

 function removeLastCat() {
     const lessCats = cats.slice (0,cats.length-1)
     return lessCats;
 }

 function removeFirstCat() {
     const evenLessCats = cats.slice(1)
     return evenLessCats;
 }