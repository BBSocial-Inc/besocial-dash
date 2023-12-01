import fs from "fs";
import path from "path";
import { faker } from "@faker-js/faker";

import { authType, deviceType } from "./data";

const tasks = Array.from({ length: 100 }, () => ({
  id: "fdfdfgdvdfv",
  name: faker.person.fullName(),
  email: faker.internet.email(),
  username: faker.internet.userName(),
  auth_type: faker.helpers.arrayElement(authType).value,
  device: faker.helpers.arrayElement(deviceType).value,
  country: faker.address.country(),
  date: faker.date,
}));

fs.writeFileSync(
  path.join(__dirname, "tasks.json"),
  JSON.stringify(tasks, null, 2)
);

console.log("✅ Tasks data generated.");
