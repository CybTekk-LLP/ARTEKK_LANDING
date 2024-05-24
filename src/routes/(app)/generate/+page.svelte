<script lang="ts">
  import { Typography, Button, InputText } from "$lib/ui";
  import { CodeSnippet, CopyPaste } from "$lib/project";

  let apiKey = "";
  let url = "";
  let code = [
    `&lt;!-- Insert in HEAD --&gt;
    &lt;script 
    src="//cdn.8thwall.com/web/aframe/8frame-1.4.1.min.js"
    &gt;&lt;/script&gt;
    &lt;script
      src="//apps.8thwall.com/xrweb?appKey=YOUR_APP_KEY_HERE"
      async
    &gt;&lt;/script&gt;
    &lt;script src="../js/8thWall/insertAR.js"&gt;&lt;/script&gt;
    &lt;!-- Insert in HEAD --&gt;`,
    `&lt;div id="target"&gt;&lt;/div&gt;`,
    `&lt;script&gt;
      // AR class instance instantiated with the new operator
      // supplying with modelURL and target div while calling
      const target = document.getElementById("target");
      const url = "./PATH_TO_YOUR_MODEL.glb";
      // additional model styling options can be provided as well 
      // (optional)
      const modelConfigs = {
        position: "0 0 0",
        rotation: "0 0 0",
        scale: "1 1 1",
      };
      const ar = new AR(url, target, modelConfigs);
      ar.init();
    &lt;/script&gt;`,
  ];

  const changeSnippets = () => {
    if (apiKey) {
      code[0].replace("YOUR_APP_KEY_HERE", apiKey);
    }
    if (url) {
      code[2].replace("./PATH_TO_YOUR_MODEL.glb", url);
    }
  };
</script>

<main>
  <h1 class="page-title">
    <Typography type="cardTitle">Generate Your Snippet</Typography>
  </h1>
  <br /><br />
  <InputText
    variant="text"
    labelNeeded={true}
    label="Api Key"
    bind:value={apiKey}
    placeholder="XXXX-XXXX-XXXX"
  />
  <br />
  <br />
  <InputText
    variant="text"
    labelNeeded={true}
    label="Uploaded Model Link"
    bind:value={url}
    placeholder="https://cdn.lorem_ipsum1.glb"
  />
  <br />
  <br />
  <br />
  <Button
    type="primary"
    buttonLabel="GENERATE CODE"
    onClick={() => changeSnippets()}
  />
  <br />
  <br />
  <p>
    <Typography type="impact"
      >{"Paste The Following Code In The <head> Section Of Your HTML"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet
      code={code[0].replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
      language="html"
    />
    <span class="copy">
      <CopyPaste text={code[0].replace(/&lt;/g, "<").replace(/&gt;/g, ">")} />
    </span>
  </div>
  <p>
    <Typography type="impact"
      >{"Now create a <div> with an id of “target”"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet
      code={code[1].replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
      language="html"
    />
    <span class="copy">
      <CopyPaste text={code[1].replace(/&lt;/g, "<").replace(/&gt;/g, ">")} />
    </span>
  </div>
  <p>
    <Typography type="impact"
      >{"Finally, Paste this code at the end of body or After the Dom is loaded"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet
      code={code[2].replace(/&lt;/g, "<").replace(/&gt;/g, ">")}
      language="html"
    />
    <span class="copy">
      <CopyPaste text={code[2].replace(/&lt;/g, "<").replace(/&gt;/g, ">")} />
    </span>
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 550px;
    inline-size: 90vw;
    margin-inline: auto;
    padding-block-start: 100px;
    & > .page-title {
      text-align: center;
    }
    & > p {
      margin-block-start: 20px;
    }
    & > .snippet {
      position: relative;
      & > .copy {
        position: absolute;
        inset-inline-end: 15px;
        inset-block-start: 30px;
      }
    }
  }
</style>
