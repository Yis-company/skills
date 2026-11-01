import { spawnSync } from "node:child_process";
import { cp, mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { resolve } from "node:path";
import { afterEach, expect, test } from "vitest";

const temporary: string[] = [];
afterEach(async () => {
  await Promise.all(
    temporary.splice(0).map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

async function fixture(checkout: boolean) {
  const directory = await mkdtemp(resolve(tmpdir(), "pre-push-install-"));
  temporary.push(directory);
  await mkdir(resolve(directory, "scripts"));
  await mkdir(resolve(directory, "bin"));
  await cp(resolve("scripts/install-hooks.sh"), resolve(directory, "scripts/install-hooks.sh"));
  await symlink("/usr/bin/dirname", resolve(directory, "bin/dirname"));
  if (checkout) await mkdir(resolve(directory, ".git"));
  return spawnSync("/bin/sh", [resolve(directory, "scripts/install-hooks.sh")], {
    cwd: directory,
    env: { PATH: resolve(directory, "bin") },
    encoding: "utf8",
  });
}

test("allows installation outside a Git checkout without Git", async () => {
  const result = await fixture(false);
  expect(result.status).toBe(0);
  expect(result.stdout).toContain("pre-push hook was not installed");
});

test("fails when a Git checkout cannot install its hook without Git", async () => {
  const result = await fixture(true);
  expect(result.status).not.toBe(0);
  expect(result.stderr).toContain("Git is required");
});
