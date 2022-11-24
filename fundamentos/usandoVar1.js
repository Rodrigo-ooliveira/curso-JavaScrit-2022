{
    {
        {
            {
                var sera = 'Será ???' //criar uma variavel fora da função ela será mostrada fora dela
                console.log(sera)
            }
        }
    }
} 

console.log(sera)

function teste() {
    var local = 123
    console.log(local) //criar uma variavel fora da função ela será mostrada somente dentro dela
    console.log(local) //criar uma variavel fora da função ela será mostrada somente dentro dela
    console.log(local) //criar uma variavel fora da função ela será mostrada somente dentro dela
}

teste() //primeiro chamar a function e depois escreve-la no console 
//console.log(local) // não aparece pois esta fora da função