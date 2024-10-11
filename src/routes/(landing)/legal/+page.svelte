<script>
  import { onMount } from "svelte";
  let lastUpdated = "";

  onMount(() => {
    const currentDate = new Date();
    lastUpdated = currentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });
</script>

<section class="legal-page">
  <h1>Legal Disclaimer</h1>
  <p>Last Updated: {lastUpdated}</p>

  <p>
    Welcome to Artekk! This legal disclaimer outlines the terms and conditions
    regarding the use of Artekk's website and services. Please read this
    disclaimer carefully before accessing or using any part of our services.
  </p>

  <h2>1. No Legal Advice</h2>
  <p>
    The information provided on our website is for general informational
    purposes only. It is not intended to serve as legal advice and should not be
    construed as such. You should seek professional legal counsel for advice
    pertaining to any legal matters.
  </p>

  <h2>2. Intellectual Property</h2>
  <p>
    All content on the Artekk website, including logos, designs, graphics, and
    text, is protected by copyright and trademark laws. Unauthorized use,
    reproduction, or distribution of any part of this website without the
    express written consent of Artekk is prohibited.
  </p>

  <h2>3. Limitation of Liability</h2>
  <p>
    Artekk shall not be held liable for any damages, including but not limited
    to indirect, incidental, or consequential damages arising from the use of
    our services or reliance on the information provided on our website.
  </p>

  <h2>4. External Links</h2>
  <p>
    Our website may contain links to third-party websites. Artekk is not
    responsible for the content or practices of any linked websites, and the
    inclusion of such links does not imply endorsement by Artekk.
  </p>

  <h2>5. Jurisdiction</h2>
  <p>
    This legal disclaimer shall be governed by and construed in accordance with
    the laws of the jurisdiction in which Artekk operates, without regard to its
    conflict of law principles.
  </p>

  <h2>6. Changes to the Legal Disclaimer</h2>
  <p>
    We reserve the right to modify or update this legal disclaimer at any time.
    Changes will be posted on this page, and the "Last Updated" date will be
    revised accordingly.
  </p>

  <p>
    If you have any legal concerns or questions, please contact us at
    legal@cybtekk.com.
  </p>
</section>

<style>
  .legal-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    font-family: sans-serif;
  }

  h1,
  h2 {
    color: var(--primary-300);
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5;
    color: var(--primary-600);
  }

  ul {
    margin-left: 2rem;
  }
</style>
