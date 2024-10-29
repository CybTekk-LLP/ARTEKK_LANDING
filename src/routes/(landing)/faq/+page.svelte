<script lang="ts">
  import { FAQ } from "$lib/project";
  let content = [
    {
      title: " What is ARTEKK, and what does it offer?",
      description:
        "ARTEKK is a platform dedicated to creating and integrating augmented reality (AR) models for industries like fashion, furniture, and accessories. It offers tools for AR project setup, AutoCAD model conversion, and custom solutions to deliver immersive, engaging experiences. Operating as a B2B platform, ARTEKK facilitates partnerships that empower businesses to leverage AR for marketing, product demonstrations, and enhanced customer interaction, ultimately helping them stand out in competitive markets.",
    },
    {
      title: "Contacting Sales for Custom plans",
      description:
        "You can contact our Sales team through the following methods: Email: sales@artekk.com, Contact Form: Fill out the form on our <u><a style='color: var(--primary-900)' href='/contact'>Contact page</a></u>. Our Sales team is available Monday to Friday, 10:00 AM to 6:00 PM EST.",
    },
    {
      title: "Price Plans to Choose from",
      description:
        "<h3>Our price plans are designed to be flexible and cater to different needs:</h3><br><ul style=list-style:none><li>Builder Plan: Available to place models on the go. Limited customization. A no-code solution to serve your basic needs.</li><br><li>Custom Plan: Connect with sales to discuss your exact requirements, and we will develop an AR solution for your new or existing projects, curated to meet your needs.</li><br><li>A-la-carte: Add any of the verticals you want with this plan, and we will provide you with the developed solution. A plan made to serve specific needs.</li><br><li>For a detailed breakdown of each plan, please visit our <u><a style='color: var(--primary-900)' href='/pricing'>Pricing Plans page</a></u>.</li></ul>",
    },
    {
      title: "Carrying out configuration of projects",
      description:
        "<ul style=list-style:none><li>Login to your account and set up your builder module by navigating to the Projects tab in the top menu.</li><br><li>Start by creating a new project and adding a name for your project and the authorised domain. When you first create a project, its status will be inactive. This is to ensure your domains can be authorised. We will verify this on our end, and once your project is approved, it will show a status of active. You can then start uploading your 3D models and receive the CDN links for the JavaScript libraries and models to use.</li><br><li>Visit our  <u><a style='color: var(--primary-900)' href='/generate'>Code Generator page</a></u> to learn how to configure your project. If you prefer not to deal with any code, you can always upgrade to the Custom Plan, where we will develop the solution models for you. You will only be charged the <span style='color:var(--primary-900)'>difference</span>.</li></ul>",
    },
    {
      title: "What is the ARTEKK Free Plan, and what does it include?",
      description:
        "<h3>The Free Plan is a limited-time offering that provides essential tools to get started with AR for your products at no cost. It includes personalized AR setup for products, easy integration of designer-provided 3D models into the AR experience, free AR product displays, and full platform integration with major e-commerce systems like Shopify and WordPress. Basic support is also included to help you integrate AR smoothly.</p>",
    },
    {
      title: "What benefits does the ARTEKK Pro Plan offer?",
      description:
        "<h3>The Pro Plan is designed for businesses seeking advanced AR capabilities. It includes personalized AR integration tailored to your codebase, initial setup with full 3D model integration, and priority support for faster troubleshooting and updates. Additional features include advanced analytics for AR interactions, creation of custom 3D models, tailored designs for accuracy, quick delivery times, and compatibility with multiple platforms like Shopify and WordPress, all at a minimal cost to maximize ROI.</p>",
    },
    {
      title: "Can I switch from the Free Plan to the Pro Plan?",
      description:
        "<p>Yes, you can upgrade from the Free Plan to the Pro Plan at any time. This will grant you access to more comprehensive features, such as priority support, custom 3D models, advanced analytics, and faster model delivery times.</p>",
    },
     {
      title: "Is the Free Plan actually free, or are there hidden fees?",
      description:
        "<p>The Free Plan is genuinely free for a limited time with no hidden fees. It offers core AR tools and e-commerce integration without any cost. For advanced features and enhanced support, the Pro Plan is available.</p>",
    },
    
    {
      title: "Trying Newspaper and Billboard AR Experiences",
      description:
        "Using Billboard and Newspaper to display AR content requires a target to put the 3D models on. For our <a style='color: var(--primary-900)' href='/collections'><u>Collection Page</a></u>'s example, we have used the following images as image targets: <br><br> <img src='/images/Sample/billboard-target.png' width='100%' style='border-radius: 10px' alt='AR Experience Example for Billboard'> <br> <br> <img src='/images/Sample/billboard.png' width='100%' style='border-radius: 10px' alt='AR Experience Example for Billboard'> <br> <br> <img src='/images/Sample/Red_Chief.jpg' width='100%' style='border-radius: 10px' alt='AR Experience Example for Newspaper'> <br> <br> Feel free to scan these when visiting our newspaper and billboards AR experience.",
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
