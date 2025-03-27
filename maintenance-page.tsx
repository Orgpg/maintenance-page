"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Settings,
  Clock,
  AlertCircle,
  ChevronDown,
  Mail,
  Code,
  Server,
  Database,
  Cpu,
} from "lucide-react";
import Head from "next/head";

// Define types for our state and props
type CountdownState = {
  hours: number;
  minutes: number;
  seconds: number;
};

type BackgroundElement = {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  icon: React.ElementType;
};

export default function MaintenancePage() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<CountdownState>({
    hours: 4,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number): string => {
    return value.toString().padStart(2, "0");
  };

  // Background elements with different icons - tech/server related
  const bgElements: BackgroundElement[] = [
    { id: 1, top: "10%", left: "10%", size: "40px", delay: "0s", icon: Server },
    { id: 2, top: "20%", left: "80%", size: "60px", delay: "2s", icon: Code },
    {
      id: 3,
      top: "70%",
      left: "15%",
      size: "50px",
      delay: "1s",
      icon: Database,
    },
    { id: 4, top: "40%", left: "70%", size: "45px", delay: "3s", icon: Cpu },
    { id: 5, top: "80%", left: "80%", size: "55px", delay: "2s", icon: Server },
    { id: 6, top: "30%", left: "30%", size: "35px", delay: "1s", icon: Code },
    {
      id: 7,
      top: "60%",
      left: "60%",
      size: "50px",
      delay: "0s",
      icon: Database,
    },
    { id: 8, top: "75%", left: "40%", size: "45px", delay: "2s", icon: Cpu },
    {
      id: 9,
      top: "15%",
      left: "50%",
      size: "40px",
      delay: "1.5s",
      icon: Server,
    },
    {
      id: 10,
      top: "50%",
      left: "20%",
      size: "55px",
      delay: "0.5s",
      icon: Code,
    },
    {
      id: 11,
      top: "85%",
      left: "65%",
      size: "35px",
      delay: "2.5s",
      icon: Database,
    },
    { id: 12, top: "25%", left: "75%", size: "50px", delay: "1.8s", icon: Cpu },
  ];

  return (
    <>
      <Head>
        <title>Site Under Maintenance | We'll Be Back Soon</title>
        <meta
          name="description"
          content="Our site is currently undergoing scheduled maintenance. We'll be back online shortly with improved performance and new features."
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
      </Head>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Anta&display=swap");

        body {
          font-family: "Anta", sans-serif;
        }

        /* Background icon animations */
        .bg-icon {
          position: absolute;
          opacity: 0.05;
          animation: float 15s ease-in-out infinite alternate;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        /* Pulse animation for the countdown */
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(99, 102, 241, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);
          }
        }

        .pulse {
          animation: pulse 2s infinite;
        }

        /* Fade in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .fade-in-delay-1 {
          animation: fadeIn 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .fade-in-delay-2 {
          animation: fadeIn 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .fade-in-delay-3 {
          animation: fadeIn 0.6s ease-out 0.6s forwards;
          opacity: 0;
        }

        /* Rotate animation for icon */
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .rotate-slow {
          animation: rotate 10s linear infinite;
        }

        /* Shimmer effect for text */
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .shimmer-text {
          background: linear-gradient(
            90deg,
            #6366f1 0%,
            #818cf8 50%,
            #6366f1 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        /* Bounce animation */
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .bounce {
          animation: bounce 2s ease infinite;
        }

        /* Scale animation for hover */
        .scale-on-hover {
          transition: transform 0.3s ease;
        }

        .scale-on-hover:hover {
          transform: scale(1.05);
        }

        /* Slide in animation for details */
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }

        .slide-down {
          animation: slideDown 0.5s ease-out forwards;
          overflow: hidden;
        }

        /* Matrix-like background effect */
        .matrix-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .matrix-line {
          position: absolute;
          width: 1px;
          top: -50%;
          background: linear-gradient(
            to bottom,
            rgba(99, 102, 241, 0),
            rgba(99, 102, 241, 0.2) 50%,
            rgba(99, 102, 241, 0)
          );
          animation: matrix-fall linear infinite;
        }

        @keyframes matrix-fall {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        /* Glitch effect */
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: glitch 5s ease-in-out infinite alternate;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 flex flex-col items-center justify-center p-4 text-white overflow-hidden relative">
        {/* Matrix-like background effect */}
        <div className="matrix-bg">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={`matrix-line-${index}`}
              className="matrix-line"
              style={{
                left: `${index * 5}%`,
                height: `${Math.random() * 30 + 20}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Animated background elements */}
        {bgElements.map((el) => {
          const IconComponent = el.icon;
          return (
            <div
              key={el.id}
              className="bg-icon"
              style={{
                top: el.top,
                left: el.left,
                width: el.size,
                height: el.size,
                animationDelay: el.delay,
              }}
            >
              <IconComponent size="100%" color="#6366f1" opacity="0.2" />
            </div>
          );
        })}

        <div className="w-full max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl border border-indigo-900 fade-in">
              <div className="w-16 h-16 mb-6 relative bounce">
                <div className="absolute inset-0 bg-indigo-500 rounded-xl rotate-slow"></div>
                <div className="absolute inset-1 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Settings className="w-8 h-8 text-indigo-400" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold mb-4 shimmer-text">
                Site Maintenance
              </h1>

              <p className="text-gray-300 mb-8 fade-in-delay-1">
                We are currently upgrading our systems to serve you better.
                Improved performance, enhanced security, and new features coming
                soon!
              </p>

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between bg-gray-700 hover:bg-gray-600 py-3 px-4 rounded-xl transition-colors duration-300 scale-on-hover fade-in-delay-2"
              >
                <span>View maintenance details</span>
                <ChevronDown
                  size={20}
                  className="text-indigo-400"
                  style={{
                    transform: showDetails ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>

              {showDetails && (
                <div className="pt-4 space-y-4 slide-down">
                  <div className="flex items-start gap-3 bg-gray-700 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      Our team is working to complete the system upgrade within
                      the estimated timeframe. Thank you for your patience.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 bg-gray-700 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-300">
                      During this time, all site features will be temporarily
                      unavailable. We apologize for any inconvenience.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-8 fade-in-delay-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Need help? Contact our support team at</span>
                </div>
                <a
                  href="mailto:admin@waiphyoaung.dev"
                  className="text-indigo-400 hover:text-indigo-300 mt-1 scale-on-hover inline-block"
                >
                  admin@waiphyoaung.dev
                </a>
              </div>
            </div>

            {/* Right side - Countdown */}
            <div className="flex flex-col items-center fade-in-delay-1">
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-8 border-gray-700 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm pulse">
                  <div className="text-center glitch">
                    <div className="text-5xl font-bold mb-2 shimmer-text">
                      {formatTime(countdown.hours)}:
                      {formatTime(countdown.minutes)}:
                      {formatTime(countdown.seconds)}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Until we're back online
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-sm">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-indigo-900 text-center scale-on-hover fade-in-delay-1">
                  <div className="text-2xl font-bold text-indigo-400">
                    {formatTime(countdown.hours)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Hours</div>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-indigo-900 text-center scale-on-hover fade-in-delay-2">
                  <div className="text-2xl font-bold text-indigo-400">
                    {formatTime(countdown.minutes)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Minutes</div>
                </div>
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl border border-indigo-900 text-center scale-on-hover fade-in-delay-3">
                  <div className="text-2xl font-bold text-indigo-400">
                    {formatTime(countdown.seconds)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
