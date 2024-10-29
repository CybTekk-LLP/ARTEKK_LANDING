<script lang="ts">
  import type { IFooterContent, IFooterI18n } from "$lib/types/Footer.types";
  import { Typography } from "..";

  export let i18n: IFooterI18n;
  export let content: IFooterContent;
</script>

<footer>
  <div class="footer-links">
    {#each content.navigationOptions as option}
      <div class="links">
        <Typography type="impact">{option.name}</Typography>
        <br />
        <ul>
          {#each option.subOptions as subOption}
            <li>
              <a
                href={subOption.url}
                target={subOption.blank}
                aria-label={subOption.name}
              >
                {#if option.icons}
                  <img src={subOption.iconSrc} alt="social" />
                {:else}
                  <Typography type="subtext" _fontweight="400"
                    >{subOption.name}</Typography
                  >
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
  <br />

  <p class="product-line">
    <Typography type="body">ARTEKK</Typography>
    <Typography type="body">{i18n.productLabel}</Typography><a
      href="https://cybtekk.com/"
      target="_blank"
      class="cybtekk"
      ><img height="19px" src="/images/Footer/CybTEKK.svg" alt="cybtekk" /></a
    >
  </p>

  <br />
  <div class="copyright">
    <Typography type="subtext" _fontweight="300"
      >{i18n.copyrightLabel}</Typography
    >
  </div>
</footer>

<style lang="scss">
  footer {
    inline-size: 90%;
    margin-inline: auto;
    padding-inline: 20px;
    padding-block: 50px;
    margin-block-start: 50px;
    border-block-start: 1px solid var(--hover);
    & > .footer-links {
      max-width: 1280px;
      margin-inline: auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
      @media screen and (width <= 540px) {
        display: block;
      }
      & > .links {
        @media screen and (width <= 540px) {
          margin-block-end: 30px;
        }
        &:first-of-type {
          & img {
            inline-size: 20px;
          }
        }
        &:last-of-type {
          & img {
            inline-size: 80px;
          }
        }
        & > ul {
          list-style: none;
          & > li {
            margin-block-end: 10px;
            line-height: 1.3;
            & > a {
              text-decoration: none;
              -webkit-transition: color 0.3s ease;
              -moz-transition: color 0.3s ease;
              -o-transition: color 0.3s ease;
              transition: color 0.3s ease;
              &[aria-label="LinkedIn"]:hover :global(.typography) {
                color: #0077b5 !important;
              }
              &[aria-label="Facebook"]:hover :global(.typography) {
                color: #1877f2 !important;
              }
              &[aria-label="Instagram"]:hover :global(.typography) {
                color: #cd486b !important;
              }
              &[aria-label="X"]:hover :global(.typography) {
                color: #000000 !important;
              }
            }
          }
        }
      }
    }

    & > .product-line {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      white-space: nowrap;
      & > .cybtekk {
        translate: 0 4px;
      }
    }
    & > .copyright {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      @media screen and (width <= 768px) {
        flex-direction: column;
        align-items: center;
        gap: 0;
      }
      & > ul {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
        flex-wrap: wrap;
        @media screen and (width <= 768px) {
          margin-block-start: 20px;
          justify-content: center;
        }
        & > li {
          padding-inline-end: 20px;
          border-inline-end: 1px solid var(--primary-dark);
          &:last-of-type {
            border: 0;
          }
          & > a {
            text-decoration: none;
          }
        }
      }
    }
  }
</style>
