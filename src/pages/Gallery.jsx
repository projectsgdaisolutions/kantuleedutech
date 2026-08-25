import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

// ============================================================
// GALLERY IMAGES
// src/assets/images/gallery/
// ============================================================

import KE01 from "../assets/images/gallery/KE01.jpeg";
import KE02 from "../assets/images/gallery/KE02.jpeg";
import KE03 from "../assets/images/gallery/KE03.jpeg";
import KE04 from "../assets/images/gallery/KE04.jpeg";
import KE05 from "../assets/images/gallery/KE05.jpeg";
import KE06 from "../assets/images/gallery/KE06.jpeg";
import KE07 from "../assets/images/gallery/KE07.jpeg";
import KE08 from "../assets/images/gallery/KE08.jpeg";
import KE09 from "../assets/images/gallery/KE09.jpeg";
import KE10 from "../assets/images/gallery/KE10.jpeg";
import KE11 from "../assets/images/gallery/KE11.jpeg";
import KE12 from "../assets/images/gallery/KE12.jpeg";
import KE13 from "../assets/images/gallery/KE13.jpeg";
import KE14 from "../assets/images/gallery/KE14.jpeg";
import KE15 from "../assets/images/gallery/KE15.jpeg";
import KE17 from "../assets/images/gallery/KE17.jpeg";
import KE18 from "../assets/images/gallery/KE18.jpeg";
import KE20 from "../assets/images/gallery/KE20.jpeg";
import KE22 from "../assets/images/gallery/KE22.jpeg";
import KE23 from "../assets/images/gallery/KE23.jpeg";
import KE24 from "../assets/images/gallery/KE24.jpeg";
import KE25 from "../assets/images/gallery/KE25.jpeg";
import KE26 from "../assets/images/gallery/KE26.jpeg";
import KE27 from "../assets/images/gallery/KE27.jpeg";

// ============================================================
// GALLERY DATA
// ============================================================

const galleryItems = [
  { id: "KE01", image: KE01 },
  { id: "KE02", image: KE02 },
  { id: "KE03", image: KE03 },
  { id: "KE04", image: KE04 },
  { id: "KE05", image: KE05 },
  { id: "KE06", image: KE06 },
  { id: "KE07", image: KE07 },
  { id: "KE08", image: KE08 },
  { id: "KE09", image: KE09 },
  { id: "KE10", image: KE10 },
  { id: "KE11", image: KE11 },
  { id: "KE12", image: KE12 },
  { id: "KE13", image: KE13 },
  { id: "KE14", image: KE14 },
  { id: "KE15", image: KE15 },
  { id: "KE17", image: KE17 },
  { id: "KE18", image: KE18 },
  { id: "KE20", image: KE20 },
  { id: "KE22", image: KE22 },
  { id: "KE23", image: KE23 },
  { id: "KE24", image: KE24 },
  { id: "KE25", image: KE25 },
  { id: "KE26", image: KE26 },
  { id: "KE27", image: KE27 },
];

const WHATSAPP_NUMBER = "918830451660";

// ============================================================
// GALLERY PAGE
// ============================================================

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // ----------------------------------------------------------
  // Scroll to top
  // ----------------------------------------------------------

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ----------------------------------------------------------
  // Keyboard controls
  // ----------------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (lightboxIndex === null) return;

      if (event.key === "Escape") {
        setLightboxIndex(null);
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex(
          (prev) => (prev + 1) % galleryItems.length
        );
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0
            ? galleryItems.length - 1
            : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  // ----------------------------------------------------------
  // Lock body scroll
  // ----------------------------------------------------------

  useEffect(() => {
    document.body.style.overflow =
      lightboxIndex !== null ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // ----------------------------------------------------------
  // Lightbox functions
  // ----------------------------------------------------------

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (event) => {
    event.stopPropagation();

    setLightboxIndex(
      (prev) => (prev + 1) % galleryItems.length
    );
  };

  const previousImage = (event) => {
    event.stopPropagation();

    setLightboxIndex((prev) =>
      prev === 0
        ? galleryItems.length - 1
        : prev - 1
    );
  };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <main className="min-h-screen bg-[#f7fbff]">

      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#061D38] via-[#082F5B] to-[#087DB8]">

        {/* Background effects */}

        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-40
              -right-20
              h-96
              w-96
              rounded-full
              bg-blue-300/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              inset-0
              opacity-[0.07]
              bg-[radial-gradient(#38bdf8_1.2px,transparent_1.2px)]
              [background-size:24px_24px]
            "
          />

        </div>

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            py-14
            sm:px-8
            sm:py-20
            lg:px-10
            lg:py-24
          "
        >

          <div className="mx-auto max-w-3xl text-center">

            {/* Decorative icon */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                mx-auto
                mb-6
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/30
                bg-white/10
                text-cyan-300
                shadow-lg
                backdrop-blur-md
              "
            >
              <span className="text-xl">✦</span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Moments That Reflect{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-[#16B9D9]
                  to-white
                  bg-clip-text
                  text-transparent
                "
              >
                Our Journey
              </span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-sm
                leading-7
                text-slate-200
                sm:text-base
                lg:text-lg
              "
            >
              A glimpse into the people, experiences
              and moments that make the Kantule
              Edutech journey special.
            </motion.p>

          </div>

        </div>
      </section>

      {/* ======================================================
          MAIN GALLERY
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          sm:py-14
          lg:px-10
          lg:py-16
        "
      >

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="
            columns-1
            gap-4
            sm:columns-2
            sm:gap-5
            lg:columns-3
            lg:gap-6
          "
        >

          {galleryItems.map((item, index) => (

            <motion.button
              key={item.id}
              type="button"
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.035, 0.5),
              }}
              onClick={() => openLightbox(index)}
              className="
                group
                relative
                mb-4
                block
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-white
                bg-white
                p-1.5
                text-left
                shadow-[0_8px_28px_rgba(8,47,91,0.07)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(8,47,91,0.16)]
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400/60
                sm:mb-5
                lg:mb-6
              "
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[14px]
                  bg-slate-100
                "
              >

                {/* IMAGE */}

                <img
                  src={item.image}
                  alt={`Kantule Edutech ${item.id}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="
                    block
                    h-auto
                    min-h-[180px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.045]
                  "
                />

                {/* Soft overlay */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061D38]/35
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Expand icon */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    sm:right-4
                    sm:top-4
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      bg-black/20
                      text-white
                      shadow-lg
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-white
                      group-hover:text-[#082F5B]
                    "
                  >
                    <Maximize2 size={15} />
                  </span>
                </div>

              </div>

            </motion.button>

          ))}

        </motion.div>

      </section>

      {/* ======================================================
          PHOTO COUNT
      ====================================================== */}

      <div className="flex justify-center px-4 pb-12 sm:pb-16">

        <div
          className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-[#dce9f5]
            bg-white
            px-5
            py-2.5
            shadow-sm
          "
        >

          <div className="flex -space-x-2">

            <span
              className="
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-cyan-300
                to-blue-500
              "
            />

            <span
              className="
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-blue-300
                to-cyan-600
              "
            />

            <span
              className="
                h-6
                w-6
                rounded-full
                border-2
                border-white
                bg-gradient-to-br
                from-cyan-500
                to-[#0B2D5C]
              "
            />

          </div>

          <span
            className="
              text-xs
              font-semibold
              text-slate-600
            "
          >
            {galleryItems.length} moments
          </span>

        </div>

      </div>

      {/* ======================================================
          LIGHTBOX
      ====================================================== */}

      <AnimatePresence>

        {lightboxIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              items-center
              justify-center
              bg-black/90
              p-3
              backdrop-blur-md
              sm:p-6
            "
          >

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image"
              className="
                absolute
                right-4
                top-4
                z-[10000]
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition-all
                hover:scale-110
                hover:bg-white/25
                sm:right-6
                sm:top-6
              "
            >
              <X size={21} />
            </button>

            {/* PREVIOUS */}

            {galleryItems.length > 1 && (
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-2
                  top-1/2
                  z-[10000]
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white/25
                  sm:left-6
                "
              >
                <ChevronLeft size={25} />
              </button>
            )}

            {/* NEXT */}

            {galleryItems.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-2
                  top-1/2
                  z-[10000]
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:scale-110
                  hover:bg-white/25
                  sm:right-6
                "
              >
                <ChevronRight size={25} />
              </button>
            )}

            {/* IMAGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative
                flex
                max-h-[92vh]
                max-w-6xl
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-black
                shadow-2xl
                sm:rounded-3xl
              "
            >

              <img
                src={galleryItems[lightboxIndex].image}
                alt={`Kantule Edutech ${galleryItems[lightboxIndex].id}`}
                className="
                  max-h-[92vh]
                  max-w-full
                  object-contain
                "
              />

              {/* COUNTER */}

              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  border
                  border-white/20
                  bg-black/45
                  px-4
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                {lightboxIndex + 1} / {galleryItems.length}
              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* ======================================================
          CTA
      ====================================================== */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-16
          sm:px-6
          sm:pb-20
          lg:px-10
        "
      >

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-[#061D38]
            via-[#082F5B]
            to-[#0B5EA8]
            p-7
            text-white
            shadow-[0_20px_60px_rgba(8,47,91,0.18)]
            sm:p-10
            lg:p-14
          "
        >

          {/* Background glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-7
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-2xl">

              <div
                className="
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-cyan-300
                "
              >
                <span className="text-lg">✦</span>
              </div>

              <h2
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Start Your Medical Journey
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-slate-200
                  sm:text-base
                "
              >
                Get personalized MBBS counselling,
                university selection and step-by-step
                admission guidance.
              </p>

            </div>

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-[#0B8FD3]
                  to-[#16B9D9]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-0.5
                "
              >
                Book Free Counselling
                <ArrowRight size={16} />
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white/20
                "
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}