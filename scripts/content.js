const design_request = document.getElementByClassName("pageDescription").textContent;
const opportunity = document.getElementById("CF00N0d000002cArw_ileinner").textContent;

// navigator.clipboard.writeText(`${design_request}`);
// navigator.clipboard.writeText(`${opportunity}`);

setTimeout(() => {navigator.clipboard.writeText(`${design_request}`);}, 2000);
setTimeout(() => {navigator.clipboard.writeText(`${opportunity}`);}, 1000);

// async () => {
//     await navigator.clipboard.writeText(`${design_request}`);
//     await navigator.clipboard.writeText(`${opportunity}`);
// }

// const designer = "Mark Joseph Cabrera";

// document.querySelector("#aDE6Q000008OuSL_RelatedEntityHistoryList_body > table > tbody > tr.dataRow.even.first > td:nth-child(2) > a")
