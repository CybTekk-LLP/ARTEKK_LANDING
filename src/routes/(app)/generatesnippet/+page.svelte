<script lang="ts">
    import {Typography, InputText, Button} from "$lib/ui"
    import {CodeSnippet, CopyPaste} from "$lib/project"
    let apiKey: string;

</script>

<main>
    <h1 class="page-title">
        <Typography type="cardTitle">Generate Your Snippet</Typography>
    </h1>
    <br><br>
    <InputText variant="text" labelNeeded={true} label="Api Key" bind:value={apiKey} placeholder="XXXX-XXXX-XXXX"/>
    <br>
    <br>
    <InputText variant="text" labelNeeded={true} label="Uploaded Model Link" bind:value={apiKey} placeholder="//Cdn.Lorem_ipsum1.Glb"/>
    <br>
    <br>
    <Button type="primary" buttonLabel="GENERATE CODE" onClick={() => alert("asf")}/>
        <p>
            <Typography type="impact">{"Paste The Following Code In The <Head> Section Of Your HTML"}</Typography>
        </p>
   <div class="snippet">
    <CodeSnippet code="<!DOCTYPE html>
        <html>
        <body>
        
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        
        </body>
        </html>" language="HTML"/>
    <span class="copy">
        <CopyPaste text="<!DOCTYPE html>
            <html>
            <body>
            
            <h1>My First Heading</h1>
            <p>My first paragraph.</p>
            
            </body>
            </html>"/>
    </span>
   </div>
        <p>
            <Typography type="impact">{"Paste The Following Code In The <Head> Section Of Your HTML"}</Typography>
        </p>
        <div class="snippet">
            <CodeSnippet code="<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>" language="HTML"/>
            <span class="copy">
                <CopyPaste text="<!DOCTYPE html>
                    <html>
                    <body>
                    
                    <h1>My First Heading</h1>
                    <p>My first paragraph.</p>
                    
                    </body>
                    </html>"/>
            </span>
           </div>

        <p>
            <Typography type="impact">{"Paste The Following Code In The <Head> Section Of Your HTML"}</Typography>
        </p>
        <div class="snippet">
            <CodeSnippet code="<!DOCTYPE html>
                <html>
                <body>
                
                <h1>My First Heading</h1>
                <p>My first paragraph.</p>
                
                </body>
                </html>" language="HTML"/>
            <span class="copy">
                <CopyPaste text="<!DOCTYPE html>
                    <html>
                    <body>
                    
                    <h1>My First Heading</h1>
                    <p>My first paragraph.</p>
                    
                    </body>
                    </html>"/>
            </span>
           </div>
</main>

<style lang="scss">
    main{
        max-inline-size: 550px;
        inline-size: 90vw;
        margin-inline: auto;
        padding-block-start: 100px;
        &>.page-title{
            text-align: center;
        }
        &>p{
            margin-block-start: 20px;
        }
        &>.snippet{
            position: relative;
            &>.copy{
                position: absolute;
                inset-inline-end: 15px;
                inset-block-start: 30px;
            }
        }
    }
</style>