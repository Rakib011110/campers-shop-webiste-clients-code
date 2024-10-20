const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      {/* Contact Information */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold">Contact Information</h2>
        <p className="mt-4">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@campersshop.com
        </p>
        <p>
          <strong>Address:</strong> 123 Camping Lane, Adventure City, AC 12345
        </p>
      </div>

      {/* Google Map */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093027!2d144.96315781531676!3d-37.816279379751595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d92d4977%3A0x2f9c7c3d8f94858!2sCamping%20Store!5e0!3m2!1sen!2sau!4v1615821898206!5m2!1sen!2sau"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"></iframe>
      </div>

      {/* Social Media Links */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold">Connect With Us</h2>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com/ariyan.rakib890/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://img.freepik.com/premium-photo/trendy-facebook-icon-designs-professional-use_1199394-47735.jpg"
              alt="Facebook"
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://www.clickslice.co.uk/wp-content/uploads/2022/07/alexander-shatov-k1xf2D7jWUs-unsplash-scaled-1024x768.jpg"
              alt="Twitter"
              className="w-8 h-8 object-cover"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80M8fem5EdhbDYkAwRASlm11TrNLrRtxCaQ&s"
              alt="Instagram"
              className="w-8 h-8 object-cover"
            />
          </a>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-gray-700">
          At Campers Shop, our mission is to provide the best outdoor gear and
          camping essentials for every adventurer. We believe in quality,
          sustainability, and helping you connect with nature in a meaningful
          way.
        </p>
      </div>

      {/* Team Members */}
      <div>
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-1/459889212_1981029352415870_7846933747818311811_n.jpg?stp=c0.483.1152.1152a_dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=yYvjWT2RR4sQ7kNvgEthBVy&_nc_zt=24&_nc_ht=scontent.fdac99-1.fna&_nc_gid=AWlp8YOTf2K3HGPH3I6B0uK&oh=00_AYAiwddjmjMiSYxPQzd8qEalkyRJj2DU0gQkg_8KJtp1hQ&oe=671AAB7C"
              alt="John Doe"
              className="w-32 h-32  rounded-full mx-auto"
            />
            <h3 className="mt-4 font-bold">Ariyan Rakib</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt="Jane Smith"
              className="w-32 object-cover h-32 rounded-full mx-auto"
            />
            <h3 className="mt-4 font-bold">Jane Smith</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-white-wall_176420-32936.jpg?w=360"
              alt="Mike Johnson"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 font-bold">Mike Johnson</h3>
            <p className="text-gray-500">Marketing Head</p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
              alt="Emily Davis"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h3 className="mt-4 font-bold">Emily Davis</h3>
            <p className="text-gray-500">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
