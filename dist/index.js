"use strict";
function CalculateIncome(income, taxyear = 2022) {
    if (taxyear > 2022) {
        return income * 1.2;
    }
    return 1.3 * income;
}
CalculateIncome(50000, 2023);
//# sourceMappingURL=index.js.map