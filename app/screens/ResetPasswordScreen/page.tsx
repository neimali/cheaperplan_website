'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';


function getTokensFromUrl() {
  // Support both hash (#access_token=...) and query (?access_token=...)
  const fromHash = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.hash.replace(/^#/, '') : ''
  );
  const fromQuery = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  );

  const access_token =
    fromHash.get('access_token') || fromQuery.get('access_token') || '';
  const refresh_token =
    fromHash.get('refresh_token') || fromQuery.get('refresh_token') || '';

  const type = fromHash.get('type') || fromQuery.get('type') || '';
  const error = fromHash.get('error_description') || fromQuery.get('error_description') || '';

  return { access_token, refresh_token, type, error };
}

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>('');
  const [isError, setIsError] = useState(false);
  const [{ access_token, refresh_token, type, error }, setTokens] = useState(getTokensFromUrl());
  const [sessionReady, setSessionReady] = useState(false);


  // On mount, parse tokens and attempt to set session if tokens exist
  useEffect(() => {
    const t = getTokensFromUrl();
    setTokens(t);

    if (t.error) {
      setMsg(decodeURIComponent(t.error));
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    let canceled = false;

    async function ensureSession() {
      try {
        if (!supabase) {
          if (!canceled) {
            setMsg('Supabase configuration not properly set');
            setIsError(true);
          }
          return;
        }
        
        // If page is opened from Supabase recovery link, the session may already be set by the redirect
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session) {
          if (!canceled) setSessionReady(true);
          return;
        }
        // If not, try using tokens from URL to set the session
        if (access_token && refresh_token) {
          const { error: sErr } = await supabase.auth.setSession({
            access_token,
            refresh_token,
          });
          if (sErr) {
            throw sErr;
          }
          if (!canceled) setSessionReady(true);
        } else {
          // Neither existing session nor tokens — show hint
          if (!canceled) {
            setMsg('Invalid or expired reset link. Please request a new password reset email.');
            setIsError(true);
          }
        }
      } catch (e: any) {
        if (!canceled) {
          setMsg(e?.message ?? 'Failed to verify reset link.');
          setIsError(true);
        }
      }
    }

    ensureSession();

    return () => {
      canceled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access_token, refresh_token]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (password !== confirm) {
      setIsError(true);
      setMsg('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
      setIsError(true);
      setMsg('Password must be at least 6 characters.');
      return;
    }
    
    setIsError(false);
    setMsg('');

    setLoading(true);
    try {
      if (!supabase) {
        throw new Error('Supabase configuration not properly set');
      }
      
      // Final guard: ensure we have a session
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session && access_token && refresh_token) {
        const { error: sErr } = await supabase.auth.setSession({
          access_token,
          refresh_token,
        });
        if (sErr) throw sErr;
      }

      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) throw updateError;

      // Redirect to success page
      window.location.href = '/screens/ResetPasswordSuccess';
    } catch (e: any) {
      setIsError(true);
      setMsg(e?.message ?? 'An error occurred while resetting your password.');
    } finally {
      setLoading(false);
    }
  }

  const canSubmit = !loading && password.length > 0 && confirm.length > 0;

  return (
    <div className="page">
      <header className="header">
        <div className="logo">CheaperPlan</div>
      </header>

      <main className="main">
        <div className="card">
          <h1 className="title">Reset Your Password</h1>
          <p className="subtitle">Please enter your new password below</p>

          {!sessionReady ? (
            <div className="status">
              <span className={isError ? 'error' : 'info'}>
                {msg || 'Verifying reset link…'}
              </span>
              {isError && (
                <button
                  type="button"
                  className="linkBtn"
                  onClick={() => {
                    // TODO: wire your "Resend email" flow here.
                    alert('Implement your "Resend reset email" flow here.');
                  }}
                >
                  Resend reset email
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={onSubmit} className="form" noValidate>
              <div className="field">
                <label htmlFor="pw">New password</label>
                <div className="pwWrap">
                  <input
                    id="pw"
                    type={showPw ? 'text' : 'password'}
                    inputMode="text"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (msg && isError) {
                        setMsg('');
                        setIsError(false);
                      }
                    }}
                    disabled={loading}
                    placeholder="At least 6 characters"
                  />
                  <button
                    type="button"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    className="ghost"
                    onClick={() => setShowPw((s) => !s)}
                    tabIndex={0}
                  >
                    {showPw ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              <div className="field">
                <label htmlFor="confirm">Confirm password</label>
                <div className="pwWrap">
                  <input
                    id="confirm"
                    type={showPw ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => {
                      setConfirm(e.target.value);
                      if (msg && isError) {
                        setMsg('');
                        setIsError(false);
                      }
                    }}
                    disabled={loading}
                    placeholder="Re-enter your new password"
                  />
                  <button
                    type="button"
                    aria-label={showPw ? 'Hide password' : 'Show password'}
                    className="ghost"
                    onClick={() => setShowPw((s) => !s)}
                    tabIndex={0}
                  >
                    {showPw ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {msg && (
                <div className={`alert ${isError ? 'bad' : 'good'}`}>
                  {msg}
                </div>
              )}

              <button type="submit" className="primary" disabled={!canSubmit}>
                {loading ? 'Processing…' : 'Update password'}
              </button>

            </form>
          )}
        </div>
      </main>

      <footer className="footer">
        <p>Thanks for choosing CheaperPlan.</p>
      </footer>

      <style jsx>{`

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: white;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
        }

        .header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .logo {
          font-size: 2.5rem;
          font-weight: bold;
          color: #0070f3;
          margin-bottom: 1rem;
        }

        .main {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 24px 16px;
        }

        .card {
          width: 100%;
          max-width: 420px;
          background: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }

        .title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: #6b7280;
          margin-bottom: 2rem;
        }

        .hint {
          color: var(--cp-muted);
          margin: 0 0 14px;
          line-height: 1.5;
        }

        .status {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .info {
          color: #6b7280;
        }
        .error {
          color: #dc2626;
        }
        .linkBtn {
          align-self: flex-start;
          border: none;
          background: transparent;
          color: #0070f3;
          padding: 0;
          text-decoration: underline;
          cursor: pointer;
        }
        .linkBtn:hover {
          color: #0051cc;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          text-align: left;
        }

        .field {
          display: grid;
          gap: 8px;
        }
        label {
          font-size: 14px;
          color: #6b7280;
        }
        input {
          width: 100%;
          font-size: 16px;
          padding: 14px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          outline: none;
          background: #fff;
        }
        input:focus {
          border-color: #0070f3;
          box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.1);
        }

        .pwWrap {
          position: relative;
        }
        .pwWrap input {
          padding-right: 72px;
        }
        .ghost {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          height: 32px;
          padding: 0 10px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: #fff;
          cursor: pointer;
          font-size: 12px;
        }


        .alert {
          border: 1px solid #e5e7eb;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
          line-height: 1.45;
        }
        .alert.good {
          border-color: #bbf7d0;
          background: #ecfdf5;
          color: #047857;
        }
        .alert.bad {
          border-color: #fecaca;
          background: #fef2f2;
          color: #dc2626;
        }

        .primary {
          height: 48px;
          border: none;
          border-radius: 6px;
          background: #0070f3;
          color: #fff;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .primary:hover:not(:disabled) {
          background: #0051cc;
        }
        .primary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }


        .footer {
          text-align: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
        }

        /* Mobile friendliness */
        @media (max-width: 480px) {
          .page { padding: 1rem; }
          .card { padding: 1.5rem; }
          .logo { font-size: 2rem; }
          .title { font-size: 1.5rem; }
          .subtitle { font-size: 1rem; }
          input { padding: 13px 12px; }
        }
      `}</style>
    </div>
  );
}
