import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto';

function derive(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    scrypt(password, salt, 64, { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 }, (error, key) => {
      if (error) reject(error);
      else resolve(key);
    });
  });
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  return salt.toString('hex') + ':' + (await derive(password, salt)).toString('hex');
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  if (!/^[a-f0-9]{32}:[a-f0-9]{128}$/.test(stored)) return false;
  const [salt, key] = stored.split(':');
  return timingSafeEqual(Buffer.from(key, 'hex'), await derive(password, Buffer.from(salt, 'hex')));
}
