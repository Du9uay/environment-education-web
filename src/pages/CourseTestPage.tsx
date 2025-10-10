import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, RefreshCw, ArrowRight, Droplets, CheckCircle } from '../components/Icons';

interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  leftId: string;
  rightId: string;
}

interface ActiveLine {
  start: { x: number; y: number };
  end?: { x: number; y: number };
  leftId: string;
}

// 打乱数组顺序的辅助函数
const shuffleArray = <T extends any>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CourseTestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('multiple');
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string | string[] }>({});
  const [lines, setLines] = useState<Line[]>([]);
  const [activeLine, setActiveLine] = useState<ActiveLine | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLDivElement }>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof matchingQuestions>([]);
  const [sequenceAnswers, setSequenceAnswers] = useState<{ [key: string]: string[] }>({});
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30分钟

  // 计时器
  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      setShowResults(true);
    }
  }, [timeRemaining, showResults]);

  // 选择题
  const multipleChoice = [
    {
      id: 'q1',
      question: '污水处理厂出水采样点应设置在？',
      options: [
        'A. 厂区外污水管网接入处',
        'B. 污水处理设施出水口处',
        'C. 泵站进水口处',
        'D. 二沉池进水口处'
      ],
      correct: 'B'
    },
    {
      id: 'q2',
      question: '《污水监测技术规范》HJ91.1-2019出台的主要背景是？',
      options: [
        'A. 为了增加污水处理厂数量',
        'B. 以往污水监测存在采样不规范、数据可靠性不足等问题',
        'C. 为了提高污水处理效率',
        'D. 为了美化城市环境'
      ],
      correct: 'B'
    },
    {
      id: 'q3',
      question: '微生物水样的保存温度要求是？',
      options: [
        'A. 常温保存',
        'B. 2-5℃冷藏',
        'C. -20℃冷冻',
        'D. 加热保存'
      ],
      correct: 'B'
    },
    {
      id: 'q4',
      question: '采样质量控制中，空白实验的作用是？',
      options: [
        'A. 检查实验过程中是否引入了杂质',
        'B. 检查采样器具是否完好',
        'C. 检查水样是否合格',
        'D. 检查采样时间是否正确'
      ],
      correct: 'A'
    },
    {
      id: 'q5',
      question: '泵站采样时要注意防止什么？',
      options: [
        'A. 阳光直射',
        'B. 水泵运行对水样的扰动',
        'C. 温度过高',
        'D. 水样蒸发'
      ],
      correct: 'B'
    }
  ];

  // 匹配题数据
  const matchingQuestions = useMemo(() => [
    {
      id: 'm1',
      leftItems: [
        { id: 'l1', text: '虹吸采样器' },
        { id: 'l2', text: '聚乙烯瓶' },
        { id: 'l3', text: '便携式pH计' },
        { id: 'l4', text: '玻璃瓶' }
      ],
      rightItems: [
        { id: 'r1', text: '手动吸取水样' },
        { id: 'r2', text: '采集重金属水样' },
        { id: 'r3', text: '现场测定pH值' },
        { id: 'r4', text: '采集有机物水样' }
      ],
      correctMatches: {
        'l1': 'r1', // 虹吸采样器 - 手动吸取水样
        'l2': 'r2', // 聚乙烯瓶 - 采集重金属水样
        'l3': 'r3', // 便携式pH计 - 现场测定pH值
        'l4': 'r4'  // 玻璃瓶 - 采集有机物水样
      }
    }
  ], []);

  // 顺序题数据
  const sequenceQuestions = useMemo(() => [
    {
      id: 'seq1',
      question: '请将采样方案制作流程按正确顺序排列：',
      items: [
        { id: 'step1', text: '明确采样目的' },
        { id: 'step2', text: '确定采样点位' },
        { id: 'step3', text: '安排采样时间' },
        { id: 'step4', text: '确定检测项目' },
        { id: 'step5', text: '选择采样方式' }
      ],
      correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5']
    },
    {
      id: 'seq2',
      question: '请将样品交接流程按正确顺序排列：',
      items: [
        { id: 'step1', text: '检查样品容器完好性' },
        { id: 'step2', text: '核对保存条件' },
        { id: 'step3', text: '填写交接单' },
        { id: 'step4', text: '双方签字确认' }
      ],
      correctOrder: ['step1', 'step2', 'step3', 'step4']
    }
  ], []);

  // 初始化时打乱题目顺序
  useEffect(() => {
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    // 初始化顺序题答案（打乱顺序）
    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  }, [matchingQuestions, sequenceQuestions]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleMultipleChoice = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // 拖拽处理函数
  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetItemId: string, questionId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === targetItemId) return;

    setSequenceAnswers(prev => {
      const items = [...prev[questionId]];
      const draggedIndex = items.indexOf(draggedItem);
      const targetIndex = items.indexOf(targetItemId);

      // 移动项目
      items.splice(draggedIndex, 1);
      items.splice(targetIndex, 0, draggedItem);

      return {
        ...prev,
        [questionId]: items
      };
    });

    setDraggedItem(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  // 重置顺序题
  const resetSequence = (questionId: string) => {
    const question = sequenceQuestions.find(q => q.id === questionId);
    if (question) {
      setSequenceAnswers(prev => ({
        ...prev,
        [questionId]: shuffleArray([...question.items]).map(item => item.id)
      }));
    }
  };

  const getItemCenter = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const svgRect = svgRef.current?.getBoundingClientRect() || { left: 0, top: 0 };
    return {
      x: rect.left + rect.width / 2 - svgRect.left,
      y: rect.top + rect.height / 2 - svgRect.top
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (activeLine) {
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        setActiveLine({
          ...activeLine,
          end: {
            x: e.clientX - svgRect.left,
            y: e.clientY - svgRect.top
          }
        });
      }
    }
  };

  const handleLeftItemClick = (leftId: string, e: React.MouseEvent) => {
    const element = itemRefs.current[leftId];
    if (element) {
      // 如果该项已经连线，先移除现有连线
      if (lines.some(line => line.leftId === leftId)) {
        setLines(prev => prev.filter(line => line.leftId !== leftId));
        setAnswers(prev => {
          const newAnswers = { ...prev };
          delete newAnswers[`${leftId}_match`];
          return newAnswers;
        });
      }

      const center = getItemCenter(element);
      setActiveLine({
        start: center,
        leftId
      });
    }
  };

  const handleRightItemClick = (rightId: string, e: React.MouseEvent) => {
    if (activeLine) {
      const element = itemRefs.current[rightId];
      if (element) {
        // 如果该项已经连线，不允许重复连接
        if (lines.some(line => line.rightId === rightId)) {
          return;
        }

        const center = getItemCenter(element);
        setLines(prev => [...prev, {
          start: activeLine.start,
          end: center,
          leftId: activeLine.leftId,
          rightId
        }]);
        setActiveLine(null);

        // 更新答案
        setAnswers(prev => ({
          ...prev,
          [`${activeLine.leftId}_match`]: rightId
        }));
      }
    }
  };

  // 重置连线题
  const handleReset = (question: any) => {
    setLines([]);
    setAnswers(prev => {
      const newAnswers = { ...prev };
      question.leftItems.forEach((item: any) => {
        delete newAnswers[`${item.id}_match`];
      });
      return newAnswers;
    });

    // 重新打乱当前题目的选项顺序
    setShuffledQuestions(prev =>
      prev.map(q =>
        q.id === question.id
          ? {
              ...q,
              leftItems: shuffleArray(q.leftItems),
              rightItems: shuffleArray(q.rightItems)
            }
          : q
      )
    );
  };

  const handleSubmitTest = () => {
    // 保存顺序题答案到answers状态
    Object.keys(sequenceAnswers).forEach(questionId => {
      setAnswers(prev => ({
        ...prev,
        [questionId]: sequenceAnswers[questionId]
      }));
    });

    setTimeout(() => {
      setShowResults(true);
      setCurrentSection('results');
    }, 500);
  };

  const calculateScore = () => {
    let totalQuestions = 0;
    let correctAnswers = 0;
    const details: any = {
      multipleChoice: [],
      matching: [],
      sequence: []
    };

    // 选择题评分
    multipleChoice.forEach(q => {
      totalQuestions++;
      const isCorrect = answers[q.id] === q.correct;
      if (isCorrect) {
        correctAnswers++;
      }
      details.multipleChoice.push({
        id: q.id,
        question: q.question,
        userAnswer: answers[q.id],
        correctAnswer: q.correct,
        isCorrect,
        options: q.options
      });
    });

    // 匹配题评分
    matchingQuestions.forEach(q => {
      Object.keys(q.correctMatches).forEach(leftId => {
        totalQuestions++;
        const isCorrect = answers[`${leftId}_match`] === (q.correctMatches as any)[leftId];
        if (isCorrect) {
          correctAnswers++;
        }
        const leftItem = q.leftItems.find(item => item.id === leftId);
        const userRightId = answers[`${leftId}_match`];
        const userRightItem = q.rightItems.find(item => item.id === userRightId);
        const correctRightItem = q.rightItems.find(item => item.id === (q.correctMatches as any)[leftId]);

        details.matching.push({
          leftId,
          leftText: leftItem?.text,
          userRightText: userRightItem?.text || '未匹配',
          correctRightText: correctRightItem?.text,
          isCorrect
        });
      });
    });

    // 顺序题评分
    sequenceQuestions.forEach(q => {
      totalQuestions++;
      const userOrder = answers[q.id] || sequenceAnswers[q.id];
      const isCorrect = userOrder && JSON.stringify(userOrder) === JSON.stringify(q.correctOrder);
      if (isCorrect) {
        correctAnswers++;
      }

      const userOrderText = userOrder && Array.isArray(userOrder) ? userOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean) : [];
      const correctOrderText = q.correctOrder.map((id: string) => q.items.find(item => item.id === id)?.text).filter(Boolean);

      details.sequence.push({
        id: q.id,
        question: q.question,
        userOrder: userOrderText,
        correctOrder: correctOrderText,
        isCorrect
      });
    });

    return {
      total: totalQuestions,
      correct: correctAnswers,
      percentage: Math.round((correctAnswers / totalQuestions) * 100),
      score: Math.round((correctAnswers / totalQuestions) * 100),
      details
    };
  };

  const resetTest = () => {
    setAnswers({});
    setShowResults(false);
    setCurrentSection('multiple');
    setLines([]);
    setActiveLine(null);
    setTimeRemaining(30 * 60);

    // 重新打乱题目顺序
    const shuffled = matchingQuestions.map(question => ({
      ...question,
      leftItems: shuffleArray(question.leftItems),
      rightItems: shuffleArray(question.rightItems)
    }));
    setShuffledQuestions(shuffled);

    // 重新初始化顺序题答案
    const initialSequenceAnswers: { [key: string]: string[] } = {};
    sequenceQuestions.forEach(question => {
      initialSequenceAnswers[question.id] = shuffleArray([...question.items]).map(item => item.id);
    });
    setSequenceAnswers(initialSequenceAnswers);
  };

  const score = showResults ? calculateScore() : null;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <Award className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            课堂测试
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            通过综合测试检验您对水质样品采样与保存知识的掌握程度
          </motion.p>

          {/* 计时器 */}
          <motion.div
            className="mt-8 inline-flex items-center glass-effect rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <RefreshCw className="w-5 h-5 text-primary-500 mr-2" />
            <span className={`font-mono text-lg ${timeRemaining < 300 ? 'text-red-400' : 'text-primary-500'}`}>
              剩余时间: {formatTime(timeRemaining)}
            </span>
          </motion.div>
        </motion.div>

        {/* 测试导航 */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="glass-effect rounded-2xl p-2">
            <div className="flex space-x-2">
              {[
                { key: 'multiple', label: '选择题' },
                { key: 'matching', label: '匹配题' },
                { key: 'sequence', label: '顺序题' }
              ].map((section) => (
                <motion.button
                  key={section.key}
                  onClick={() => setCurrentSection(section.key as any)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    currentSection === section.key
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 题目内容 */}
        <div className="max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            {/* 选择题部分 */}
            {currentSection === 'multiple' && (
              <motion.div
                key="multiple-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  选择题（每题2分，共10分）
                </h2>
                {multipleChoice.map((question, index) => (
                  <div key={question.id} className="glass-card p-6 space-y-4">
                    <h3 className="text-lg font-medium text-white">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleMultipleChoice(question.id, option[0])}
                          className={`w-full text-left p-4 rounded-lg transition-colors ${
                            answers[question.id] === option[0]
                              ? 'bg-primary-500/20 border-2 border-primary-400'
                              : 'bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <span className="text-white">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentSection('matching')}
                    className="btn-primary bg-primary-500 hover:bg-primary-600 rounded-xl flex items-center space-x-2 px-8 py-4"
                  >
                    <span>继续到匹配题</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 匹配题部分 */}
            {currentSection === 'matching' && (
              <motion.div
                key="matching-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  匹配题（每题2分，共8分）
                </h2>
                {shuffledQuestions.map((question) => (
                  <div key={question.id} className="glass-card p-8">
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                      请将左侧的采样器材与右侧对应的应用场景进行匹配
                    </h3>
                    <div
                      className="relative grid md:grid-cols-2 gap-8 min-h-[400px]"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setActiveLine(null)}
                    >
                      <svg
                        ref={svgRef}
                        className="absolute inset-0 pointer-events-none"
                        style={{ zIndex: 1, width: '100%', height: '100%' }}
                      >
                        {lines.map((line, i) => (
                          <g key={i}>
                            <line
                              x1={line.start.x}
                              y1={line.start.y}
                              x2={line.end.x}
                              y2={line.end.y}
                              stroke="#60A5FA"
                              strokeWidth="3"
                              className="transition-all duration-300"
                            />
                            <circle
                              cx={line.start.x}
                              cy={line.start.y}
                              r="5"
                              fill="#60A5FA"
                            />
                            <circle
                              cx={line.end.x}
                              cy={line.end.y}
                              r="5"
                              fill="#60A5FA"
                            />
                          </g>
                        ))}
                        {activeLine && (
                          <g>
                            <line
                              x1={activeLine.start.x}
                              y1={activeLine.start.y}
                              x2={activeLine.end?.x || activeLine.start.x}
                              y2={activeLine.end?.y || activeLine.start.y}
                              stroke="#60A5FA"
                              strokeWidth="3"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                            <circle
                              cx={activeLine.start.x}
                              cy={activeLine.start.y}
                              r="5"
                              fill="#60A5FA"
                            />
                          </g>
                        )}
                      </svg>

                      <div className="relative z-10">
                        <h4 className="text-primary-400 font-medium mb-4">采样器材</h4>
                        <div className="space-y-3">
                          {question.leftItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleLeftItemClick(item.id, e)}
                              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                                lines.some(line => line.leftId === item.id)
                                  ? 'bg-primary-500/30 border-2 border-primary-400'
                                  : 'bg-primary-900/20 hover:bg-primary-900/40'
                              }`}
                            >
                              <span className="text-white font-medium">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h4 className="text-secondary-400 font-medium mb-4">应用场景</h4>
                        <div className="space-y-3">
                          {question.rightItems.map(item => (
                            <div
                              key={item.id}
                              ref={el => el && (itemRefs.current[item.id] = el)}
                              onClick={(e) => handleRightItemClick(item.id, e)}
                              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
                                lines.some(line => line.rightId === item.id)
                                  ? 'bg-secondary-500/30 border-2 border-secondary-400'
                                  : 'bg-secondary-900/20 hover:bg-secondary-900/40'
                              }`}
                            >
                              <span className="text-white">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => handleReset(question)}
                        className="text-sm text-red-400 hover:text-red-300 transition-colors"
                      >
                        重置匹配
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center mt-8">
                  <button
                    onClick={() => setCurrentSection('sequence')}
                    className="btn-primary bg-primary-500 hover:bg-primary-600 rounded-xl flex items-center space-x-2 px-8 py-4"
                  >
                    <span>继续到顺序题</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* 顺序题部分 */}
            {currentSection === 'sequence' && (
              <motion.div
                key="sequence-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-white text-center mb-8">
                  顺序题（每题3分，共6分）
                </h2>
                {sequenceQuestions.map((question) => (
                  <div key={question.id} className="glass-card p-8">
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                      {question.question}
                    </h3>
                    <div className="space-y-3">
                      {(sequenceAnswers[question.id] || []).map((itemId, index) => {
                        const item = question.items.find(i => i.id === itemId);
                        if (!item) return null;
                        return (
                          <div
                            key={itemId}
                            draggable
                            onDragStart={(e) => handleDragStart(e, itemId)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, itemId, question.id)}
                            onDragEnd={handleDragEnd}
                            className={`p-4 rounded-lg cursor-move transition-all duration-300 hover:scale-105 flex items-center ${
                              draggedItem === itemId
                                ? 'opacity-50 scale-95 bg-primary-900/40'
                                : 'bg-primary-900/20 hover:bg-primary-900/40'
                            }`}
                          >
                            <span className="text-primary-400 font-bold mr-4 text-lg">
                              {index + 1}.
                            </span>
                            <span className="text-white font-medium flex-1">
                              {item.text}
                            </span>
                            <div className="ml-auto text-primary-400">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                              </svg>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <button
                        onClick={() => resetSequence(question.id)}
                        className="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center"
                      >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        重新排序
                      </button>
                      <div className="text-sm text-gray-400">
                        提示：拖拽上述选项来安排正确的顺序
                      </div>
                    </div>
                  </div>
                ))}

                {/* 提交测试按钮 */}
                <div className="flex justify-center mt-12">
                  <button
                    onClick={handleSubmitTest}
                    className="btn-primary bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg flex items-center space-x-3 px-12 py-4"
                  >
                    <Award className="w-6 h-6" />
                    <span className="text-lg">提交测试</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* 测试结果 */}
            {currentSection === 'results' && score && (
              <motion.div
                key="results-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-8">测试结果</h2>
                  <div className="glass-card p-8 max-w-2xl mx-auto">
                    <div className="mb-6">
                      <div className={`text-6xl font-bold mb-4 ${
                        score.score >= 80 ? 'text-green-400' :
                        score.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {score.score}分
                      </div>
                      <p className="text-xl text-gray-300">
                        总分：100分 | 答对 {score.correct} 题，共 {score.total} 题
                      </p>
                    </div>

                    <div className={`p-6 rounded-lg mb-6 ${
                      score.score >= 80 ? 'bg-green-900/20' :
                      score.score >= 60 ? 'bg-yellow-900/20' :
                      'bg-red-900/20'
                    }`}>
                      <h3 className={`text-lg font-semibold mb-3 ${
                        score.score >= 80 ? 'text-green-300' :
                        score.score >= 60 ? 'text-yellow-300' : 'text-red-300'
                      }`}>
                        {score.score >= 80 ? '优秀！' :
                         score.score >= 60 ? '良好' : '需要加强'}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {score.score >= 80 ?
                          '恭喜您！您已经很好地掌握了水质监测的专业知识，可以进入实践操作阶段。' :
                          score.score >= 60 ?
                          '您对水质监测知识有一定掌握，建议复习薄弱环节。' :
                          '建议您重新学习相关章节，特别关注采样规范、点位布置和质量控制。'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* 详细答题反馈 */}
                <div className="max-w-4xl mx-auto space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-6">答题详情</h3>

                  {/* 选择题反馈 */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-primary-400 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      选择题 ({score.details.multipleChoice.filter((q: any) => q.isCorrect).length}/{score.details.multipleChoice.length})
                    </h4>
                    <div className="space-y-4">
                      {score.details.multipleChoice.map((q: any, index: number) => (
                        <div key={q.id} className={`p-4 rounded-lg ${
                          q.isCorrect ? 'bg-green-900/20' : 'bg-red-900/20'
                        }`}>
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-white font-medium">
                              {index + 1}. {q.question}
                            </h5>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              q.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}>
                              {q.isCorrect ? '正确' : '错误'}
                            </span>
                          </div>
                          <div className="text-sm space-y-1">
                            <p className="text-gray-300">
                              您的答案: <span className={q.isCorrect ? 'text-green-400' : 'text-red-400'}>
                                {q.userAnswer ? q.options.find((opt: string) => opt.startsWith(q.userAnswer)) : '未作答'}
                              </span>
                            </p>
                            {!q.isCorrect && (
                              <p className="text-gray-300">
                                正确答案: <span className="text-green-400">
                                  {q.options.find((opt: string) => opt.startsWith(q.correctAnswer))}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 匹配题反馈 */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-secondary-400 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      匹配题 ({score.details.matching.filter((q: any) => q.isCorrect).length}/{score.details.matching.length})
                    </h4>
                    <div className="space-y-4">
                      {score.details.matching.map((q: any, index: number) => (
                        <div key={index} className={`p-4 rounded-lg ${
                          q.isCorrect ? 'bg-green-900/20' : 'bg-red-900/20'
                        }`}>
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="text-white font-medium">{q.leftText}</h5>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              q.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}>
                              {q.isCorrect ? '正确' : '错误'}
                            </span>
                          </div>
                          <div className="text-sm space-y-1">
                            <p className="text-gray-300">
                              您的匹配: <span className={q.isCorrect ? 'text-green-400' : 'text-red-400'}>
                                {q.userRightText}
                              </span>
                            </p>
                            {!q.isCorrect && (
                              <p className="text-gray-300">
                                正确匹配: <span className="text-green-400">{q.correctRightText}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 顺序题反馈 */}
                  <div className="glass-card p-6">
                    <h4 className="text-xl font-semibold text-water-400 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2" />
                      顺序题 ({score.details.sequence.filter((q: any) => q.isCorrect).length}/{score.details.sequence.length})
                    </h4>
                    <div className="space-y-4">
                      {score.details.sequence.map((q: any, index: number) => (
                        <div key={q.id} className={`p-4 rounded-lg ${
                          q.isCorrect ? 'bg-green-900/20' : 'bg-red-900/20'
                        }`}>
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="text-white font-medium">{q.question}</h5>
                            <span className={`px-2 py-1 rounded text-sm font-medium ${
                              q.isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                            }`}>
                              {q.isCorrect ? '正确' : '错误'}
                            </span>
                          </div>
                          <div className="text-sm space-y-2">
                            <div>
                              <p className="text-gray-300 mb-1">您的排序:</p>
                              <div className="flex flex-wrap gap-2">
                                {q.userOrder.map((item: string, idx: number) => (
                                  <span key={idx} className={`px-2 py-1 rounded text-xs ${
                                    q.isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                  }`}>
                                    {idx + 1}. {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                            {!q.isCorrect && (
                              <div>
                                <p className="text-gray-300 mb-1">正确排序:</p>
                                <div className="flex flex-wrap gap-2">
                                  {q.correctOrder.map((item: string, idx: number) => (
                                    <span key={idx} className="px-2 py-1 rounded text-xs bg-green-500/20 text-green-400">
                                      {idx + 1}. {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 重新测试按钮 */}
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={resetTest}
                      className="btn-primary bg-primary-500 hover:bg-primary-600 rounded-xl flex items-center space-x-2 px-8 py-4"
                    >
                      <RefreshCw className="w-5 h-5" />
                      <span>重新测试</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 导航链接 */}
        <div className="mt-16 flex justify-between items-center">
          <Link
            to="/course/sampling-notes"
            className="flex items-center space-x-2 px-6 py-3 glass-effect rounded-xl text-white hover:bg-white/5 transition-all duration-300"
          >
            <Droplets className="w-5 h-5" />
            <span>返回：采样注意事项</span>
          </Link>

          <Link
            to="/"
            className="btn-primary bg-primary-500 hover:bg-primary-600 rounded-xl shadow-lg flex items-center space-x-2 px-6 py-3"
          >
            <span>回到首页</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseTestPage;
