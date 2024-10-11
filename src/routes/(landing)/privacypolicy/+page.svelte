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

<section class="privacy-policy">
  <h1>Privacy Policy</h1>
  <p>Last Updated: {lastUpdated}</p>

  <p>
    Artekk ("we", "our", or "us") is committed to protecting your privacy. This
    Privacy Policy explains how we collect, use, and disclose information when
    you use our services, including our website and augmented reality solutions.
  </p>

  <h2>Information We Collect</h2>
  <p>
    We may collect personal information, such as your name, email address, and
    other details you provide when using our services. Additionally, we may
    collect non-personal information related to how you interact with our
    website and services.
  </p>

  <h2>How We Use Your Information</h2>
  <p>
    We use the information we collect to improve our services, provide customer
    support, and communicate updates. We may also use aggregated, anonymized
    data to analyze trends and enhance user experience.
  </p>

  <h2>Third-Party Services</h2>
  <p>
    We may use third-party services, such as analytics tools, to assist us in
    improving our services. These services may have access to your information
    under their own privacy policies.
  </p>

  <h2>Your Rights</h2>
  <p>
    You have the right to access, modify, or delete your personal information at
    any time. If you have any questions about our Privacy Policy or would like
    to exercise your rights, please contact us at support@artekk.com.
  </p>

  <h2>Changes to This Policy</h2>
  <p>
    We may update this Privacy Policy from time to time. Any changes will be
    posted on this page, and we encourage you to review the policy periodically.
  </p>

  <p>If you have any questions, feel free to contact us.</p>
</section>

<style>
  .privacy-policy {
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
    color: #d6d6d6;
  }
</style>
