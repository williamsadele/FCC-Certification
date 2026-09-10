// const canDrink = ages.filter((age) => {
//     if(age >= 21){
//         return true
//     }
//     else {return false

//     }
// })

const companies = [
    {name: "January", category: "Retatil"},
    {name: "Febuary", category: "Distributor"},
    {name: "March", category: "Retatil"},
    {name: "April", category: "Wholesale"},
]
const getRetails = companies.filter(company =>{ 
    if(company.category === "Retail"){
        return true
    }
});
console.log(getRetails)
// const getCategory = companies.filter((company) => company.category === "Retail")

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
