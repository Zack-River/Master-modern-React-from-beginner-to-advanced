import { useState, useEffect } from "react";

const questions = [
  {
    id: 6,
    question: "من هو أبو النبي إسماعيل عليه السلام؟",
    options: ["نوح", "إبراهيم", "هارون"],
    answer: "إبراهيم",
  },
  {
    id: 7,
    question: "ما هو اسم والد النبي يوسف عليه السلام؟",
    options: ["إسحاق", "يعقوب", "إبراهيم"],
    answer: "يعقوب",
  },
  {
    id: 8,
    question: "كم عاماً مكث نوح عليه السلام يدعو قومه؟",
    options: ["950 عاماً", "500 عاماً", "700 عاماً"],
    answer: "950 عاماً",
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%" }}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%" }}>
    <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" />
    <polygon points="10,8 16,12 10,16" fill="white" />
  </svg>
);

const BulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%" }}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2 14H10v-1h4v1zm0-2H10v-1h4v1zm-2-4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);

export default function IslamicQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  const q = questions[currentQ];

  useEffect(() => {
    if (revealed || gameOver) return;
    if (timeLeft <= 0) {
      setRevealed(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, revealed, gameOver]);

  const handleSelect = (opt) => {
    if (revealed) return;
    setSelected(opt);
    setRevealed(true);
    if (opt === q.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 >= questions.length) {
      setGameOver(true);
    } else {
      setCurrentQ((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setTimeLeft(30);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setTimeLeft(30);
    setGameOver(false);
  };

  const getOptionStyle = (opt) => {
    const base = {
      width: "100%",
      padding: "18px 24px",
      borderRadius: "16px",
      border: "3px solid #1a3a6e",
      background: "linear-gradient(135deg, #f5f0e8 0%, #ede8dc 100%)",
      fontSize: "clamp(22px, 4vw, 32px)",
      fontFamily: "'Amiri', 'Scheherazade New', serif",
      color: "#1a1a2e",
      cursor: revealed ? "default" : "pointer",
      textAlign: "center",
      direction: "rtl",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(26,58,110,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
      position: "relative",
      overflow: "hidden",
    };

    if (!revealed) return base;

    if (opt === q.answer) {
      return {
        ...base,
        background: "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",
        border: "3px solid #1b5e20",
        color: "white",
        boxShadow: "0 6px 20px rgba(76,175,80,0.4)",
      };
    }
    if (opt === selected && opt !== q.answer) {
      return {
        ...base,
        background: "linear-gradient(135deg, #f44336 0%, #c62828 100%)",
        border: "3px solid #b71c1c",
        color: "white",
        boxShadow: "0 6px 20px rgba(244,67,54,0.4)",
      };
    }
    return { ...base, opacity: 0.6 };
  };

  // Decorative corner motifs
  const CornerMotif = ({ style }) => (
    <div style={{ position: "absolute", width: 60, height: 60, ...style }}>
      <svg viewBox="0 0 60 60" fill="none">
        <path d="M0 0 Q30 0 30 30 Q30 0 60 0" stroke="#c8a84b" strokeWidth="2" fill="none" />
        <circle cx="10" cy="10" r="4" fill="#c8a84b" opacity="0.6" />
        <circle cx="50" cy="10" r="3" fill="#c8a84b" opacity="0.4" />
        <path d="M5 30 Q15 20 30 25 Q45 30 55 20" stroke="#c8a84b" strokeWidth="1.5" fill="none" opacity="0.5" />
      </svg>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        body { margin: 0; }
        
        .quiz-container {
          min-height: 100vh;
          background: linear-gradient(160deg, #0d1b4b 0%, #1a3a6e 30%, #0d2a5e 60%, #061530 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          position: relative;
          overflow: hidden;
          font-family: 'Amiri', serif;
        }
        
        .bg-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 20%, rgba(200,168,75,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(200,168,75,0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(26,58,110,0.3) 0%, transparent 70%);
          pointer-events: none;
        }
        
        .geometric-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }
        
        .geo-circle {
          position: absolute;
          border: 1px solid rgba(200,168,75,0.15);
          border-radius: 50%;
        }
        
        .header-bar {
          width: 100%;
          max-width: 780px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          direction: rtl;
        }
        
        .question-num-badge {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #c0392b, #962d22);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: bold;
          color: white;
          border: 3px solid rgba(255,255,255,0.3);
          box-shadow: 0 4px 16px rgba(192,57,43,0.5);
          font-family: 'Amiri', serif;
        }
        
        .score-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(200,168,75,0.15);
          border: 2px solid rgba(200,168,75,0.4);
          border-radius: 30px;
          padding: 8px 18px;
          color: #f0d080;
          font-size: 20px;
          font-family: 'Amiri', serif;
        }
        
        .shield-badge {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #1a3a6e, #0d2255);
          border: 3px solid #c8a84b;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(200,168,75,0.3);
          padding: 10px;
          color: #c8a84b;
        }
        
        .question-card {
          width: 100%;
          max-width: 780px;
          background: linear-gradient(135deg, #faf7f0 0%, #f0ead8 100%);
          border-radius: 24px;
          border: 3px solid #c8a84b;
          padding: 40px 48px;
          text-align: center;
          direction: rtl;
          margin-bottom: 20px;
          position: relative;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(200,168,75,0.2);
        }
        
        .question-text {
          font-size: clamp(26px, 5vw, 40px);
          font-family: 'Amiri', serif;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.5;
        }
        
        .options-container {
          width: 100%;
          max-width: 780px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          direction: rtl;
          margin-bottom: 20px;
        }
        
        .option-btn {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        
        .option-btn:hover:not(:disabled) {
          transform: scale(1.01);
        }
        
        .timer-bar-container {
          width: 100%;
          max-width: 780px;
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
          height: 10px;
          overflow: hidden;
          margin-bottom: 16px;
        }
        
        .timer-bar {
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(90deg, #c8a84b, #f0d080);
          transition: width 1s linear;
        }
        
        .next-btn {
          background: linear-gradient(135deg, #c8a84b 0%, #a8882b 100%);
          color: #1a1a2e;
          border: none;
          border-radius: 16px;
          padding: 16px 48px;
          font-size: 24px;
          font-family: 'Amiri', serif;
          font-weight: 700;
          cursor: pointer;
          direction: rtl;
          box-shadow: 0 4px 16px rgba(200,168,75,0.4);
          transition: transform 0.15s ease;
        }
        
        .next-btn:hover { transform: scale(1.03); }
        
        .play-icon-side {
          width: 44px;
          height: 44px;
          color: white;
          opacity: 0.7;
        }
        
        .brand-side {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          letter-spacing: 3px;
          font-family: 'Amiri', serif;
        }
        
        .brand-side-right {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          color: rgba(200,168,75,0.6);
          font-size: 13px;
          letter-spacing: 2px;
          writing-mode: horizontal-tb;
        }
        
        .gameover-card {
          text-align: center;
          color: white;
          direction: rtl;
        }
        
        .divider-line {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c8a84b, transparent);
          margin: 16px auto;
        }
      `}</style>

      <div className="quiz-container">
        <div className="bg-pattern" />
        <div className="geometric-bg">
          <div className="geo-circle" style={{ width: 400, height: 400, top: -100, left: -100 }} />
          <div className="geo-circle" style={{ width: 300, height: 300, bottom: -80, right: -80 }} />
          <div className="geo-circle" style={{ width: 200, height: 200, top: "40%", right: "5%" }} />
          <div className="geo-circle" style={{ width: 600, height: 600, top: "10%", left: "20%", opacity: 0.4 }} />
        </div>

        {/* Side brand labels */}
        <div className="brand-side">alghazArabii</div>
        <div className="brand-side-right" style={{
          position: "fixed", right: 20, top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          color: "rgba(200,168,75,0.6)", fontSize: 13, letterSpacing: 2,
          fontFamily: "Amiri, serif"
        }}>
          الغاز بالعربي
        </div>

        {!gameOver ? (
          <>
            {/* Header */}
            <div className="header-bar">
              <div className="shield-badge">
                <BulbIcon />
              </div>

              <div className="score-badge">
                <span>⭐</span>
                <span>{score} / {questions.length}</span>
              </div>

              <div className="question-num-badge">
                {String(q.id).padStart(2, "0")}
              </div>
            </div>

            {/* Timer */}
            <div className="timer-bar-container" style={{ maxWidth: 780 }}>
              <div className="timer-bar" style={{ width: `${(timeLeft / 30) * 100}%` }} />
            </div>

            {/* Question Card */}
            <div className="question-card">
              <CornerMotif style={{ top: 8, right: 8 }} />
              <CornerMotif style={{ bottom: 8, left: 8, transform: "rotate(180deg)" }} />
              <p className="question-text">{q.question}</p>
              <div className="divider-line" />
            </div>

            {/* Options */}
            <div className="options-container">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  className="option-btn"
                  style={getOptionStyle(opt)}
                  onClick={() => handleSelect(opt)}
                  disabled={revealed}
                >
                  {opt}
                  {revealed && opt === q.answer && (
                    <span style={{ marginRight: 12, fontSize: 20 }}>✓</span>
                  )}
                  {revealed && opt === selected && opt !== q.answer && (
                    <span style={{ marginRight: 12, fontSize: 20 }}>✗</span>
                  )}
                </button>
              ))}
            </div>

            {/* Next button */}
            {revealed && (
              <button className="next-btn" onClick={handleNext}>
                {currentQ + 1 >= questions.length ? "النتيجة النهائية" : "السؤال التالي ←"}
              </button>
            )}
          </>
        ) : (
          <div className="gameover-card">
            <div style={{
              background: "linear-gradient(135deg, #faf7f0, #f0ead8)",
              borderRadius: 24,
              border: "3px solid #c8a84b",
              padding: "48px 64px",
              maxWidth: 500,
              margin: "0 auto",
            }}>
              <div style={{ fontSize: 60, marginBottom: 12 }}>🌙</div>
              <h2 style={{ fontFamily: "Amiri, serif", color: "#1a1a2e", fontSize: 36, direction: "rtl" }}>
                انتهت المسابقة!
              </h2>
              <div className="divider-line" />
              <p style={{ fontFamily: "Amiri, serif", color: "#3a2a0e", fontSize: 28, direction: "rtl", marginBottom: 8 }}>
                نتيجتك
              </p>
              <p style={{ fontFamily: "Amiri, serif", color: "#1a3a6e", fontSize: 52, fontWeight: 700, marginBottom: 16 }}>
                {score} / {questions.length}
              </p>
              <p style={{ fontFamily: "Amiri, serif", color: "#5a4a2e", fontSize: 22, direction: "rtl", marginBottom: 24 }}>
                {score === questions.length ? "ممتاز! أحسنت 🌟" : score >= 2 ? "جيد جداً! 👍" : "حاول مرة أخرى 💪"}
              </p>
              <button className="next-btn" onClick={handleRestart}>
                إعادة اللعب 🔄
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
