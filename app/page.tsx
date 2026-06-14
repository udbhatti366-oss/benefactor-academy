"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="video"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-working-on-laptop-1560676612616?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="overlay" />

        <div className="heroContent">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
          >
            <div className="badge">
              AI AUTOMATION • REPUTATION SYSTEMS
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
          >
            Get More Reviews.
            <br />
            Rank Higher.
            <br />
            Book More Clients.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >
            We build AI-powered reputation systems that
            automatically generate Google reviews,
            improve rankings and increase bookings.
          </motion.p>

          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .6 }}
          >
            <Link
              href="https://calendly.com/searchonlineplus/30min"
              target="_blank"
            >
              <button className="primary">
                BOOK FREE STRATEGY CALL
              </button>
            </Link>

            <button className="secondary">
              SEE CASE STUDIES
            </button>
          </motion.div>

        </div>

      </section>

    </main>
  );
}