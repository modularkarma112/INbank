import bcrypt from 'bcryptjs';

const pwd = process.argv[2];
if (!pwd) {
  console.error('Uso: ts-node -P tsconfig.server.json server/util/hashPassword.ts <password>');
  process.exit(1);
}

bcrypt.hash(pwd, 10).then(h => {
  console.log('Hash:', h);
});
