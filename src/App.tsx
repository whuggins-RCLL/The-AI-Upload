import React from 'react';
import { BookOpen, Headphones, Info, Archive, Bot, CheckCircle2, Landmark } from 'lucide-react';

const proTips = [
  { date: "Apr 17, 2026", title: "AI in Gmail", link: "https://drive.google.com/file/d/1MC6CGVQ6KInNlbCioSyycitNcwSq-JtH/view?usp=drive_link" },
  { date: "Apr 10, 2026", title: "Leveraging the open-source model: Gemma 4", link: "https://drive.google.com/file/d/1DW7nro67sjJTBp-UgfiKfURcE4Qc-iD2/view?usp=drive_link" },
  { date: "Apr 3, 2026", title: "Chat GPT Deep Research Feature", link: "https://drive.google.com/drive/folders/16DZ23ckPwDDj_2ABK6X5nqkZkT5V4jf4" },
  { date: "Mar 27, 2026", title: "Context Engineering", link: "https://drive.google.com/drive/folders/1PzlhwmuJaGSZYYJ6K9Z94ID-KkbGrcce" },
  { date: "Mar 20, 2026", title: "Codex and Claude Code Introduction", link: "https://drive.google.com/drive/folders/1PzlhwmuJaGSZYYJ6K9Z94ID-KkbGrcce" },
  { date: "Mar 13, 2026", title: "AI in Figma", link: "https://drive.google.com/drive/folders/1PzlhwmuJaGSZYYJ6K9Z94ID-KkbGrcce" },
  { date: "Mar 6, 2026", title: "From Pencil sketch to live website", link: "https://drive.google.com/drive/folders/1PzlhwmuJaGSZYYJ6K9Z94ID-KkbGrcce" },
  { date: "Feb 27, 2026", title: "Google Ai Mode", link: "https://drive.google.com/drive/folders/1Pn0eR0xw2mTD7hqgfJax3blD-Gey07my" },
  { date: "Feb 20, 2026", title: "Vibecoding post steps", link: "https://drive.google.com/drive/folders/1Pn0eR0xw2mTD7hqgfJax3blD-Gey07my" },
  { date: "Feb 13, 2026", title: "Google Vids Updates", link: "https://drive.google.com/drive/folders/1Pn0eR0xw2mTD7hqgfJax3blD-Gey07my" },
  { date: "Feb 6, 2026", title: "Hallucinations are a Feature and Not a Bug", link: "https://drive.google.com/drive/folders/1Pn0eR0xw2mTD7hqgfJax3blD-Gey07my" },
  { date: "Jan 30, 2026", title: "Antropic CoWork", link: "https://drive.google.com/drive/folders/1GOBCFxf3X7Y_hmOG1ogvq71iBfZZks3U" },
  { date: "Jan 23, 2026", title: "Auditing Vibe Code (that originated in Google AI Studio)", link: "https://drive.google.com/drive/folders/1GOBCFxf3X7Y_hmOG1ogvq71iBfZZks3U" },
  { date: "Jan 16, 2026", title: "Website app designs with Google Stitch, Figma, Uizard", link: "https://drive.google.com/drive/folders/1GOBCFxf3X7Y_hmOG1ogvq71iBfZZks3U" },
  { date: "Jan 9, 2026", title: "Using AI to generate scripts to run in your console browser", link: "https://drive.google.com/drive/folders/1GOBCFxf3X7Y_hmOG1ogvq71iBfZZks3U" },
  { date: "Dec 12, 2025", title: "How to use Google Mixboard/Nano Banana for Generating Presentation Images", link: "https://drive.google.com/drive/folders/1IPPn_Opof12Z_0tcl8TSZsjXvAKrtZpS" },
  { date: "Dec 5, 2025", title: "Prompting Technique: What Questions Should I be Asking", link: "https://drive.google.com/drive/folders/1IPPn_Opof12Z_0tcl8TSZsjXvAKrtZpS" },
  { date: "Nov 21, 2025", title: "Build your own Ai assistant. An introduction to Kaggle and Google AI Studio.", link: "https://drive.google.com/drive/folders/10j58a5tE6-YeC9CG63ffl_4tTt75sE-F" }
];

const aiTools = [
  "Canva Magic Studio",
  "Notebook LM",
  "Gemini Deep Research",
  "Chat GPT Deep Research",
  "Chat GPT 5 - Thinking",
  "Chat GPT ImageGen",
  "Perplexity"
];

export default function App() {
  return (
    <div className="antialiased min-h-screen bg-white text-gray-700 font-sans">
      {/* Hero Section */}
      <div className="flex justify-center w-full">
        <div 
          className="relative w-full h-[350px] sm:h-[400px] lg:h-[450px] overflow-hidden mb-16 shadow-2xl flex items-center rounded-b-3xl sm:rounded-3xl sm:mt-6 sm:mx-6 lg:mx-8 bg-[#8C1515]" 
          style={{ width: 'auto', flexGrow: 1, maxWidth: '1400px' }}
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E2D29] via-[#8C1515] to-[#53565A] opacity-90"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] rounded-full bg-[#8C1515] mix-blend-screen blur-[120px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[80%] rounded-full bg-[#FFFFFF] mix-blend-overlay blur-[150px] opacity-20"></div>
            <div className="absolute top-[20%] right-[20%] w-[40%] h-[50%] rounded-full bg-[#D4AF37] mix-blend-screen blur-[100px] opacity-30"></div>
            <div className="absolute bottom-[10%] left-[30%] w-[50%] h-[60%] rounded-full bg-[#53565A] mix-blend-multiply blur-[100px] opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E2D29]/90 via-[#2E2D29]/60 to-transparent w-3/4 md:w-2/3"></div>
            <div className="absolute top-[10%] right-[5%] w-[35%] h-[85%] bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] transform rotate-3 shadow-2xl"></div>
            <div className="absolute bottom-[-15%] right-[20%] w-[45%] h-[70%] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[40px] transform -rotate-6 shadow-2xl"></div>
            <div className="absolute top-[25%] left-[55%] w-[30%] h-[60%] bg-[#8C1515]/10 backdrop-blur-xl border border-white/5 rounded-[40px] transform rotate-12 shadow-xl"></div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
          </div>
          <div className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-4xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-4 drop-shadow-lg">
              The AI Upload: A Weekly Digest
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md font-light">
              New Issues Every Friday (minus Stanford Holidays and Closures)
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <main className="max-w-5xl mx-auto text-center">
          
          {/* About Section */}
          <section className="mb-24 max-w-4xl mx-auto">
            <div className="bg-[#FAF9F6] rounded-3xl p-8 md:p-12 border border-gray-200/60 shadow-sm relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-stanford-red"></div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-left">
                <div className="shrink-0 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <Landmark className="w-10 h-10 text-stanford-red" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-3">About The AI Upload</h2>
                  <p className="text-lg text-gray-800 leading-relaxed mb-3">
                    This digest of AI news is created by the <strong className="text-gray-900 font-semibold">Robert Crown Law Library</strong> for the Stanford Law School Community. 
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The news is hand-selected by library staff, with AI assistance for summaries and tutorials. New issues are posted weekly on Fridays, and each edition includes a Notebook LM-powered podcast and a Video Explainer.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Issue Section */}
          <section className="mb-24">
            <div className="flex flex-col items-center mb-10">
              <h2 className="font-serif text-3xl font-semibold text-gray-900">Latest Issue</h2>
              <div className="w-12 h-1 bg-stanford-red mt-4 rounded-full"></div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-left">
                {/* Cover Image */}
                <div className="w-full md:w-1/2">
                  <div className="relative w-full rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                    <img 
                      src="https://i.postimg.cc/X7ppTpfF/Screenshot-2026-04-16-at-1-06-47-PM.png" 
                      alt="This Week's AI Upload Cover" 
                      className="w-full h-auto" 
                      onError={(e) => {
                        e.currentTarget.onerror = null; 
                        e.currentTarget.src = 'https://placehold.co/600x400/EEEEEE/374151?text=Latest+Issue+Cover';
                      }} 
                    />
                  </div>
                </div>
                {/* Content, Buttons and Video */}
                <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif font-medium text-gray-900">This Week's Highlights</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dive into the latest developments in AI law, including new copyright rulings, updates to generative models, and practical tutorials for legal research.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row w-full gap-3">
                    <a href="https://drive.google.com/file/d/1MC6CGVQ6KInNlbCioSyycitNcwSq-JtH/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-1/2 text-center bg-stanford-red hover:bg-stanford-red-hover text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm">
                      <BookOpen className="mr-2 h-5 w-5" /> Read Issue
                    </a>
                    <a href="https://drive.google.com/file/d/19GbIf9L-mRdNjwbGGPyFBSQIrfAromtZ/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-1/2 text-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-xl transition-all shadow-sm">
                      <Headphones className="mr-2 h-5 w-5 text-gray-500" /> Podcast Edition
                    </a>
                  </div>
                  {/* Embedded Video */}
                  <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-inner bg-gray-50 border border-gray-100">
                    <iframe src="https://drive.google.com/file/d/1tRpubCjf64dN1Ouvy4_Q4t67lUCeSYRy/preview" width="100%" height="100%" allow="autoplay" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Citation Note */}
          <section className="mb-24">
            <div className="bg-[#FAF9F6] border-l-4 border-stanford-red p-6 sm:p-8 text-left max-w-3xl mx-auto rounded-r-2xl shadow-sm">
              <div className="flex items-start">
                <Info className="text-stanford-red mr-4 h-6 w-6 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-lg">A Note on Citations</p>
                  <p className="text-gray-600 leading-relaxed">
                    This newsletter provides summaries and links to articles. If using any of this information for research, please cite the direct article versus citing The AI Upload.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Archive Section */}
          <section className="mb-24">
            <div className="flex flex-col items-center mb-10">
              <h2 className="font-serif text-3xl font-semibold text-gray-900">Explore the Archive</h2>
              <div className="w-12 h-1 bg-stanford-red mt-4 rounded-full"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://drive.google.com/drive/folders/1QZNAM2D0EIirVbPW_M01F4YJ1PSBaT8w?usp=sharing" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-xl transition-all shadow-sm w-full sm:w-auto">
                <Archive className="mr-2 h-5 w-5 text-gray-500" /> View All Past Issues
              </a>
              <a href="https://drive.google.com/drive/folders/1sSvzMCVuavYRUICvtuBREz2GdP3ox_p9?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-medium py-3 px-8 rounded-xl transition-all shadow-sm w-full sm:w-auto">
                <Headphones className="mr-2 h-5 w-5 text-gray-500" /> All Podcast & Video Editions
              </a>
            </div>
          </section>

          {/* Pro-Tips Section */}
          <section className="mb-24 text-left">
            <div className="flex flex-col items-center mb-10">
              <h2 className="font-serif text-3xl font-semibold text-gray-900 text-center">Pro-Tip Highlights</h2>
              <div className="w-12 h-1 bg-stanford-red mt-4 rounded-full"></div>
            </div>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
              Each newsletter has a "Pro-tip" topic. Click on a pro-tip below to access it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {proTips.map((tip, idx) => (
                <a key={idx} href={tip.link} target="_blank" rel="noreferrer" className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 group flex flex-col">
                  <span className="font-serif text-sm text-stanford-red mb-3 font-medium tracking-wide uppercase">{tip.date}</span>
                  <p className="font-medium text-gray-800 group-hover:text-stanford-red transition-colors leading-snug">{tip.title}</p>
                </a>
              ))}
            </div>
          </section>

          {/* AI Transparency Statement */}
          <section className="bg-[#FAF9F6] border border-gray-100 rounded-3xl p-8 sm:p-12 text-left shadow-sm mb-12">
            <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Bot className="mr-3 text-stanford-red h-7 w-7" /> AI Transparency Statement
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg max-w-3xl">
              The AI Upload is created using the following tools. Articles are searched and manually selected by humans.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 list-inside text-gray-700">
              {aiTools.map((tool, idx) => (
                <li key={idx} className="flex items-center bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm">
                  <CheckCircle2 className="text-gray-400 mr-3 h-5 w-5 shrink-0" />
                  <span className="font-medium">{tool}</span>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
