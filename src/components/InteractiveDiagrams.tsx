import React, { useState } from 'react';
import { Eye, Layers, Compass, HelpCircle, CheckCircle2, RotateCw } from 'lucide-react';
import MathView from './MathView';

interface DiagramProps {
  type: string;
}

export const InteractiveDiagram: React.FC<DiagramProps> = ({ type }) => {
  // State for interactive features
  const [activeAnglePair, setActiveAnglePair] = useState<'sole' | 'dongvi' | 'trongcungphia'>('sole');
  const [sliderAngleA, setSliderAngleA] = useState<number>(60);
  const [sliderAngleB, setSliderAngleB] = useState<number>(70);
  const [numberLineValue, setNumberLineValue] = useState<number>(1.5);
  const [boxDim, setBoxDim] = useState<{ a: number; b: number; c: number }>({ a: 4, b: 3, c: 5 });
  const [prismDim, setPrismDim] = useState<{ a: number; b: number; c: number; h: number }>({ a: 3, b: 4, c: 5, h: 8 });

  if (type === 'numberLine') {
    return (
      <div className="my-5 bg-gradient-to-br from-teal-900/5 to-emerald-900/5 border border-teal-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-teal-500 text-white rounded-md text-xs font-bold">Mô Phỏng Trục Số</span>
            <h4 className="font-semibold text-slate-800 text-sm">Biểu diễn số hữu tỉ & số thực trên trục số</h4>
          </div>
          <span className="text-xs text-teal-700 font-medium bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
            Điểm M = {numberLineValue}
          </span>
        </div>

        <div className="relative w-full h-24 bg-white rounded-lg border border-slate-200 p-2 flex flex-col justify-center overflow-x-auto">
          <svg className="w-full h-16 min-w-[500px]" viewBox="0 0 500 60">
            {/* Axis Line */}
            <line x1="20" y1="35" x2="480" y2="35" stroke="#0f766e" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0f766e" />
              </marker>
            </defs>

            {/* Ticks: -2, -1, 0, 1, 2, 3 */}
            {[-2, -1, 0, 1, 2, 3].map((val) => {
              const x = 250 + val * 65;
              const isOrigin = val === 0;
              return (
                <g key={val}>
                  <line x1={x} y1={isOrigin ? "20" : "27"} x2={x} y2="43" stroke={isOrigin ? "#0f766e" : "#64748b"} strokeWidth={isOrigin ? "2.5" : "1.5"} />
                  <text x={x} y="55" textAnchor="middle" fontSize="11" fontWeight={isOrigin ? "bold" : "normal"} fill={isOrigin ? "#0f766e" : "#475569"}>
                    {val}
                  </text>
                  {isOrigin && (
                    <text x={x} y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0f766e">
                      O
                    </text>
                  )}
                </g>
              );
            })}

            {/* Interactive Point M */}
            {(() => {
              const mx = 250 + numberLineValue * 65;
              return (
                <g>
                  <circle cx={mx} cy="35" r="6" fill="#0d9488" className="animate-pulse" />
                  <line x1={mx} y1="12" x2={mx} y2="35" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3,2" />
                  <rect x={mx - 24} y="0" width="48" height="18" rx="4" fill="#0f766e" />
                  <text x={mx} y="13" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ffffff">
                    M ({numberLineValue})
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        <div className="mt-3 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-600 font-medium">Điều chỉnh vị trí điểm M:</span>
            <input
              type="range"
              min="-2"
              max="3"
              step="0.25"
              value={numberLineValue}
              onChange={(e) => setNumberLineValue(parseFloat(e.target.value))}
              className="w-36 accent-teal-600 cursor-pointer"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setNumberLineValue(1.5)}
              className="px-2 py-1 rounded bg-teal-100 text-teal-800 hover:bg-teal-200 transition font-medium"
            >
              3/2 = 1.5
            </button>
            <button
              onClick={() => setNumberLineValue(-1.25)}
              className="px-2 py-1 rounded bg-teal-100 text-teal-800 hover:bg-teal-200 transition font-medium"
            >
              -5/4 = -1.25
            </button>
            <button
              onClick={() => setNumberLineValue(1.41)}
              className="px-2 py-1 rounded bg-teal-100 text-teal-800 hover:bg-teal-200 transition font-medium"
            >
              √2 ≈ 1.41
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'parallelLines') {
    return (
      <div className="my-5 bg-gradient-to-br from-teal-900/5 to-cyan-900/5 border border-teal-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-teal-600 text-white rounded-md text-xs font-bold">Hình Học Trực Quan</span>
            <h4 className="font-semibold text-slate-800 text-sm">Hai đường thẳng song song & Các cặp góc</h4>
          </div>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          <button
            onClick={() => setActiveAnglePair('sole')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeAnglePair === 'sole'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <i className="fa-solid fa-arrows-split-up-and-left mr-1"></i> So le trong (Bằng nhau)
          </button>
          <button
            onClick={() => setActiveAnglePair('dongvi')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeAnglePair === 'dongvi'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <i className="fa-solid fa-clone mr-1"></i> Đồng vị (Bằng nhau)
          </button>
          <button
            onClick={() => setActiveAnglePair('trongcungphia')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeAnglePair === 'trongcungphia'
                ? 'bg-teal-600 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            <i className="fa-solid fa-plus-minus mr-1"></i> Trong cùng phía (Bù nhau: 180°)
          </button>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-around gap-4">
          <svg className="w-64 h-48" viewBox="0 0 260 200">
            {/* Parallel lines a and b */}
            <line x1="20" y1="60" x2="240" y2="60" stroke="#0f766e" strokeWidth="2.5" />
            <text x="245" y="64" fontSize="12" fontWeight="bold" fill="#0f766e">a</text>
            
            <line x1="20" y1="140" x2="240" y2="140" stroke="#0f766e" strokeWidth="2.5" />
            <text x="245" y="144" fontSize="12" fontWeight="bold" fill="#0f766e">b</text>

            {/* Transversal c */}
            <line x1="60" y1="20" x2="200" y2="180" stroke="#0284c7" strokeWidth="2" />
            <text x="55" y="16" fontSize="12" fontWeight="bold" fill="#0284c7">c</text>

            {/* Intersection Points A & B */}
            <circle cx="95" cy="60" r="4" fill="#0f766e" />
            <text x="82" y="55" fontSize="12" fontWeight="bold" fill="#0f766e">A</text>

            <circle cx="165" cy="140" r="4" fill="#0f766e" />
            <text x="175" y="155" fontSize="12" fontWeight="bold" fill="#0f766e">B</text>

            {/* Angle arcs depending on selection */}
            {activeAnglePair === 'sole' && (
              <g>
                {/* A_4 (bottom-right of A) & B_2 (top-left of B) */}
                <path d="M 115 60 A 20 20 0 0 1 106 72" fill="none" stroke="#ef4444" strokeWidth="3" />
                <path d="M 145 140 A 20 20 0 0 1 154 128" fill="none" stroke="#ef4444" strokeWidth="3" />
                <text x="120" y="80" fontSize="11" fontWeight="bold" fill="#ef4444">A₄ (60°)</text>
                <text x="120" y="125" fontSize="11" fontWeight="bold" fill="#ef4444">B₂ (60°)</text>
              </g>
            )}

            {activeAnglePair === 'dongvi' && (
              <g>
                {/* A_1 (top-right) & B_1 (top-right) */}
                <path d="M 115 60 A 20 20 0 0 0 85 49" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                <path d="M 185 140 A 20 20 0 0 0 155 129" fill="none" stroke="#8b5cf6" strokeWidth="3" />
                <text x="105" y="42" fontSize="11" fontWeight="bold" fill="#8b5cf6">A₁ (120°)</text>
                <text x="175" y="122" fontSize="11" fontWeight="bold" fill="#8b5cf6">B₁ (120°)</text>
              </g>
            )}

            {activeAnglePair === 'trongcungphia' && (
              <g>
                {/* A_4 (bottom-right) & B_1 (top-right) */}
                <path d="M 115 60 A 20 20 0 0 1 106 72" fill="none" stroke="#f59e0b" strokeWidth="3" />
                <path d="M 185 140 A 20 20 0 0 0 155 129" fill="none" stroke="#f59e0b" strokeWidth="3" />
                <text x="110" y="82" fontSize="11" fontWeight="bold" fill="#f59e0b">A₄ (60°)</text>
                <text x="180" y="130" fontSize="11" fontWeight="bold" fill="#f59e0b">B₁ (120°)</text>
              </g>
            )}
          </svg>

          <div className="text-xs space-y-2 max-w-xs text-slate-700 bg-teal-50/70 p-3 rounded-lg border border-teal-100">
            {activeAnglePair === 'sole' && (
              <div>
                <p className="font-bold text-teal-900">Tính chất Góc So Le Trong:</p>
                <p>Nếu <MathView content="$a \parallel b$" /> thì hai góc so le trong bằng nhau:</p>
                <div className="font-semibold text-teal-800 my-1">
                  <MathView content="$\widehat{A}_4 = \widehat{B}_2 = 60^\circ$" />
                </div>
                <p className="text-slate-500 italic">Nằm so le ở phía trong của hai đường thẳng song song.</p>
              </div>
            )}
            {activeAnglePair === 'dongvi' && (
              <div>
                <p className="font-bold text-teal-900">Tính chất Cặp Góc Đồng Vị:</p>
                <p>Nếu <MathView content="$a \parallel b$" /> thì hai góc đồng vị bằng nhau:</p>
                <div className="font-semibold text-teal-800 my-1">
                  <MathView content="$\widehat{A}_1 = \widehat{B}_1 = 120^\circ$" />
                </div>
                <p className="text-slate-500 italic">Có cùng vị trí tương đối so với đường thẳng cắt c.</p>
              </div>
            )}
            {activeAnglePair === 'trongcungphia' && (
              <div>
                <p className="font-bold text-teal-900">Góc Trong Cùng Phía:</p>
                <p>Hai góc ở phía trong cùng một phía bù nhau:</p>
                <div className="font-semibold text-teal-800 my-1">
                  <MathView content="$\widehat{A}_4 + \widehat{B}_1 = 60^\circ + 120^\circ = 180^\circ$" />
                </div>
                <p className="text-slate-500 italic">Tổng số đo luôn bằng <MathView content="$180^\circ$" />.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'triangleAngles') {
    const angleC = 180 - sliderAngleA - sliderAngleB;
    return (
      <div className="my-5 bg-gradient-to-br from-teal-900/5 to-amber-900/5 border border-teal-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-teal-600 text-white rounded-md text-xs font-bold">Định Lý Trực Quan</span>
            <h4 className="font-semibold text-slate-800 text-sm">Tổng ba góc của một tam giác luôn bằng 180°</h4>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full border border-emerald-300">
            A + B + C = 180°
          </span>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4 flex flex-col md:flex-row items-center justify-around gap-4">
          <svg className="w-64 h-48" viewBox="0 0 240 180">
            {/* Triangle ABC */}
            <polygon points="120,30 40,150 200,150" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2.5" />
            <text x="120" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0f766e">A ({sliderAngleA}°)</text>
            <text x="25" y="160" fontSize="13" fontWeight="bold" fill="#0f766e">B ({sliderAngleB}°)</text>
            <text x="205" y="160" fontSize="13" fontWeight="bold" fill="#0f766e">C ({angleC}°)</text>

            {/* Arc visual */}
            <path d="M 110 50 A 20 20 0 0 0 130 50" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <path d="M 60 150 A 20 20 0 0 0 50 135" fill="none" stroke="#3b82f6" strokeWidth="2" />
            <path d="M 180 150 A 20 20 0 0 1 190 135" fill="none" stroke="#10b981" strokeWidth="2" />
          </svg>

          <div className="space-y-3 w-full md:w-64 text-xs">
            <div>
              <div className="flex justify-between text-slate-700 font-medium mb-1">
                <span>Góc A: <strong className="text-amber-600">{sliderAngleA}°</strong></span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                value={sliderAngleA}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val + sliderAngleB < 170) setSliderAngleA(val);
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-slate-700 font-medium mb-1">
                <span>Góc B: <strong className="text-blue-600">{sliderAngleB}°</strong></span>
              </div>
              <input
                type="range"
                min="20"
                max="120"
                value={sliderAngleB}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  if (val + sliderAngleA < 170) setSliderAngleB(val);
                }}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>
            <div className="p-2.5 bg-teal-50 rounded-lg border border-teal-200">
              <p className="text-slate-700">Góc C tự động tính:</p>
              <div className="font-bold text-teal-800 text-sm mt-1">
                <MathView content={`$$\\widehat{C} = 180^\\circ - (${sliderAngleA}^\\circ + ${sliderAngleB}^\\circ) = ${angleC}^\\circ$$`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'box3d') {
    const v = boxDim.a * boxDim.b * boxDim.c;
    const sxq = 2 * (boxDim.a + boxDim.b) * boxDim.c;
    const stp = sxq + 2 * boxDim.a * boxDim.b;

    return (
      <div className="my-5 bg-gradient-to-br from-teal-900/5 to-slate-900/5 border border-teal-200 rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-teal-600 text-white rounded-md text-xs font-bold">Hình Học Không Gian</span>
            <h4 className="font-semibold text-slate-800 text-sm">Hình Hộp Chữ Nhật & Công Thức Tính</h4>
          </div>
          <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-1 rounded">V = a · b · c</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-4 rounded-lg border border-slate-200">
          <div className="flex flex-col items-center justify-center">
            <svg className="w-56 h-44" viewBox="0 0 220 180">
              {/* Back edges */}
              <line x1="80" y1="40" x2="180" y2="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="80" y1="40" x2="80" y2="120" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,4" />
              <line x1="30" y1="120" x2="80" y2="40" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4,4" />

              {/* Faces shaded */}
              <polygon points="30,60 130,60 180,40 80,40" fill="#99f6e4" fillOpacity="0.4" />
              <polygon points="30,60 130,60 130,140 30,140" fill="#2dd4bf" fillOpacity="0.3" />
              <polygon points="130,60 180,40 180,120 130,140" fill="#0f766e" fillOpacity="0.2" />

              {/* Front visible edges */}
              <polygon points="30,60 130,60 130,140 30,140" fill="none" stroke="#0f766e" strokeWidth="2" />
              <line x1="130" y1="60" x2="180" y2="40" stroke="#0f766e" strokeWidth="2" />
              <line x1="130" y1="140" x2="180" y2="120" stroke="#0f766e" strokeWidth="2" />
              <line x1="180" y1="40" x2="180" y2="120" stroke="#0f766e" strokeWidth="2" />
              <line x1="30" y1="60" x2="80" y2="40" stroke="#0f766e" strokeWidth="2" />

              {/* Labels */}
              <text x="80" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0f766e">a = {boxDim.a} cm</text>
              <text x="165" y="140" fontSize="12" fontWeight="bold" fill="#0f766e">b = {boxDim.b}</text>
              <text x="15" y="100" fontSize="12" fontWeight="bold" fill="#0f766e">c = {boxDim.c}</text>
            </svg>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-slate-600 block mb-1">Dài a ({boxDim.a})</label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={boxDim.a}
                  onChange={(e) => setBoxDim({ ...boxDim, a: parseInt(e.target.value) })}
                  className="w-full accent-teal-600"
                />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">Rộng b ({boxDim.b})</label>
                <input
                  type="range"
                  min="2"
                  max="6"
                  value={boxDim.b}
                  onChange={(e) => setBoxDim({ ...boxDim, b: parseInt(e.target.value) })}
                  className="w-full accent-teal-600"
                />
              </div>
              <div>
                <label className="text-slate-600 block mb-1">Cao c ({boxDim.c})</label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={boxDim.c}
                  onChange={(e) => setBoxDim({ ...boxDim, c: parseInt(e.target.value) })}
                  className="w-full accent-teal-600"
                />
              </div>
            </div>

            <div className="bg-teal-50/80 p-3 rounded-lg space-y-1.5 border border-teal-200">
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Diện tích xung quanh (<MathView content="$S_{xq}$" />):</span>
                <strong className="text-teal-800">{sxq} cm²</strong>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Diện tích toàn phần (<MathView content="$S_{tp}$" />):</span>
                <strong className="text-teal-800">{stp} cm²</strong>
              </div>
              <div className="flex justify-between items-center text-sm pt-1 border-t border-teal-200">
                <span className="text-teal-900 font-bold">Thể tích khối hộp (<MathView content="$V$" />):</span>
                <strong className="text-teal-900 font-bold">{v} cm³</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback or simple visual
  return null;
};

export default InteractiveDiagram;
