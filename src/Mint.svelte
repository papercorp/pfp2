<script>
const web3 = new Web3(window.ethereum)
const c0 = new C0()
const PFP = "0x54e94F18Ddd14946d071EC5AF77183971549A819"
let urlLines;
let tokenIds = []
const build = async () => {
  await c0.init({ web3 })
  let scripts = []
  let inputs = []
  for(let tokenId of tokenIds) {
    let owner = await c0.token.methods(PFP).ownerOf(tokenId).call()
    let tokenURI = await c0.token.methods(PFP).tokenURI(tokenId).call()
    let cid = tokenURI.replace("ipfs://", "")
    let script = await c0.token.create({
      body: {
        cid: cid,
        receiver: owner,
        owns: [{
          who: "receiver",
          where: PFP,
          what: tokenId
        }]
      },
      domain: {
        "address": "0x6686f6ddddaedc3be716b4718d9da4f54546f4bf",
        "chainId": 1,
        "name": "PFP2"
      }
    })
    scripts.push(script)
  }
  console.log("scripts", scripts)
  let tx = await c0.token.send(scripts)
}
$: {
  if (urlLines) {
    tokenIds = urlLines.split("\n").map((l) => {
      let url = l.trim()
      console.log("url", url)
      let re = /https:\/\/looksrare.org\/collections\/([^/]+)\/([0-9]+)$/
      let e = re.exec(url)
      if (e && e.length > 0) {
        return e[2]
      } return null
    }).filter(x => x)
  }
}
</script>
<textarea bind:value={urlLines}></textarea>
{#each tokenIds as tokenId}
  <div>{tokenId}</div>
{/each}
<button on:click={build}>Mint</button>
