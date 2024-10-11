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

<section class="terms-of-use">
  <h1>Terms of Use</h1>
  <p>Last Updated: {lastUpdated}</p>

  <p>
    Welcome to Artekk! By accessing or using our website and services, you agree
    to be bound by these Terms of Use ("Terms"). Please read these Terms
    carefully before using our services. If you do not agree with any part of
    these Terms, you must discontinue using our services.
  </p>

  <h2>1. Acceptance of Terms</h2>
  <p>
    By accessing and using Artekk's services, you agree to comply with these
    Terms. These Terms apply to all users, including visitors, registered users,
    and others who access or use our services.
  </p>

  <h2>2. Use of Services</h2>
  <p>
    Artekk provides augmented reality services and other digital solutions. You
    agree to use our services only for lawful purposes and in compliance with
    all applicable laws and regulations. You must not use our services to engage
    in any illegal or harmful activities.
  </p>

  <h2>3. User Accounts</h2>
  <p>
    When you create an account with Artekk, you must provide accurate and
    complete information. You are responsible for safeguarding your account
    credentials and for any activities that occur under your account.
  </p>

  <h2>4. Intellectual Property</h2>
  <p>
    All content provided by Artekk, including text, images, and software, is the
    property of Artekk and is protected by intellectual property laws. You agree
    not to reproduce, distribute, or create derivative works based on any of our
    content without our explicit permission.
  </p>

  <h2>5. Termination</h2>
  <p>
    We reserve the right to terminate or suspend your access to our services at
    any time, without notice, for any reason, including if you violate these
    Terms.
  </p>

  <h2>6. Limitation of Liability</h2>
  <p>
    Artekk shall not be held liable for any damages or losses resulting from
    your use of our services. Our services are provided "as is" without any
    warranties, express or implied.
  </p>

  <h2>7. Governing Law</h2>
  <p>
    These Terms shall be governed and construed in accordance with the laws of
    the jurisdiction in which Artekk operates, without regard to its conflict of
    law provisions.
  </p>

  <h2>8. Changes to Terms</h2>
  <p>
    We reserve the right to update or modify these Terms at any time. If we make
    changes, we will post the updated Terms on this page, and the "Last Updated"
    date will be revised.
  </p>

  <p>If you have any questions about these Terms, feel free to contact us.</p>
</section>

<style>
  .terms-of-use {
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

  ul {
    margin-left: 2rem;
  }
</style>
