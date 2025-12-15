"use client";

import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, Star, Shield, Users, Link} from 'lucide-react';

export default function BookingApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  const services = [
    { id: 'consultation', name: 'Consultation', duration: '30 min', price: '$50' },
    { id: 'therapy', name: 'Therapy Session', duration: '60 min', price: '$120' },
    { id: 'assessment', name: 'Assessment', duration: '90 min', price: '$180' }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsBooked(true);
  };

  const resetBooking = () => {
    setStep(1);
    setFormData({
      service: '',
      date: '',
      time: '',
      name: '',
      email: '',
      phone: ''
    });
    setIsBooked(false);
    setCurrentPage('home');
  };

  const goToBooking = () => {
    setCurrentPage('booking');
    setStep(1);
    setIsBooked(false);
  };

  // Home Page
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        {/* Navigation */}
        <nav className="px-6 py-4 bg-indigo-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-white text-2xl font-bold">HealthCare+</div>
            <button
              onClick={goToBooking}
              className="bg-white text-indigo-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Book Now
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Experience professional healthcare services with convenient online booking. 
              Schedule your appointment in minutes.
            </p>
            <button
              onClick={goToBooking}
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-xl"
            >
              Book Your Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white">
              <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Easy Scheduling</h3>
              <p className="text-gray-200">
                Book appointments online 24/7. Choose the date and time that works best for you.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white">
              <div className="bg-white/20 bg-opacity-20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Professionals</h3>
              <p className="text-gray-200">
                Our experienced team is dedicated to providing you with the highest quality care.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl text-white">
              <div className="bg-white/20 bg-opacity-20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Private</h3>
              <p className="text-gray-200">
                Your information is protected with industry-leading security measures.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-gray-200">Happy Patients</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-200">Expert Doctors</div>
            </div>
            <div className="text-white">
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-gray-200 flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                Average Rating
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-white/15 backdrop-blur-sm rounded-2xl text-white p-12 text-center min-w-fit">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take Care of Your Health?
            </h2>
            <p className="text-gray-200 mb-6 text-lg">
              Join thousands of satisfied patients who trust us with their healthcare needs.
            </p>
            <button
              onClick={goToBooking}
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black bg-opacity-20 backdrop-blur-sm mt-20">

            <div className="bg-indigo-950/50 backdrop-blur-sm px-6 text-left mr-auto mt-0 min-w-fit">
              <p className='mb-2.5 pt-10 ml-0 sm:ml-5'>Designed & Developed by Kasun Ravinath Vithanage.</p>
              <div className='flex flex-row gap-2.5 mb-2.5 pl-2 ml-0 sm:ml-5'>
                <Phone/>
                <a href="tel:+94752919291" className=' hover:text-purple-400'>+94 752919291</a>
              </div>
              <div className='flex flex-row gap-2.5 mb-2.5 pl-2 ml-0 sm:ml-5'>
                <Mail/>
                <a href="mailto:kasunrv.dev@gmail.com" className=' hover:text-purple-400'>kasunrv.dev@gmail.com</a>
              </div>
              <div className='flex flex-row gap-2.5 mb-2.5 pl-2 ml-0 sm:ml-5'>
                <Link/>
                <a href="https://www.linkedin.com/in/kasun-vithanage-b40139394" target="_blank" rel="noopener noreferrer" 
                className='hover:underline hover:text-purple-400 pb-5'> Kasun Vithanage at LinkedIn</a>
              </div>
            </div>

          <div className="max-w-7xl mx-auto px-6 text-gray-300 text-center p-2">
            <p>&copy; 2025 HealthCare+. All rights reserved.</p>
          </div>
        </div>
      </div>
    );
  }

  // Booking Pages (existing booking system)
  if (isBooked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">Your appointment has been scheduled</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <div className="mb-3">
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-semibold text-gray-800">
                {services.find(s => s.id === formData.service)?.name}
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm text-gray-500">Date & Time</p>
              <p className="font-semibold text-gray-800">
                {formData.date} at {formData.time}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact</p>
              <p className="font-semibold text-gray-800">{formData.name}</p>
              <p className="text-sm text-gray-600">{formData.email}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => {
                setStep(1);
                setFormData({
                  service: '',
                  date: '',
                  time: '',
                  name: '',
                  email: '',
                  phone: ''
                });
                setIsBooked(false);
              }}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Book Another Appointment
            </button>
            <button
              onClick={resetBooking}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-indigo-600 hover:text-indigo-700 font-semibold mb-4 inline-flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Book Your Appointment</h1>
          <p className="text-gray-600">Select a service and choose your preferred time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-indigo-600 px-6 py-4">
            <div className="flex justify-between items-center">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                    step >= s ? 'bg-white text-indigo-600' : 'bg-indigo-500 text-white'
                  }`}>
                    {s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 sm:w-24 h-1 mx-2 ${
                      step > s ? 'bg-white' : 'bg-indigo-500'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Select Service */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Select a Service</h2>
                <div className="grid gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleInputChange('service', service.id)}
                      className={`p-6 rounded-xl border-2 text-left transition hover:shadow-md ${
                        formData.service === service.id
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-200 hover:border-indigo-300'
                      }`}
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                        <span className="font-semibold text-indigo-600">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!formData.service}
                  className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Select Date & Time */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Choose Date & Time</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange('time', time)}
                        className={`py-3 rounded-lg border-2 font-semibold transition ${
                          formData.time === time
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-gray-200 hover:border-indigo-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Information</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-indigo-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}