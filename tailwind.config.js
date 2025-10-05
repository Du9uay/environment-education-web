/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 环保水质检测主题配色方案
        primary: {
          50: '#ecfeff',   // 极浅天蓝 - 最浅背景
          100: '#cffafe',  // 浅天蓝 - 浅色背景
          200: '#a5f3fc',  // 天蓝 - 卡片背景
          300: '#67e8f9',  // 中天蓝 - 次要元素
          400: '#22d3ee',  // 青色 - 交互元素
          500: '#06b6d4',  // 深青色 - 主要强调色
          600: '#0891b2',  // 深蓝绿 - 按钮悬停
          700: '#0e7490',  // 深海蓝 - 主要文本
          800: '#155e75',  // 深蓝 - 深色文本
          900: '#164e63',  // 最深蓝 - 标题文本
        },
        secondary: {
          50: '#f0fdf4',   // 极浅绿 - 成功状态浅色
          100: '#dcfce7',  // 浅绿 - 成功背景
          200: '#bbf7d0',  // 绿色 - 环保强调
          300: '#86efac',  // 中绿 - 环保元素
          400: '#4ade80',  // 活力绿 - 交互绿色
          500: '#22c55e',  // 标准绿 - 环保主色
          600: '#16a34a',  // 深绿 - 按钮绿色
          700: '#15803d',  // 森林绿 - 深色绿
          800: '#166534',  // 深森林绿
          900: '#14532d',  // 最深绿
        },
        water: {
          50: '#f0f9ff',   // 水样浅色
          100: '#e0f2fe',  // 清水色
          200: '#bae6fd',  // 浅水蓝
          300: '#7dd3fc',  // 水蓝
          400: '#38bdf8',  // 湖水蓝
          500: '#0ea5e9',  // 深水蓝
          600: '#0284c7',  // 海洋蓝
          700: '#0369a1',  // 深海蓝
          800: '#075985',  // 深蓝
          900: '#0c4a6e',  // 最深海蓝
        },
        earth: {
          50: '#fefef9',   // 自然浅色
          100: '#fefce8',  // 象牙白
          200: '#fef3c7',  // 浅土色
          300: '#fde68a',  // 土黄
          400: '#facc15',  // 金黄
          500: '#eab308',  // 土褐
          600: '#ca8a04',  // 深土色
          700: '#a16207',  // 棕褐
          800: '#854d0e',  // 深棕
          900: '#713f12',  // 最深棕
        },
        success: {
          50: '#f0fdf4',   // 成功浅绿
          500: '#22c55e',  // 成功绿
          600: '#16a34a',  // 成功深绿
        },
        warning: {
          50: '#fffbeb',   // 警告浅黄
          500: '#f59e0b',  // 警告橙
          600: '#d97706',  // 警告深橙
        },
        error: {
          50: '#fef2f2',   // 错误浅红
          500: '#ef4444',  // 错误红
          600: '#dc2626',  // 错误深红
        },
        // 保留原有base色彩供过渡使用
        base: { 
          50: '#E5DFD7',   
          800: '#8A9B8F',  
          900: 'color-mix(in oklab, #7A9E9F 86%, #000 14%)'
        },
        accent: { 
          500: '#D4B483'   // accent-sand-500 - 品牌强调色/沙土色
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        'inner-light': '0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};