import React from 'react'

export default function About() {
  return (
      <div className="py-21 bg-[#a094a6] ">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="C:\Users\Lenovo\react\lingovia\src\assets\Preparing Your Body For Pregnancy - What You Need to Know - Fed & Fit.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Welcome to Lingovia — Your Trusted Companion Through Every Step of Pregnancy
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Pregnancy is a beautiful journey, filled with joy, questions, and moments of uncertainty. At Lingovia, we understand how important it is to feel supported, informed, and empowered — day or night.

                      That's why we created a smart, friendly AI chat assistant designed just for you. Whether you're in your first trimester or preparing for delivery, we're here to guide you with personalized insights, gentle encouragement, and helpful suggestions.
                      </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}