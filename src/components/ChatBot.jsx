import React, { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello! 👋 Welcome to Kantule Edutech.",
    },
    {
      id: 2,
      type: "bot",
      text: "I’m your MBBS Admission Assistant. I can help you with MBBS in India, MBBS Abroad, NEET guidance, eligibility, admission process and counselling.",
    },
  ]);

  const messagesEndRef = useRef(null);

  const whatsappNumber = "918830451660";
  const callNumber = "8830451660";

  // --------------------------------------------------
  // AUTO SCROLL
  // --------------------------------------------------

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isTyping, isOpen]);

  // --------------------------------------------------
  // TOOLTIP AUTO HIDE
  // --------------------------------------------------

  useEffect(() => {
    if (!isOpen && showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, showTooltip]);

  // --------------------------------------------------
  // WHATSAPP
  // --------------------------------------------------

  const openWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // --------------------------------------------------
  // MESSAGE HELPERS
  // --------------------------------------------------

  const addMessages = (userText, botText, options = []) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: userText,
      },
      {
        id: Date.now() + 1,
        type: "bot",
        text: botText,
        options,
      },
    ]);
  };

  // --------------------------------------------------
  // BOT DATA
  // --------------------------------------------------

  const mainOptions = [
    "MBBS in India",
    "MBBS Abroad",
    "NEET Guidance",
    "Eligibility",
    "Admission Process",
    "Documents Required",
    "Free Counselling",
  ];

  const indiaOptions = [
    "Government Medical Colleges",
    "Private Medical Colleges",
    "Deemed Universities",
    "NEET Counselling",
    "Back to Main Menu",
  ];

  const abroadCountries = [
    "Russia",
    "Kyrgyzstan",
    "Kazakhstan",
    "Georgia",
    "Philippines",
    "Nepal",
    "Vietnam",
    "USA & Other Countries",
    "Back to Main Menu",
  ];

  const admissionOptions = [
    "Step 1 – Counselling",
    "Step 2 – Selection",
    "Step 3 – Application",
    "Step 4 – Admission",
    "Step 5 – Documents & Visa",
    "Step 6 – Pre-Departure",
    "Step 7 – Post-Admission",
    "Back to Main Menu",
  ];

  const contactOptions = [
    "WhatsApp Counsellor",
    "Call Counsellor",
    "Back to Main Menu",
  ];

  // --------------------------------------------------
  // COUNTRY RESPONSE
  // --------------------------------------------------

  const getCountryResponse = (country) => {
    const countryInfo = {
      Russia:
        "Kantule Edutech provides MBBS admission counselling for suitable opportunities in Russia. University selection depends on your NEET status, academic profile, budget and other applicable requirements.",

      Kyrgyzstan:
        "Kantule Edutech provides guidance for MBBS opportunities in Kyrgyzstan. Our counsellors help students understand suitable university options, admission requirements, documentation and the overall admission journey.",

      Kazakhstan:
        "We provide counselling for MBBS opportunities in Kazakhstan. Suitable options can be discussed based on your academic profile, NEET status, budget and university-specific requirements.",

      Georgia:
        "Kantule Edutech provides guidance for MBBS opportunities in Georgia, including university selection, application assistance and documentation guidance.",

      Philippines:
        "We provide counselling for medical education opportunities in the Philippines. Eligibility and admission requirements can vary, so our counsellors can guide you based on your profile.",

      Nepal:
        "Kantule Edutech provides guidance regarding suitable MBBS opportunities in Nepal, subject to applicable eligibility and admission requirements.",

      Vietnam:
        "We provide counselling for MBBS opportunities in Vietnam. University and course requirements vary, so personalised counselling is recommended.",

      "USA & Other Countries":
        "Kantule Edutech can also help students explore other international medical education opportunities, including the USA and other destinations, depending on eligibility and applicable requirements.",
    };

    return (
      countryInfo[country] ||
      "Please select a destination to know more about MBBS Abroad options."
    );
  };

  // --------------------------------------------------
  // MAIN RESPONSE ENGINE
  // --------------------------------------------------

  const handleOption = (option) => {
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      processQuestion(option);
    }, 500);
  };

  const processQuestion = (question) => {
    const q = question.toLowerCase().trim();

    // ----------------------------------------------
    // MAIN MENU
    // ----------------------------------------------

    if (
      q === "back to main menu" ||
      q.includes("main menu") ||
      q === "menu"
    ) {
      addMessages(
        question,
        "Sure! What would you like to know about?",
        mainOptions
      );
      return;
    }

    // ----------------------------------------------
    // WHATSAPP
    // ----------------------------------------------

    if (
      q.includes("whatsapp counsellor") ||
      q.includes("whatsapp counselor")
    ) {
      openWhatsApp(
        "Hello Kantule Edutech, I would like to speak with a counsellor regarding MBBS admission guidance."
      );

      addMessages(
        question,
        "I’m opening WhatsApp for you. You can connect directly with the Kantule Edutech counselling team for personalised guidance."
      );

      return;
    }

    // ----------------------------------------------
    // CALL
    // ----------------------------------------------

    if (q.includes("call counsellor") || q.includes("call counselor")) {
      window.location.href = `tel:${callNumber}`;

      addMessages(
        question,
        `You can contact Kantule Edutech on ${callNumber} for admission counselling.`
      );

      return;
    }

    // ----------------------------------------------
    // MBBS INDIA
    // ----------------------------------------------

    if (
      q === "mbbs in india" ||
      q.includes("mbbs india") ||
      q.includes("india mbbs")
    ) {
      addMessages(
        question,
        "Kantule Edutech provides guidance for MBBS admission in India through Government Medical Colleges, Private Medical Colleges and Deemed Universities. We also provide NEET counselling guidance.",
        indiaOptions
      );
      return;
    }

    // ----------------------------------------------
    // GOVERNMENT COLLEGE
    // ----------------------------------------------

    if (q.includes("government medical colleges")) {
      addMessages(
        question,
        "For Government Medical Colleges, admission is generally linked with NEET and the applicable counselling process. Suitable options depend on your NEET score, category, academic profile and current counselling rules.",
        [
          "NEET Guidance",
          "Admission Process",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // PRIVATE COLLEGE
    // ----------------------------------------------

    if (q.includes("private medical colleges")) {
      addMessages(
        question,
        "Kantule Edutech helps students understand Private Medical College options in India based on their NEET profile, budget and career goals. College-specific fees and admission requirements should be confirmed during counselling.",
        [
          "NEET Guidance",
          "Admission Process",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // DEEMED
    // ----------------------------------------------

    if (q.includes("deemed universities")) {
      addMessages(
        question,
        "Deemed Universities are another MBBS option in India. Suitable options depend on your NEET profile, budget, preferences and applicable admission rules. Our counsellors can help you compare suitable possibilities.",
        [
          "NEET Guidance",
          "Free Counselling",
          "Admission Process",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // NEET COUNSELLING
    // ----------------------------------------------

    if (q.includes("neet counselling")) {
      addMessages(
        question,
        "NEET counselling plays an important role in MBBS admissions. Kantule Edutech helps students understand available options based on their NEET score, academic profile, budget and career goals.",
        [
          "Share My NEET Score",
          "MBBS in India",
          "MBBS Abroad",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // MBBS ABROAD
    // ----------------------------------------------

    if (
      q === "mbbs abroad" ||
      q.includes("mbbs abroad") ||
      q.includes("study mbbs abroad") ||
      q.includes("foreign mbbs")
    ) {
      addMessages(
        question,
        "Kantule Edutech provides MBBS admission counselling for international destinations. We assist with university selection, application, documentation, visa guidance, pre-departure guidance and post-admission support.",
        abroadCountries
      );
      return;
    }

    // ----------------------------------------------
    // COUNTRIES
    // ----------------------------------------------

    const matchedCountry = abroadCountries.find(
      (country) =>
        country !== "Back to Main Menu" &&
        q.includes(country.toLowerCase())
    );

    if (matchedCountry) {
      addMessages(
        question,
        getCountryResponse(matchedCountry),
        [
          "Eligibility",
          "Documents Required",
          "Admission Process",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // ELIGIBILITY
    // ----------------------------------------------

    if (
      q === "eligibility" ||
      q.includes("eligible") ||
      q.includes("qualification") ||
      q.includes("eligibility")
    ) {
      addMessages(
        question,
        "For MBBS admission, eligibility generally includes 12th Science with Physics, Chemistry and Biology, NEET qualification where applicable, and other requirements prescribed by the concerned authority, university or country. Requirements can vary by destination.",
        [
          "MBBS in India",
          "MBBS Abroad",
          "NEET Guidance",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // ADMISSION PROCESS
    // ----------------------------------------------

    if (
      q === "admission process" ||
      q.includes("admission process") ||
      q.includes("how admission works") ||
      q.includes("admission steps")
    ) {
      addMessages(
        question,
        "Our admission journey is designed to guide students and parents step-by-step. Select a step below to understand the process.",
        admissionOptions
      );
      return;
    }

    // ----------------------------------------------
    // ADMISSION STEP 1
    // ----------------------------------------------

    if (q.includes("step 1")) {
      addMessages(
        question,
        "Step 1 – Counselling: We understand the student's academic profile, NEET score, budget and career goals before suggesting suitable options.",
        [
          "Step 2 – Selection",
          "Step 3 – Application",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 2
    // ----------------------------------------------

    if (q.includes("step 2")) {
      addMessages(
        question,
        "Step 2 – Course & University Selection: Suitable colleges, universities and countries are shortlisted according to the student's profile and preferences.",
        [
          "Step 3 – Application",
          "Step 4 – Admission",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 3
    // ----------------------------------------------

    if (q.includes("step 3")) {
      addMessages(
        question,
        "Step 3 – Application: Required application forms and documents are prepared and submitted according to the university or applicable admission process.",
        [
          "Step 4 – Admission",
          "Step 5 – Documents & Visa",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 4
    // ----------------------------------------------

    if (q.includes("step 4")) {
      addMessages(
        question,
        "Step 4 – Admission: The admission process is completed according to the selected university and applicable regulations.",
        [
          "Step 5 – Documents & Visa",
          "Step 6 – Pre-Departure",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 5
    // ----------------------------------------------

    if (q.includes("step 5")) {
      addMessages(
        question,
        "Step 5 – Documentation & Visa Guidance: Students receive guidance regarding required documents and applicable visa procedures.",
        [
          "Step 6 – Pre-Departure",
          "Step 7 – Post-Admission",
          "Documents Required",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 6
    // ----------------------------------------------

    if (q.includes("step 6")) {
      addMessages(
        question,
        "Step 6 – Pre-Departure Guidance: Students and parents receive important information and guidance before travelling.",
        [
          "Step 7 – Post-Admission",
          "Free Counselling",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // STEP 7
    // ----------------------------------------------

    if (q.includes("step 7")) {
      addMessages(
        question,
        "Step 7 – Post-Admission Support: Kantule Edutech provides guidance and support during the student's admission journey.",
        [
          "Free Counselling",
          "WhatsApp Counsellor",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // DOCUMENTS
    // ----------------------------------------------

    if (
      q.includes("documents") ||
      q.includes("document required") ||
      q.includes("paperwork")
    ) {
      addMessages(
        question,
        "Documents may include:\n\n• 10th Marksheet\n• 12th Marksheet\n• NEET Score Card\n• NEET Admit Card\n• Passport\n• Birth Certificate\n• Passport-size Photographs\n• Medical Fitness Certificate\n• Other documents required by the university/country.\n\nExact requirements can vary by destination.",
        [
          "Admission Process",
          "MBBS in India",
          "MBBS Abroad",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // FREE COUNSELLING
    // ----------------------------------------------

    if (
      q.includes("free counselling") ||
      q.includes("free counseling") ||
      q.includes("counselling") ||
      q.includes("counseling") ||
      q.includes("guidance")
    ) {
      addMessages(
        question,
        "Absolutely. Kantule Edutech provides personalised MBBS admission counselling for students and parents. Guidance can cover your NEET profile, suitable course/university options, budget, documentation and admission journey.",
        contactOptions
      );
      return;
    }

    // ----------------------------------------------
    // SHARE NEET SCORE
    // ----------------------------------------------

    if (
      q.includes("share my neet score") ||
      q.includes("neet score")
    ) {
      addMessages(
        question,
        "Please share your NEET score with our counsellor along with your preferred option — MBBS in India or MBBS Abroad. Our team can then guide you based on your profile.",
        [
          "WhatsApp Counsellor",
          "MBBS in India",
          "MBBS Abroad",
          "Back to Main Menu",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // INDIA / ABROAD GENERAL
    // ----------------------------------------------

    if (
      q.includes("india or abroad") ||
      q.includes("which is better") ||
      q.includes("india vs abroad")
    ) {
      addMessages(
        question,
        "The right choice depends on your NEET profile, academic background, budget, preferred location, career goals and applicable admission requirements. Kantule Edutech can help you compare suitable options through personalised counselling.",
        [
          "MBBS in India",
          "MBBS Abroad",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // DURATION
    // ----------------------------------------------

    if (
      q.includes("duration") ||
      q.includes("how many years") ||
      q.includes("course duration")
    ) {
      addMessages(
        question,
        "MBBS in India is generally 5.5 years including internship, as applicable under current regulations. MBBS Abroad duration varies depending on the country and university.",
        [
          "MBBS in India",
          "MBBS Abroad",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // CAREER
    // ----------------------------------------------

    if (
      q.includes("career") ||
      q.includes("after mbbs") ||
      q.includes("career opportunities")
    ) {
      addMessages(
        question,
        "After completing medical education and fulfilling applicable licensing/regulatory requirements, students can pursue medical practice, postgraduate studies such as MD/MS, hospitals, healthcare organisations, research and academics.",
        [
          "MBBS in India",
          "MBBS Abroad",
          "Free Counselling",
        ]
      );
      return;
    }

    // ----------------------------------------------
    // CONTACT
    // ----------------------------------------------

    if (
      q.includes("contact") ||
      q.includes("phone") ||
      q.includes("number") ||
      q.includes("call")
    ) {
      addMessages(
        question,
        "You can contact Kantule Edutech for MBBS admission guidance through phone or WhatsApp.",
        contactOptions
      );
      return;
    }

    // ----------------------------------------------
    // GREETINGS
    // ----------------------------------------------

    if (
      q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q.includes("good morning") ||
      q.includes("good afternoon")
    ) {
      addMessages(
        question,
        "Hello! 👋 How can I help you with your MBBS admission journey?",
        mainOptions
      );
      return;
    }

    // ----------------------------------------------
    // DEFAULT RESPONSE
    // ----------------------------------------------

    addMessages(
      question,
      "I can help you with MBBS admissions in India and abroad, NEET guidance, eligibility, admission process, documents, university selection and counselling. Please select an option below or ask your question in simple words.",
      mainOptions
    );
  };

  // --------------------------------------------------
  // SEND MESSAGE
  // --------------------------------------------------

  const sendMessage = () => {
    const question = input.trim();

    if (!question || isTyping) return;

    setInput("");
    setIsTyping(true);

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: question,
      },
    ]);

    setTimeout(() => {
      setIsTyping(false);
      processQuestion(question);
    }, 600);
  };

  // --------------------------------------------------
  // ENTER KEY
  // --------------------------------------------------

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // --------------------------------------------------
  // RESET
  // --------------------------------------------------

  const resetChat = () => {
    setMessages([
      {
        id: Date.now(),
        type: "bot",
        text: "Hello! 👋 Welcome to Kantule Edutech.",
      },
      {
        id: Date.now() + 1,
        type: "bot",
        text: "I’m your MBBS Admission Assistant. How can I help you today?",
        options: mainOptions,
      },
    ]);

    setInput("");
  };

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
      ====================================================== */}

      {isOpen && (
        <div
          className="
            fixed
            right-5
            bottom-[114px]
            z-50
            flex
            w-[380px]
            max-w-[calc(100vw-24px)]
            flex-col
            overflow-hidden
            rounded-[22px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(15,23,42,0.25)]
            sm:right-4
            sm:bottom-[104px]
          "
          style={{
            height: "min(650px, calc(100vh - 130px))",
          }}
        >
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-gradient-to-r
              from-[#073B78]
              to-[#078FC9]
              px-4
              py-3.5
              text-white
            "
          >
            <div className="flex min-w-0 items-center gap-3">
              {/* BOT ICON */}

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#078FC9]
                  shadow-sm
                "
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 3C7.03 3 3 6.58 3 11c0 2.14.91 4.08 2.42 5.49L5 21l4.77-2.19c.71.19 1.46.29 2.23.29 4.97 0 9-3.58 9-8S16.97 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8 11h.01M12 11h.01M16 11h.01"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="truncate text-[14px] font-bold">
                  Kantule Edutech
                </p>

                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-400" />

                  <span className="text-[10px] text-white/85">
                    Online • MBBS Admission Assistant
                  </span>
                </div>
              </div>
            </div>

            {/* HEADER ACTIONS */}

            <div className="flex items-center gap-1">
              {/* RESET */}

              <button
                type="button"
                onClick={resetChat}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Reset chat"
                title="Start new chat"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12a9 9 0 1 0 3-6.7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M3 4v5h5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* CLOSE */}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  text-white/80
                  transition
                  hover:bg-white/10
                  hover:text-white
                "
                aria-label="Close chatbot"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 6l12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* =================================================
              MESSAGES
          ================================================== */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              bg-[#F7FAFC]
              px-3
              py-4
            "
          >
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id}>
                  <div
                    className={`flex ${
                      message.type === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`
                        max-w-[82%]
                        whitespace-pre-line
                        rounded-2xl
                        px-3.5
                        py-2.5
                        text-[12px]
                        leading-[1.55]
                        ${
                          message.type === "user"
                            ? "rounded-br-md bg-[#078FC9] text-white"
                            : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
                        }
                      `}
                    >
                      {message.text}
                    </div>
                  </div>

                  {/* =================================================
                      OPTIONS
                  ================================================== */}

                  {message.type === "bot" &&
                    message.options &&
                    message.options.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5 pl-1">
                        {message.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleOption(option)}
                            disabled={isTyping}
                            className="
                              rounded-full
                              border
                              border-[#B7DDEC]
                              bg-white
                              px-3
                              py-1.5
                              text-[10.5px]
                              font-semibold
                              text-[#087DAF]
                              transition
                              hover:border-[#078FC9]
                              hover:bg-[#EFFAFF]
                              active:scale-[0.97]
                              disabled:cursor-not-allowed
                              disabled:opacity-50
                            "
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                </div>
              ))}

              {/* =================================================
                  TYPING INDICATOR
              ================================================== */}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="
                      rounded-2xl
                      rounded-bl-md
                      border
                      border-slate-100
                      bg-white
                      px-4
                      py-3
                      shadow-sm
                    "
                  >
                    <div className="flex items-center gap-1">
                      <span className="typing-dot" />
                      <span className="typing-dot delay-1" />
                      <span className="typing-dot delay-2" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* =================================================
              INPUT
          ================================================== */}

          <div className="shrink-0 border-t border-slate-200 bg-white p-3">
            <div
              className="
                flex
                min-h-[48px]
                items-center
                gap-2
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-2
                pl-4
                transition
                focus-within:border-[#078FC9]
                focus-within:bg-white
                focus-within:shadow-[0_0_0_3px_rgba(7,143,201,0.08)]
              "
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isTyping}
                placeholder="Ask about MBBS admissions..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  py-2
                  text-[12px]
                  text-slate-700
                  outline-none
                  placeholder:text-slate-400
                  disabled:opacity-60
                "
              />

              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isTyping}
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#078FC9]
                  text-white
                  shadow-sm
                  transition
                  hover:bg-[#057CAB]
                  hover:scale-105
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-35
                  disabled:hover:scale-100
                "
                aria-label="Send message"
                title="Send message"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 2 11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="m22 2-7 20-4-9-9-4 20-7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-2 text-center text-[9px] text-slate-400">
              Kantule Edutech • Medical Education Guidance
            </p>
          </div>
        </div>
      )}

      {/* =====================================================
          CHATBOT FLOATING BUTTON + TOOLTIP
      ====================================================== */}

      <div
        className="
          fixed
          bottom-[88px]
          right-[clamp(16px,2.5%,20px)]
          z-40
          flex
          items-center
          gap-3
        "
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => {
          if (!isOpen) {
            setShowTooltip(false);
          }
        }}
      >
        {/* TOOLTIP */}

        {showTooltip && !isOpen && (
          <div
            className="
              rounded-2xl
              border
              border-slate-100
              bg-white
              px-4
              py-3
              shadow-[0_10px_35px_rgba(15,23,42,0.14)]
            "
            style={{
              animation:
                "chatTooltipIn 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <p className="whitespace-nowrap text-[12px] font-bold text-slate-900">
              Need MBBS Guidance?
            </p>

            <p className="mt-0.5 whitespace-nowrap text-[10px] text-slate-500">
              Chat with our admission assistant
            </p>
          </div>
        )}

        {/* CHAT BUTTON */}

        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowTooltip(false);
          }}
          onMouseEnter={() => {
            if (!isOpen) {
              setShowTooltip(true);
            }
          }}
          aria-label={
            isOpen
              ? "Close Kantule Edutech chatbot"
              : "Open Kantule Edutech chatbot"
          }
          title="Kantule Edutech Admission Assistant"
          className="
            relative
            flex
            h-[60px]
            w-[60px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-[#078FC9]
            to-[#073B78]
            text-white
            shadow-[0_12px_35px_rgba(7,143,201,0.32)]
            transition-all
            duration-300
            hover:scale-110
            active:scale-95
          "
        >
          {/* ONLINE DOT */}

          <span
            className="
              absolute
              right-0
              top-0
              h-3
              w-3
              rounded-full
              border-2
              border-white
              bg-green-500
            "
          />

          {isOpen ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="29"
              height="29"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5c-1.15 0-2.24-.26-3.21-.72L5 20l1.72-4.29A7.46 7.46 0 0 1 5 11.5 7.5 7.5 0 1 1 20 11.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style>{`
        @keyframes chatTooltipIn {
          from {
            opacity: 0;
            transform: translateX(12px) scale(0.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .typing-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #078fc9;
          animation: chatbotTyping 1.2s infinite ease-in-out;
        }

        .delay-1 {
          animation-delay: 0.15s;
        }

        .delay-2 {
          animation-delay: 0.3s;
        }

        @keyframes chatbotTyping {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        @media (max-width: 640px) {
          .chatbot-mobile-window {
            right: 12px;
            left: 12px;
            width: auto;
          }
        }
      `}</style>
    </>
  );
};

export default ChatBot;