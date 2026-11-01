# peptides-farm-mcp

Hosted MCP server and paid JSON API for the peptides.farm peptide reference. Connect: `https://peptides.farm/mcp` (Streamable HTTP).

Structured peptide reference data (snapshots, citations, trials, safety, regulatory, comparisons, cited search). Public-record compilation; not medical advice.

- OpenAPI: https://peptides.farm/openapi.json
- MCP (Streamable HTTP): https://peptides.farm/mcp
- x402 discovery: https://peptides.farm/.well-known/x402

## Endpoints

| Endpoint | Tier | x402 price | Credits |
|---|---|---|---|
| `GET /api/v1/peptides` — List and filter peptides (slim fields, cursor pagination). | Free | free | 0 |
| `GET /api/v1/body-systems` — Body systems with peptide counts. | Free | free | 0 |
| `GET /api/v1/peptides/{slug}` — Full peptide snapshot: identifiers, mechanism, indications, at-a-glance. | Standard | $0.02 | 1 |
| `GET /api/v1/peptides/{slug}/citations` — Source citations for a peptide. | Standard | $0.02 | 1 |
| `GET /api/v1/peptides/{slug}/trials` — Clinical/preclinical study rows and published regimen. | Standard | $0.02 | 1 |
| `GET /api/v1/peptides/{slug}/safety` — Safety, toxicology and pharmacokinetics notes. | Standard | $0.02 | 1 |
| `GET /api/v1/peptides/{slug}/regulatory` — Regulatory status, UNII, CAS. | Standard | $0.02 | 1 |
| `GET /api/v1/search` — Plain-English question → cited passages quoted from our monographs (extractive, no generation). | Premium | $0.05 | 3 |
| `GET /api/v1/compare` — Side-by-side snapshot of 2-5 peptides. | Premium | $0.05 | 3 |
| `GET /api/v1/bulk/export` — Entire corpus as one JSON document. Redistribution requires a Commercial license. | Bulk export | $10 | 500 |

## Payment

1. **x402**: call a paid endpoint, receive `402` with `accepts` (scheme `exact`, networks `base` and `solana`). Retry with `X-PAYMENT`. Verified and settled through the facilitator; receipt in `X-PAYMENT-RESPONSE`.
2. **API key**: `POST /api/v1/accounts` with optional `{email, name, wallet_evm, wallet_solana}` → `api_key`. Top up with `POST /api/v1/accounts/topup?pack=starter` (x402) or send USDC from the registered wallet and `POST /api/v1/accounts/topup {pack, network, tx}`. Balance: `GET /api/v1/accounts/me`.

Pay to Base USDC `0x5509bdb5bbbb5f8472e1030e49fe82f0b764fd90` or Solana USDC `8hv76Z3TQ4i9y9aQKw9nZSQXNcbqVm528fb8YsVE3pPN`.

## Credit packs

| Pack | USDC | Credits | License |
|---|---|---|---|
| Starter (`starter`) | $20 | 1,000 | personal |
| Pro (`pro`) | $200 | 100,000 | personal |
| Commercial (`commercial`) | $2000 | 2,000,000 | commercial |

## MCP

Tools mirror the endpoints. Unpaid calls to paid tools return `isError` with `_meta["x402/error"]`; retry with `_meta["x402/payment"]`, or send an `X-API-KEY` header when connecting.

## Examples

```
curl "https://peptides.farm/api/v1/peptides?q=sema&limit=5"
curl -i https://peptides.farm/api/v1/peptides/semaglutide/trials
curl -H "X-API-KEY: pf_live_..." "https://peptides.farm/api/v1/search?q=GLP-1 weight loss"
```
