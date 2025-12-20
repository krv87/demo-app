import { Calendar, Shield, Users } from 'lucide-react';
import FadeIn from "./FadeInElement";

const boxes = [
    <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white benefits-box">
      <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Calendar className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">Easy Scheduling</h3>
      <p className="text-gray-200">
        Book appointments online 24/7. Choose the date and time that works best for you.
      </p>
    </div>,

    <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white benefits-box">
      <div className="bg-white/20 bg-opacity-20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Users className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">Expert Professionals</h3>
      <p className="text-gray-200">
        Our experienced team is dedicated to providing you with the highest quality care.
      </p>
    </div>,

    <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white benefits-box">
      <div className="bg-white/20 bg-opacity-20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Shield className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
      <p className="text-gray-200 translate-y">
        Your information is protected with industry-leading security measures.
      </p>
    </div>
  ]

export default function Features({ trigger }) {
    return (
        <div className="grid md:grid-cols-3 gap-8 mt-20">
            {boxes.map((element, index) => (
                <FadeIn key={index} index={index + 1}
                    target={element}
                    delay="short"
                    trigger={trigger}
                />
            ))}
        </div>
    );
};