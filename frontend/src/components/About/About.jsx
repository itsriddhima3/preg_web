import React from 'react'

export default function About() {
  return (
      <div className="py-21 bg-[url(./pregnant.jpg)] bg-no-repeat bg-cover h-dvh">
          <div className="container m-auto px-6 text-black md:px-12 xl:px-6">
              <div className="text-left  " >
                  <div className="md:7/12 lg:w-1/2 ">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Welcome to Pregg — Your Trusted Companion Through Every Step of Pregnancy
                      </h2>
                      <p className="mt-6 text-black">
                      Pregnancy is a beautiful journey, filled with joy, questions, and moments of uncertainty. At Lingovia, we understand how important it is to feel supported, informed, and empowered — day or night.

                      That's why we created a smart, friendly AI chat assistant designed just for you. Whether you're in your first trimester or preparing for delivery, we're here to guide you with personalized insights, gentle encouragement, and helpful suggestions.
                      </p>
                      
                  </div>
              </div>
          </div>
      </div>
  );
}