const Index = () => {
  return (
    <>
      <style>{`
        /* ================= Base / Reset ================= */
        *,*::before,*::after{box-sizing:border-box}
        html,body{height:100%}
        body{margin:0;background:#070b1a;color:#e5e7eb;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6}
        a{color:inherit;text-decoration:none}
        img{max-width:100%;display:block}
        :root{
          --bg:#070b1a;
          --panel:#0b1124;
          --ring:rgba(255,255,255,.08);
          --muted:#9ca3af;
          --brand:#2F7CF6;
          --brand-2:#7FB2FF;
          --ok:#34d399;
        }

        .container{width:100%;max-width:1200px;margin:0 auto;padding:0 24px}
        section{padding:84px 0}
        .row{display:grid;gap:28px}
        @media(min-width:992px){.row-2{grid-template-columns:1fr 1fr}.row-3{grid-template-columns:repeat(3,1fr)}.row-4{grid-template-columns:repeat(4,1fr)}.row-6{grid-template-columns:repeat(6,1fr)}}

        /* ================= Ambient BG ================= */
        #bg-canvas{position:fixed;inset:0;z-index:-3;filter:saturate(115%) blur(.6px)}
        .grid-tex{position:fixed;inset:0;z-index:-4;opacity:.14;background-size:32px 32px;
          background-image:linear-gradient(transparent 31px,rgba(148,163,184,.12) 1px),linear-gradient(90deg,transparent 31px,rgba(148,163,184,.12) 1px)}

        /* ================= Header / Nav ================= */
        header.sticky{position:sticky;top:0;z-index:30;backdrop-filter:blur(10px);background:rgba(7,11,26,.6);border-bottom:1px solid var(--ring)}
        .nav{display:none;gap:26px;font-size:14px}
        @media(min-width:980px){.nav{display:flex}.mobile{display:none}}
        .logo-badge{display:flex;align-items:center;gap:10px}
        .logo-img{height:28px;width:auto;filter: drop-shadow(0 0 20px rgba(47,124,246,.25));}

        /* ================= Buttons ================= */
        .btn{display:inline-flex;align-items:center;gap:10px;padding:12px 18px;border-radius:999px;font-weight:600;font-size:14px}
        .btn-primary{background:linear-gradient(90deg,var(--brand),var(--brand-2));color:#0a0f1f;box-shadow:0 0 0 1px rgba(255,255,255,.18) inset,0 10px 40px rgba(47,124,246,.35)}
        .btn-ghost{border:1px solid var(--ring);color:#d1d5db}
        .btn-outline{border:1px solid rgba(221,178,72,.45);color:#fcd34d;background:rgba(251,191,36,.06);box-shadow:0 0 0 1px rgba(251,191,36,.18) inset}

        /* ================= Typography ================= */
        .eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
        .h1{font-size:clamp(34px,4.2vw,56px);line-height:1.08;font-weight:780;letter-spacing:-.02em;background:linear-gradient(180deg,#f4f7ff,#c4d4ff 55%,#a6c2ff 90%);-webkit-background-clip:text;background-clip:text;color:transparent}
        .h2{font-size:clamp(26px,3vw,36px);font-weight:740;letter-spacing:-.02em;color:#f8fafc}
        .h3{font-size:22px;font-weight:700;color:#f3f4f6}
        .muted{color:var(--muted)}

        /* ================= Cards & Panels ================= */
        .panel{border:1px solid var(--ring);background:rgba(255,255,255,.03);border-radius:22px;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}
        .panel.pad{padding:22px}
        .glass{background:rgba(255,255,255,.04);backdrop-filter:blur(6px)}
        .tile{transition:transform .25s ease, background .25s ease, box-shadow .25s ease}
        .tile:hover{transform:translateY(-4px);background:rgba(255,255,255,.06);box-shadow:0 12px 40px rgba(0,0,0,.35)}

        /* ================= Hero ================= */
        .hero{padding:108px 0 84px}
        .badge{display:inline-flex;gap:8px;align-items:center;padding:7px 12px;border-radius:999px;border:1px solid rgba(155,167,255,.35);
          background:rgba(155,167,255,.08);color:#c7ceff;font-size:12px}
        .badge .icon{width:16px;height:16px;display:inline-block}
        .hero-media{border-radius:26px;padding:1px;background:linear-gradient(135deg,#1f2937,#0b1020);
          box-shadow:0 24px 60px rgba(0,0,0,.45),inset 0 0 0 1px rgba(255,255,255,.06)}
        .hero-media .inner{border-radius:26px;background:#0b1124}
        .media-box{height:360px;border-radius:26px;display:grid;place-items:center;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,0));color:#9aa7b5}
      `}</style>
      
      <canvas id="bg-canvas"></canvas>
      <div className="grid-tex" aria-hidden="true"></div>

      {/* ================= NAV ================= */}
      <header className="sticky">
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'68px'}}>
          <div className="logo-badge">
            <img src="/lovable-uploads/05375a21-d0d5-4703-993c-f328ac140ce1.png" alt="Evilo" className="logo-img" />
            <span style={{fontWeight:600}}>Evilo Business Solutions</span>
          </div>
          
          <nav className="nav">
            <a href="#software">Software</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          
          <div style={{display:'flex',gap:'12px'}}>
            <a href="#" className="btn btn-ghost">Login Portal</a>
            <a href="#contact" className="btn btn-primary">Book Demo Meeting</a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="container">
          <div className="row row-2" style={{alignItems:'center'}}>
            <div>
              <div className="badge">
                <svg className="icon" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L10.4 5.6L16 8L10.4 10.4L8 16L5.6 10.4L0 8L5.6 5.6L8 0Z" fill="currentColor"/>
                </svg>
                AI-Powered Scheduling & Operations
              </div>
              
              <h1 className="h1" style={{marginBottom:'24px'}}>
                Evilo Software™<br/>
                <span style={{fontSize:'0.7em'}}>Automated Booking</span><br/>
                <span style={{fontSize:'0.7em',color:'#2F7CF6'}}>& Workflow Operations</span>
              </h1>
              
              <p className="muted" style={{marginBottom:'32px',fontSize:'18px',maxWidth:'600px'}}>
                Designed for clinics, industrial teams, and salons. Evilo's assistant 
                plugs into your website to handle client details, scheduling, follow-ups, 
                communication, and analytics. All plugged into our custom easy to use 
                dashboard.
              </p>

              <div style={{display:'flex',gap:'16px',marginBottom:'32px'}}>
                <a href="#contact" className="btn btn-primary">Book Demo Meeting</a>
                <a href="#" className="btn btn-ghost">Login Portal</a>
              </div>

              <div style={{display:'flex',gap:'24px',fontSize:'14px',color:'var(--muted)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                  <span style={{color:'var(--brand)'}}>⚡</span>
                  <span>Data secure & hosted locally</span>
                </div>
                <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                  <span style={{color:'var(--brand)'}}>🛡️</span>
                  <span>Enterprise grade security</span>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="inner">
                <div className="panel pad" style={{background:'rgba(255,255,255,.04)'}}>
                  <div style={{marginBottom:'24px'}}>
                    <h3 style={{fontSize:'24px',fontWeight:700,marginBottom:'8px'}}>Automated Customer Management</h3>
                    <p style={{fontSize:'18px',color:'#2F7CF6',marginBottom:'8px'}}>Solutions for the Salon Industry</p>
                    <p style={{fontSize:'14px',color:'var(--muted)'}}>
                      Integrated AI assistant handles onboarding, scheduling, management, follow ups 
                      and communication.
                    </p>
                  </div>
                  
                  <div style={{display:'flex',justifyContent:'center',marginBottom:'16px'}}>
                    <div style={{display:'flex',gap:'4px'}}>
                      <div style={{width:'8px',height:'8px',background:'#2F7CF6',borderRadius:'50%'}}></div>
                      <div style={{width:'8px',height:'8px',background:'rgba(47,124,246,0.5)',borderRadius:'50%'}}></div>
                      <div style={{width:'8px',height:'8px',background:'rgba(47,124,246,0.3)',borderRadius:'50%'}}></div>
                      <div style={{width:'8px',height:'8px',background:'rgba(47,124,246,0.2)',borderRadius:'50%'}}></div>
                      <div style={{width:'8px',height:'8px',background:'rgba(47,124,246,0.1)',borderRadius:'50%'}}></div>
                    </div>
                  </div>

                  <div className="media-box">
                    <div style={{textAlign:'center'}}>
                      <div style={{fontSize:'48px',marginBottom:'8px'}}>📊</div>
                      <p style={{fontSize:'14px',color:'var(--muted)'}}>Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections here as needed */}
      
      <script dangerouslySetInnerHTML={{__html: `
        // Add any JavaScript functionality here
        console.log('Evilo main page loaded');
      `}} />
    </>
  );
};

export default Index;