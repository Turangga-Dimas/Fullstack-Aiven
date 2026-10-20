import React, { useState } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Calculator, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export default function FinLoanApp() {
  const [activeNav, setActiveNav] = useState('loans');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Dummy Data Pinjaman
  const [loans, setLoans] = useState([
    {
      id: 'LOAN-001',
      borrower: 'Budi Santoso',
      amount: 15000000,
      tenor: 12,
      interestRate: 1.2,
      status: 'APPROVED',
      date: '2026-10-15',
    },
    {
      id: 'LOAN-002',
      borrower: 'Siti Rahmawati',
      amount: 25000000,
      tenor: 24,
      interestRate: 1.0,
      status: 'PENDING',
      date: '2026-10-18',
    },
    {
      id: 'LOAN-003',
      borrower: 'Ahmad Dahlan',
      amount: 8000000,
      tenor: 6,
      interestRate: 1.5,
      status: 'REJECTED',
      date: '2026-10-19',
    },
  ]);

  // Kalkulator State
  const [calcAmount, setCalcAmount] = useState(10000000);
  const [calcTenor, setCalcTenor] = useState(12);
  const [calcInterest, setCalcInterest] = useState(1.2);

  // Perhitungan Simulasi Angsuran
  const monthlyInterest = (calcAmount * (calcInterest / 100));
  const monthlyPrincipal = calcAmount / calcTenor;
  const totalMonthlyInstallment = monthlyPrincipal + monthlyInterest;
  const totalPayment = totalMonthlyInstallment * calcTenor;

  const filteredLoans = loans.filter((loan) => {
    const matchesSearch = loan.borrower.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          loan.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || loan.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          {/* Brand Header */}
          <div className="p-5 border-b border-slate-800 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-base tracking-wide text-white flex items-center gap-1.5">
                FinLoan <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono">v1.0</span>
              </h1>
              <p className="text-[11px] text-slate-400">Fintech Loan System</p>
            </div>
          </div>

          {/* Navigation Items - Bersih Tanpa Button Aiven / Tanya Jawab */}
          <nav className="p-4 space-y-1.5 text-xs font-medium">
            <button
              onClick={() => setActiveNav('loans')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${
                activeNav === 'loans'
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Manajemen Pinjaman</span>
            </button>

            <button
              onClick={() => setActiveNav('calculator')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition ${
                activeNav === 'calculator'
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Simulasi Kredit Angsuran</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer - Bersih Tanpa Pengaturan Aiven */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Sistem Aktif
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-slate-950">
        {/* Top App Bar */}
        <header className="h-16 border-b border-slate-800 px-8 flex items-center justify-between bg-slate-900/40 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-sm font-semibold text-slate-200">
            {activeNav === 'loans' ? 'Daftar Pengajuan Pinjaman' : 'Kalkulator Simulasi Kredit'}
          </h2>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-medium text-slate-200">Administrator</p>
              <p className="text-[10px] text-slate-400">admin@finloan.id</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-emerald-400">
              AD
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl w-full mx-auto space-y-6">
          {activeNav === 'loans' ? (
            <>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Total Pinjaman Aktif</p>
                    <p className="text-2xl font-bold text-white mt-1">Rp 48.000.000</p>
                  </div>
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Pengajuan Menunggu</p>
                    <p className="text-2xl font-bold text-amber-400 mt-1">1 Permohonan</p>
                  </div>
                  <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
                <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Total Peminjam</p>
                    <p className="text-2xl font-bold text-white mt-1">3 Nasabah</p>
                  </div>
                  <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl border border-teal-500/20">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Table Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-2xl border border-slate-800">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari ID atau nama..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                    <Filter className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="bg-transparent text-slate-300 focus:outline-none cursor-pointer"
                    >
                      <option value="ALL">Semua Status</option>
                      <option value="APPROVED">Disetujui</option>
                      <option value="PENDING">Menunggu</option>
                      <option value="REJECTED">Ditolak</option>
                    </select>
                  </div>

                  <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-medium transition shadow-lg shadow-emerald-600/20">
                    <Plus className="w-4 h-4" />
                    <span>Ajukan Pinjaman</span>
                  </button>
                </div>
              </div>

              {/* Loans Table */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
                      <th className="p-4 font-semibold">ID Pinjaman</th>
                      <th className="p-4 font-semibold">Nama Peminjam</th>
                      <th className="p-4 font-semibold">Jumlah Pinjaman</th>
                      <th className="p-4 font-semibold">Tenor</th>
                      <th className="p-4 font-semibold">Bunga / Bln</th>
                      <th className="p-4 font-semibold">Tanggal</th>
                      <th className="p-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {filteredLoans.length > 0 ? (
                      filteredLoans.map((loan) => (
                        <tr key={loan.id} className="hover:bg-slate-800/40 transition">
                          <td className="p-4 font-mono font-medium text-emerald-400">{loan.id}</td>
                          <td className="p-4 font-medium text-white">{loan.borrower}</td>
                          <td className="p-4">Rp {loan.amount.toLocaleString('id-ID')}</td>
                          <td className="p-4">{loan.tenor} Bulan</td>
                          <td className="p-4">{loan.interestRate}%</td>
                          <td className="p-4 text-slate-400">{loan.date}</td>
                          <td className="p-4">
                            {loan.status === 'APPROVED' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3" /> Disetujui
                              </span>
                            )}
                            {loan.status === 'PENDING' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                <Clock className="w-3 h-3" /> Menunggu
                              </span>
                            )}
                            {loan.status === 'REJECTED' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                <XCircle className="w-3 h-3" /> Ditolak
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-slate-500">
                          Tidak ada data pinjaman yang ditemukan.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            /* Calculator Tab */
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-5">
                <h3 className="text-base font-semibold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-emerald-400" />
                  Parameter Pinjaman
                </h3>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400">Jumlah Pinjaman (Rp)</label>
                  <input
                    type="number"
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400">Tenor (Bulan)</label>
                  <select
                    value={calcTenor}
                    onChange={(e) => setCalcTenor(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  >
                    <option value={6}>6 Bulan</option>
                    <option value={12}>12 Bulan</option>
                    <option value={18}>18 Bulan</option>
                    <option value={24}>24 Bulan</option>
                    <option value={36}>36 Bulan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400">Bunga Per Bulan (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={calcInterest}
                    onChange={(e) => setCalcInterest(Number(e.target.value))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              {/* Calculator Output */}
              <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white mb-6">Ringkasan Angsuran</h3>
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Pokok Pinjaman</span>
                      <span className="text-white font-medium">Rp {calcAmount.toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Angsuran Pokok / Bulan</span>
                      <span className="text-white font-medium">Rp {Math.round(monthlyPrincipal).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Bunga / Bulan ({calcInterest}%)</span>
                      <span className="text-white font-medium">Rp {Math.round(monthlyInterest).toLocaleString('id-ID')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-800">
                      <span className="text-slate-400">Total Pengembalian</span>
                      <span className="text-white font-medium">Rp {Math.round(totalPayment).toLocaleString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-emerald-950/40 border border-emerald-500/30 p-5 rounded-xl">
                  <p className="text-xs text-emerald-300">Estimasi Cicilan per Bulan:</p>
                  <p className="text-3xl font-extrabold text-emerald-400 mt-1">
                    Rp {Math.round(totalMonthlyInstallment).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}