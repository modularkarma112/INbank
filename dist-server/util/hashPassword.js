"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcryptjs_1 = tslib_1.__importDefault(require("bcryptjs"));
const pwd = process.argv[2];
if (!pwd) {
    console.error('Uso: ts-node -P tsconfig.server.json server/util/hashPassword.ts <password>');
    process.exit(1);
}
bcryptjs_1.default.hash(pwd, 10).then(h => {
    console.log('Hash:', h);
});
//# sourceMappingURL=hashPassword.js.map