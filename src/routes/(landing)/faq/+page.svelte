<script lang="ts">
  import { FAQ } from "$lib/project";
  let content = [
    {
      title: "Getting Started with ARTEKK: A Beginner's Guide",
      description:
        "Start your ARTEKK journey as a beginner with this comprehensive documentation. Learn the fundamentals of navigating our platform, from setting up your account to exploring basic functionalities. Gain insights into creating and viewing AR models using our intuitive Builder Section, tailored for ease of use. Follow step-by-step instructions to integrate AutoCAD models converted to glTF seamlessly and utilise our customised solutions for scaling products. Dive into key features such as face tracking for caps, real-space interaction, and QR code scanning for AR videos to enhance customer engagement. With this guide, beginners can gain the ARTEKK experience with confidence and proficiency.",
    },
    {
      title: "Generating Code: ARTEKK as a Beginner",
      description:
        "In order to start with ARTEKK, visit our <u><a style='color: #fff' href='/generate'>Builder's Option page</a></u> for a step-by-step setup guide and detailed information on tools and resources. If you'd prefer not to handle any code, our Custom Option offers a personalised solution tailored to your specific needs. Explore the Builder's Option or choose the Custom Option for a hassle-free experience.",
    },
    {
      title: "Contacting Sales for Custom plans",
      description:
        "You can contact our Sales team through the following methods: Email: sales@artekk.com, Contact Form: Fill out the form on our <u><a style='color: #fff' href='/contact'>Contact page</a></u>. Our Sales team is available Monday to Friday, 10:00 AM to 6:00 PM EST.",
    },
    {
      title: "Price Plans to Choose from",
      description:
        "<h3>Our price plans are designed to be flexible and cater to different needs:</h3><br><ul style=list-style:none><li>Builder Plan: Available to place models on the go. Limited customization. A no-code solution to serve your basic needs.</li><br><li>Custom Plan: Connect with sales to discuss your exact requirements, and we will develop an AR solution for your new or existing projects, curated to meet your needs.</li><br><li>A-la-carte: Add any of the verticals you want with this plan, and we will provide you with the developed solution. A plan made to serve specific needs.</li><br><li>For a detailed breakdown of each plan, please visit our <u><a style='color: #fff' href='/pricing'>Pricing Plans page</a></u>.</li></ul>",
    },
    {
      title: "Carrying out configuration of projects",
      description:
        "<ul style=list-style:none><li>Login to your account and set up your builder module by navigating to the Projects tab in the top menu.</li><br><li>Start by creating a new project and adding a name for your project and the authorised domain. When you first create a project, its status will be inactive. This is to ensure your domains can be authorised. We will verify this on our end, and once your project is approved, it will show a status of active. You can then start uploading your 3D models and receive the CDN links for the JavaScript libraries and models to use.</li><br><li>Visit our  <u><a style='color: #fff' href='/generate'>Code Generator page</a></u> to learn how to configure your project. If you prefer not to deal with any code, you can always upgrade to the Custom Plan, where we will develop the solution models for you. You will only be charged the <span style='color:#fff'>difference</span>.</li></ul>",
    },
    {
      title: "Switch from one Pricing Plan to a Custom Plan",
      description:
        "<p>Yes, you can switch from any Pricing Plan to the Custom Plan. This will make your work hassle-free, offering greater customizations and solutions tailored to meet your exact needs. Whether for new or existing projects, our service ensures everything is precisely aligned with your requirements. Enjoy seamless integration and enhanced functionality with our expert support.</p>",
    },
    {
      title: "KMS (Knowledge Management System) – Go to a Custom Plan",
      description:
        "<h3>Cars, Furniture & more– Builder Section</h3><br><p>The Builder Section facilitates the creation and viewing of detailed AR models for not just cars and furniture but any model you can think of!, enabling users to virtually place vehicles in various interior settings and glTF converted from AutoCAD models for accurate representation.</p><br><h3>Customised Solutions – Hassle-Free Expertise</h3><br><p>Tailored AR solutions provided by ARTEKK simplify product scaling and integration, backed by expert support for a seamless experience.</p><br><h3>Criteria for AR Solutions</h3><br><p>AR solutions include face tracking for caps, offering a realistic fit and interaction, while furniture models enhance customer visualisation in real-world contexts.</p><br><h3>Existing Business Applications</h3><br><p>Incorporating AR-based videos via QR code scans enriches newspaper content, while the shoe solution eliminates size constraints, aiding informed purchasing decisions. Face tracking technology ensures virtual try-ons for caps, reducing returns and enhancing customer satisfaction.<p/><br><h3>Key Benefits</h3><br><p>ARTEKK's user-friendly interfaces, accurate sizing, realistic visualisation, interactive engagement features, and expert support empower businesses to optimise product presentations and customer engagement with innovative AR technology.</p>",
    },
    {
      title: "Trying Newspaper and Billboard AR Experiences",
      description:
        "Using Billboard and Newspaper to display AR content requires a target to put the 3D models on. For our <a style='color: #fff' href='/collections'><u>Collection Page</a></u>'s example, we have used the following images as image targets: <br><br> <img src='/images/Sample/billboard-target.png' width='100%' style='border-radius: 10px' alt='AR Experience Example for Billboard'> <br> <br> <img src='/images/Sample/billboard.png' width='100%' style='border-radius: 10px' alt='AR Experience Example for Billboard'> <br> <br> <img src='/images/Sample/Red_Chief.jpg' width='100%' style='border-radius: 10px' alt='AR Experience Example for Newspaper'> <br> <br> Feel free to scan these when visiting our newspaper and billboards AR experience.",
    },
    {
      title: "Fields covered by ARTEKK on the virtual Try On Service",
      description:
        "<ul style=list-style:none><li>Caps: Try on a variety of caps in different styles and colours to find the perfect fit for your head and your outfit, all from the comfort of your home.</li><br><li>Furniture: Visualise how different pieces of furniture will look in your space, allowing you to match styles and sizes perfectly before making a purchase.</li><br><li>Newspapers: Experience reading newspapers in an immersive virtual format, making it feel like you're holding the real thing, with easy access to enhanced content and multimedia.</li><br><li>Billboards: See how advertisements will appear on actual billboards in different locations, helping advertisers choose the most effective placements for their campaigns.</li><br><li>Clothes: Try on clothes virtually to see how they fit and look on your body, ensuring you always make the right choice when shopping for new outfits.</li><br><li>Jewellery: Explore how rings, necklaces, earrings, and other pieces of jewellery will look on you, helping you find the perfect accessories to complement your style.</li><br><li>Cosmetics: Experiment with different makeup products and looks on your own face, allowing you to find the perfect shades and styles without any mess.</li><br><li>Shoes: Virtually try on shoes to see how they look and fit, helping you pick the perfect pair for comfort and style without leaving your home.</li><br><li>Glasses: See how different frames and lenses will look on your face, ensuring you choose glasses that enhance your appearance and suit your vision needs.</li><br><li>Watches: Try on various watch styles to see how they fit and look on your wrist, helping you find the ideal timepiece that matches your personal taste.</li><br><li>Car: Get a virtual preview of different car models, allowing you to explore interiors and exteriors in detail before making a test drive or purchase.</li><br><li>Gloves: Virtually try on gloves to ensure a perfect fit and style, whether you need them for fashion, work, or sports.</li><br></ul>",
    },
  ];
</script>

<main>
  <FAQ {content} />
</main>

<style lang="scss">
  main {
    max-inline-size: 1280px;
    min-block-size: 70vh;
    inline-size: 100vw;
    margin-inline: auto;
    padding-inline: 2rem;
  }
</style>
