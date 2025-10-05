import React from 'react';
import { motion } from 'framer-motion';

const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* 优雅的深蓝色单一色系背景 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #0c4a6e 0%, #075985 35%, #164e63 70%, #0c4a6e 100%)'
        }}
      />

      {/* 柔和的光晕效果 - 左上角 */}
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      {/* 柔和的光晕效果 - 右下角 */}
      <div
        className="absolute bottom-0 right-0 w-[800px] h-[800px] opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      {/* 简化的装饰性水波纹元素 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${25 + (i % 2) * 35}%`,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(56, 189, 248, 0.15)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.15, 0.3]
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}





      {/* 优雅的流动曲线 */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <motion.path
          d="M 0 300 Q 400 250 800 300 T 1600 300"
          stroke="rgba(56, 189, 248, 0.2)"
          strokeWidth="2"
          fill="none"
          animate={{
            d: [
              "M 0 300 Q 400 250 800 300 T 1600 300",
              "M 0 280 Q 400 330 800 280 T 1600 280",
              "M 0 300 Q 400 250 800 300 T 1600 300"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* 简洁的装饰点 */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 40}%`,
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.25)'
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 6,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>





      {/* 简化的网格线条 - 营造专业感 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* 减少动效样式 */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GlobalBackground;