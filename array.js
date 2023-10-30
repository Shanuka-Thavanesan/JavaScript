// // //array
// // var aa = [];
// // console.log(aa);

// // var bb = [1, 2, 3, 4, 5, 6];
// // var len=bb.length;
// // console.log(bb);
// // console.log(len);

// // var firstItem = bb[0];
// // var middleItemIndex = Math.floor(bb.length / 2);
// // var middleItem = bb[middleItemIndex];
// // var lastItem = bb[bb.length - 1];

// // console.log("First Item: " + firstItem);
// // console.log("Middle Item: " + middleItem);
// // console.log("Last Item: " + lastItem);

// var mixedDataTypes = [1, 'two', true, { name: 'John' }, [6, 7, 8], null, undefined];

// var lengthOfArray = mixedDataTypes.length;

// console.log("Length of the array: " + lengthOfArray); 

// var itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// var numberOfCompanies= itCompanies.length;
// console.log(itCompanies);
// console.log("Number of companies in the array: " + numberOfCompanies);

// var firstCompany = itCompanies[0];

// var middleCompanyIndex = Math.floor(itCompanies.length / 2);
// var middleCompany = itCompanies[middleCompanyIndex];

// var lastCompany = itCompanies[itCompanies.length - 1];

// console.log("First Company: " + firstCompany);
// console.log("Middle Company: " + middleCompany);
// console.log("Last Company: " + lastCompany);

// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i]);
//   }

//   for (var i = 0; i < itCompanies.length; i++) {
//     var upperCaseCompany = itCompanies[i].toUpperCase();
//     console.log(upperCaseCompany);
//   } 

//   var sentence1 = itCompanies.join(", ") + " are big IT companies.";
//   console.log(sentence1);

//   var companyToFind = "Microsoft";
//   if (itCompanies.includes(companyToFind)) {
//     console.log(companyToFind + " exists in the array.");
//   } else {
//     console.log("Company is not found.");
//   }

//   var filteredCompanies = [];
//   for (var i = 0; i < itCompanies.length; i++) {
//       var count = 0;
//       for (var j = 0; j < itCompanies[i].length; j++) {
//           if (itCompanies[i][j] === 'o') {
//               count++;
//               if (count > 1) {
//                   break;
//               }
//           }
//       }
//       if (count <= 1) {
//           filteredCompanies.push(itCompanies[i]);
//       }
//   }
  
//   console.log(filteredCompanies);




