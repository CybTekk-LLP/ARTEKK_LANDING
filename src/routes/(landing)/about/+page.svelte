<script lang="ts">
  import { AboutCard } from "$lib/project";
  import Typography from "$lib/ui/Typography/Typography.svelte";

  let aboutContent = [
    {
      heading: "Who We Are",
      description:
        "<p>With the digital boom and the comfort of getting everything done at the ease of the home, the Try-Ons are the evolutionary form of shopping experiences that merge the physical and the digital worlds. It mainly adds convenience and also clarity to the shopping thereby resulting in better decision-making on the customer's part and maximum sales on the brand's part. Interestingly, AR-driven Virtual Try-On Experiences are not just limited to the wearables but also the product categories like home decor, furniture, etc. Considering all this as the main key point, this is where ARTEKK came into action!</p><br><br><p>ARTEKK was founded by a dedicated team of technologists, creatives, and visionaries who bring together a rich blend of skills to develop state-of-the-art VR solutions. Our team’s expertise spans across various fields, including gaming, software development, and design, ensuring a well-rounded approach to innovation. United by a shared passion for pushing technological boundaries, we are committed to delivering excellence in every project. At ARTEKK, we strive to redefine the possibilities within the virtual reality landscape, continuously exploring new frontiers and enhancing user experiences.</p>",
    },
    {
      heading: "What We Do",
      description:
        "At ARTEKK, we specialise in developing a wide range of VR experiences, from captivating games and realistic simulations to interactive educational content. Whether you're a gamer seeking unparalleled immersion, a business looking for innovative training solutions, or an educator aiming to engage students in new and exciting ways, we have the expertise to bring your vision to life. Our team is dedicated to pushing the boundaries of virtual reality to create experiences that are both impactful and memorable.",
    },
    {
      heading: "Why Choose Us",
      description:
        "<p>When you choose ARTEKK, you are partnering with a team committed to excellence, innovation, and customer satisfaction. Our proven track record in delivering high-quality VR experiences speaks to our unparalleled technical expertise and creative vision. We are passionate about pushing the boundaries of what's possible in virtual reality, ensuring that every project we undertake meets the highest standards. From initial concept to final execution, we work closely with you to unlock the full potential of VR, creating immersive and impactful experiences that exceed expectations. With ARTEKK, you can be confident in achieving your VR goals with a partner dedicated to your success.</p><br><br><p>Surely, with ARTEKK you will gain many returns for your businesses. You will experience a reduction in the number of the products which are returned. We will help your business attain a competitive edge. It will help in the boosting of the Sales. Also with the maximum increase in AR accessibility through mobile phones, many users are going to experience a new form of engagement and witness instant, realistic as well as personalised product representation. </p>",
    },
  ];
</script>

<main>
  <h1 class="heading">
    <Typography type="caption"
      >“ARTEKK, a CybTEKK product, delivers innovative AR and virtual try-on
      solutions.”</Typography
    >
  </h1>
  <br />
  <div class="about-cards">
    {#each aboutContent as content}
      <AboutCard heading={content.heading} description={content.description} />
      <br />
      <br /><br />
    {/each}
  </div>
  <section class="team-section">
    <Typography type="heading">Our Team</Typography>
    <br />
    <div class="team">
      <article class="team-card">
        <!-- <img height="400px" src="./images/About/Lovely.png" alt="" /> -->
        <br />
        <br />
        <Typography type="cardTitle">Yash Raj Bharti</Typography>
        <br />
        <Typography type="body"
          >Yash is a creative designer and developer at Artekk, specializing in
          augmented reality experiences. With extensive experience in Blender,
          he excels at crafting intricate 3D models that bring ideas to life.
          Yash is also skilled in UI/UX design, utilizing Figma to create
          intuitive interfaces that enhance user engagement. His proficiency in
          JavaScript allows him to seamlessly integrate design with
          functionality on our AR platform, making him a vital asset to our
          team.</Typography
        >
      </article>
      <br />
      <article class="team-card">
        <!-- <img height="400px" src="./images/About/Lovely.png" alt="" /> -->
        <br />
        <br />
        <Typography type="cardTitle">Lovely Sehotra</Typography>
        <br />
        <Typography type="body"
          >Lovely is a talented fullstack developer with a diverse skill set
          that spans testing, DevOps, and research. His expertise in both
          frontend and backend development allows him to create robust
          applications that are efficient and user-friendly. With a passion for
          problem-solving, Lovely conducts thorough research to implement
          innovative solutions that enhance performance and scalability. His
          collaborative approach and dedication to quality ensure that every
          project meets the highest standards.</Typography
        >
      </article>
      <br />
      <article class="team-card">
        <!-- <img height="400px" src="./images/About/Lovely.png" alt="" /> -->
        <br />
        <br />
        <Typography type="cardTitle">Gourav Saini</Typography>
        <br />
        <Typography type="body"
          >Gourav is a skilled frontend developer at Artekk, dedicated to
          building intuitive user interfaces and enhancing our augmented reality
          platform. He specializes in creating platform-independent code,
          ensuring that our solutions seamlessly integrate across various
          frameworks, including React, Vue, Angular, and Svelte. Gourav also has
          expertise in CMS engines like WordPress, Shopify, Webflow, and Wix,
          allowing him to develop versatile applications that meet diverse
          client needs. His commitment to delivering high-quality code and
          user-centric designs makes him an invaluable part of our team.
        </Typography>
      </article>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 80vh;
    inline-size: 100vw;
    margin-inline: auto;
    padding-inline: 4rem;
    & > .heading {
      max-inline-size: 960px;
      margin-inline: auto;
      text-align: center;
    }
    & > .team-section {
      & > .team {
        & > .team-card {
          inline-size: 100%;
          & > img {
            inline-size: 100%;
            object-fit: cover;
            image-rendering: optimizeSpeed;
          }
        }
      }
    }
  }
</style>
