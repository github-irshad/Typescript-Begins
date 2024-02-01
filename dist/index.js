"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date };
}
let result = getCustomer(0);
console.log(result === null || result === void 0 ? void 0 : result.birthday);
//# sourceMappingURL=index.js.map