# peptides-farm-mcp — Biomedical, FDA, CMS & Analytical Chemistry MCP Server

Remote & local `stdio` Model Context Protocol (MCP) server for **[peptides.farm](https://peptides.farm)**, operated by **Datil Technologies, Inc.** (66 West Flagler Street, Miami, FL 33132).

## Instant Remote Connection (Zero Install)
```json
{
  "mcpServers": {
    "peptides-farm": {
      "url": "https://peptides.farm/api/mcp"
    }
  }
}
```

## Local Stdio Bridge (via npx)
```json
{
  "mcpServers": {
    "peptides-farm": {
      "command": "npx",
      "args": ["-y", "peptides-farm-mcp"]
    }
  }
}
```

## 8 Exposed MCP Tools
1. `list_biomedical_datasets` — Lists all 15 entity-resolved datasets (`2,025` bulk rows).
2. `get_point_in_time_regulatory_shocks` — 90-day FDA/CMS state transitions (`beforeValue -> afterValue`).
3. `query_dataset_preview` — Query the 10-row public preview of any dataset for free.
4. `search_fda_patents_suppliers_reimbursement` — Search 180 programmatic FDA/CMS dossiers.
5. `run_specialized_regulatory_audit` — Run any of the 10 stateless technical verification utilities (free demo mode or `$1–$149 USDC` custom execution).
6. `get_x402_payment_instructions` — Retrieve Base Mainnet (`eip155:8453`) and Solana Mainnet USDC settlement details.
7. `unlock_full_dataset_with_tx` — Verify an on-chain Base or Solana USDC transaction signature via Mainnet RPC to unlock full 135-row datasets.
8. `request_missing_dataset_or_entity` — Submit unmet molecule/dataset queries to the live demand roadmap (`https://peptides.farm/api/demand`).
