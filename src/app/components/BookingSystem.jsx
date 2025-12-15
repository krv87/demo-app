import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckCircle } from 'lucide-react';

export default function BookingSystem() {
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
  };

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
          
          <button
            onClick={resetBooking}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
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