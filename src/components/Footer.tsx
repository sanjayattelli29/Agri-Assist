
import { Github, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t mt-auto">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 space-y-2 sm:space-y-0">
        <p className="text-sm text-muted-foreground">
          © {year} AgroPredict. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <Link
            to="/admin/login"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ShieldAlert className="h-5 w-5" />
            <span className="text-sm">Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
