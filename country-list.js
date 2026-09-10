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
// const getRetails = companies.filter(company =>{ 
//     if(company.category === "Retail"){
//         return true
//     }
// });
// console.log(getRetails)
// // const getCategory = companies.filter((company) => company.category === "Retail")

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))
// //Get companies that lasted 10 years or more
// const tenYears = companies.filter(company => {
//     if(company.end - company.start >= 10){
//         return true
//     }
// })
// const tenYears = companies.filter(company => (company.end - company.start >= 10))
const companyNames = companies.map((company) => {
    return company.name
})
console.log(companyNames)
const ageSum = ages.reduce((total, age) => total + age, 0)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start) ,0)