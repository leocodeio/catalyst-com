import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import uuid from "uuid4";
// Initialize Prisma Client
const prisma = new PrismaClient();

// Configuration for password hashing
const SALT_LENGTH = 16;
const HASH_ALGORITHM = "sha256";
const ITERATIONS = 10000;
const KEY_LENGTH = 64;

// Helper function to hash a password using crypto.pbkdf2
async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Generate a random salt
    const salt = crypto.randomBytes(SALT_LENGTH).toString("hex");

    // Hash the password using pbkdf2
    crypto.pbkdf2(
      password,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      HASH_ALGORITHM,
      (err, derivedKey) => {
        if (err) {
          return reject(err);
        }

        // Return the salt and hashed password as a combined string
        resolve(`${salt}:${derivedKey.toString("hex")}`);
      },
    );
  });
}

// Helper function to verify a password
async function verifyPassword(
  storedHash: string,
  password: string,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    // Split the stored value to get the salt and the hashed password
    const [salt, key] = storedHash.split(":");

    // Re-hash the input password with the original salt
    crypto.pbkdf2(
      password,
      salt,
      ITERATIONS,
      KEY_LENGTH,
      HASH_ALGORITHM,
      (err, derivedKey) => {
        if (err) {
          return reject(err);
        }

        // Compare the derived key with the stored key
        resolve(derivedKey.toString("hex") === key);
      },
    );
  });
}

// Function to create a new user (register)
export async function registerUser({
  name,
  email,
  phone,
  password,
  reenterPassword,
}: {
  name: string;
  email: string;
  phone: string;
  password: string;
  reenterPassword: string;
}) {
  // Hash the password using crypto
  const hashedPassword = await hashPassword(password);

  if (password !== reenterPassword) {
    throw new Error("Passwords do not match");
  }
  const catalystId = uuid();
  // console.log({
  //   catalystId,
  //   name,
  //   email,
  //   phone,
  //   password: hashedPassword,
  // });
  // Create a new user in the database
  const user = await prisma.user.create({
    data: {
      catalystId,
      name,
      email,
      phone,
      password: hashedPassword,
    },
  });
  return { status: true };
}

// Function to find a user by email
export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
}

// Function to login a user (password comparison)
export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  // Find the user by email
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  // Verify the password using the stored hash
  const isPasswordValid = await verifyPassword(user.password, password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return { user: user, status: true };
}

// Optional: Function to fetch user by ID (for session management)
export async function getUserById(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  return user;
}
