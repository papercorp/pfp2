<script>
const PFP = "0x54e94F18Ddd14946d071EC5AF77183971549A819"
let url
let contract;
let id;
let tweet;
const build = () => {
  let re = /https:\/\/looksrare.org\/collections\/([^/]+)\/([0-9]+)$/
  let isvalid = re.test(url)
  if (isvalid) {
    tweet = `Claiming my PFP2 NFT hexagon avatar. I confirm that I am the copyright owner for this profile picture NFT and is not a copy of another NFT ${url} @skogard`
  } else {
    alert("please enter a valid looksrare URL. it must look something like: https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819/1643010425948")
  }
}
$: {
  let re = /https:\/\/looksrare.org\/collections\/${PFP}\/([0-9]+)$/i
  let result = re.exec(url)
  if (result && result.length > 0) {
    contract = result[1]
    id = result[2]
  }
}
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));</script>
<main>
  <h1>PFP2 Airdrop Claim</h1>
  <div>
    <div><strong>What is the problem being solved?</strong> Opensea has delisted the original <a href="https://pfp.factoria.app">PFP collection</a> for copyright violation. It looks like one of the minters minted an image of an already existing NFT. Instead of just delisting that specific NFT, Opensea has delisted the entire collection wholesale. I have reached out to them to appeal but never received a response. Because Twitter Blue uses Opensea's proprietary API instead of using the blockchain, this means the PFP NFT holders won't be able to use the hexagon avatar anymore.</div>
    <br>
    <div><strong>How to claim</strong>Go to your <a href="https://looksrare.org/accounts/me#owned">Looksrare profile</a> to find the PFP NFT, or find from the PFP collection here: <a href="https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819">PFP on Looksrare</a>. Then enter the URL below to generate a tweet, and Tweet it to confirm and verify that you own the copyright. Then I will mint them for you. It is probably not going to be immediate since it's a manual process, but I will reply to your tweet when it's minted.</div>
    <br>
    <div><strong>Questions</strong>Feel free to reach out to me at <a href='https://twitter.com/skogard'>@skogard</a> on Twitter if you have any questions.</div>
  <hr>
  <div class='container'>
    {#if tweet}
      <textarea readonly bind:value={tweet}></textarea>
      <a class="twitter-share-button"
        href="https://twitter.com/intent/tweet?text={encodeURIComponent(tweet)}" data-size="large">Tweet to Claim</a>
    {:else}
      <form on:submit|preventDefault|stopPropagation={build}>
        <input type='text' placeholder="enter your NFT looksrare URL" bind:value={url}>
        <input type='submit' value='claim'>
        <!--
        {#if url}
        <div>
          <div>{url}</div>
          <div>{contract}</div>
          <div>{id}</div>
        </div>
        {/if}
        -->
      </form>
    {/if}
  </div>
  <hr>
  <ul>
    <li><strong>Are the NFTs gone?</strong> NO. It is impossible for an NFT to disappear once they are on the blockchain. The collection is on the blockchain and exists everywhere else, including <a href="https://looksrare.org/collections/0x54e94F18Ddd14946d071EC5AF77183971549A819">Looksrare</a>, <a href="https://rarible.com/collection/0x54e94f18ddd14946d071ec5af77183971549a819/items">Rarible</a>, and <a href="https://etherscan.io/token/0x54e94F18Ddd14946d071EC5AF77183971549A819">Etherscan</a>. It is ONLY delisted on Opensea.</li>
    <li><strong>So what is this PFP2 airdrop?</strong> Even though you still own the PFP NFTs on the blockchain, I still feel bad that you will all be very disappointed, since you can't use them for what you minted them for. So I have come up with a solution. Basically, I have created an entirely new collection, and going to mint the same NFTs WITH MY OWN MONEY for you. Then you will be able to use those NFTs on the new PFP2 collection as your profile with no problem at zero additional cost.</li>
    <li><strong>How are you going to deal with the copyright issue?</strong> Because we learned a lesson here that Opensea delists the entire collection even if only one of the items violates copyright, we have to be very careful here. Just one user submitting another copyrighted image could delist everyone else's NFT all over again. So this time I am going to ask that everyone confirm that they actually have the copyright to the profile images and that they are not a copy of existing NFTs.</li>
    <li><strong>How will you exactly do this?</strong> First, I am going to ask that everyone who wants to claim the PFP2 NFT tweet with their own account confirming they own the copyright. Then, I am going to mint an identical NFT to the current holder of the NFT.</li>
    <li><strong>Will you mint it as soon as I tweet?</strong> No. As you can see, this is a pretty manual process, and I won't be able to do it immediately and probably need to do it when I can get to it. But I can promise you that as long as you tweet to verify, you will get your PFP2 NFT, and I will reply to your tweet when they are minted.</li>
    <li><strong>Will people be able to mint more PFPs?</strong>No. The PFP project was a simple side project meant to provide value to people but this whole delisting thing has taken a toll on me, and since I am working on other high priority projects such as <a href="https://factoria.app">factoria</a> and <a href="https://cell.computer">cell</a>, I do not have time to waste dealing with Opensea. I will only use the PFP2 collection to mint for the existing PFP holders, and since minting for you guys will cost gas, I will be actually losing money overall. Still I think this is the right thing to do, and will end the experiment here.</li>
</main>
<style>
main {
  max-width: 500px;
  margin: 100px auto;
}
strong {
  display: block;
  font-size: 18px;
}
a.twitter-share-button {
  background: cornflowerblue;
  color: white;
  padding: 10px;
  display: block;
  margin: 10px 0;
  text-align: center;
  font-size: 20px;
  text-decoration: none;
}
a {
  color: white;
  font-weight: bold;
}
textarea {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  height: 150px;
}
ul {
  font-size: 14px;
  padding-inline-start: 15px;
}
li {
  margin: 10px 0;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  margin-bottom: 10px;
}
input[type=submit] {
  background: purple;
  color: white;
  font-size: 40px;
  font-weight: bold;
}
h1 {
  font-family: 'Mochiy Pop P One', sans-serif;
}
hr {
  background: rgba(255,255,255,0.2);
  height: 2px;
  border: none;
  margin: 20px 0px;
}
</style>
