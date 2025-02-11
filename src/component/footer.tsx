
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p>&copy; 2023 MyWebsite. All rights reserved.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-blue-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;