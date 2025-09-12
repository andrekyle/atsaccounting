import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-course-primary to-course-secondary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-bold text-xl">Afrika Tikkun Finance</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering communities through education, skills development, and innovative programs 
              that create sustainable change across Africa.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-xl mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white mt-0.5 stroke-[1.25]" />
                <div>
                  <p className="font-medium">Training Coordinator</p>
                  <p className="text-white/80">training@afrikatikkun.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white mt-0.5 stroke-[1.25]" />
                <div>
                  <p className="font-medium">Support Desk</p>
                  <p className="text-white/80">+27 11 555 0123</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white mt-0.5 stroke-[1.25]" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-white/80">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Support */}
          <div>
            <h3 className="font-bold text-xl mb-6">Course Support</h3>
            <Card className="bg-white/20 border-white/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-white">Need Help?</h4>
                <p className="text-white/80 text-sm mb-4">
                  Our training support team is available to assist with course-related questions 
                  and technical support.
                </p>
                <Button size="sm" className="bg-white text-course-primary hover:bg-white/90 w-full">
                  Get Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="border-t border-white/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Afrika Tikkun. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;