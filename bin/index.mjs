#!/usr/bin/env node
/**
 * peptides-farm-mcp — Zero-dependency stdio-to-Streamable-HTTP MCP Bridge
 * Operated by Datil Technologies, Inc., 66 West Flagler Street, Miami, FL 33132
 * Remote endpoint: https://peptides.farm/api/mcp
 */
import readline from "node:readline";

const ENDPOINT = process.env.PEPTIDES_FARM_MCP_URL || "https://peptides.farm/api/mcp";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;
  let req;
  try {
    req = JSON.parse(trimmed);
  } catch {
    return;
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(req),
    });
    const text = await res.text();
    if (text) {
      process.stdout.write(text.trim() + "\n");
    }
  } catch (err) {
    if (req && req.id !== undefined) {
      process.stdout.write(JSON.stringify({
        jsonrpc: "2.0",
        id: req.id,
        error: { code: -32603, message: String(err?.message || err) }
      }) + "\n");
    }
  }
});
